import User from "../models/user.js";
import OTP from "../models/otp.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { createTempToken, createAccessToken } from "../utils/jwt.js";
import { sendOTPEmail } from "../utils/email.js"; 

export const registerRequest = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password, firstName, lastName } = req.body;
        
        const existingUser = await User.findOne({ email }); 
        if (existingUser) return res.status(400).json({ error: "Email đã được sử dụng" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const tempToken = createTempToken({ email, hashedPassword, firstName, lastName });
        
        await OTP.deleteMany({ email });
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        await OTP.create({ email, otp: otpCode });

        await sendOTPEmail(email, otpCode);
        
        res.status(200).json({ 
            message: "OTP đã được gửi đến email của bạn. Vui lòng kiểm tra và xác nhận để hoàn tất.", 
            tempToken 
        });
    } catch (error) {
        console.error("Error in registerRequest:", error);
        res.status(500).json({ error: "Có lỗi xảy ra trong quá trình đăng ký" });
    }
}

export const verifyOTP = async (req, res) => { 
    const { email, otp, tempToken } = req.body;
    try {
        const decoded = jwt.verify(tempToken, process.env.JWT_TEMP_SECRET);
        
        const validOTP = await OTP.findOne({ email, otp }); 
        if (!validOTP) return res.status(400).json({ error: "OTP không hợp lệ hoặc đã hết hạn" });

        const newUser = await User.create({
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            email: decoded.email,
            password: decoded.hashedPassword,
            roleId: 'R2',
            isActive: true
        });

        await OTP.deleteOne({ _id: validOTP._id });
        const accessToken = createAccessToken(newUser);
        
        res.status(200).json({ message: "Đăng ký thành công", accessToken });
    } catch (error) {
        res.status(400).json({ error: "Token không hợp lệ hoặc đã hết hạn" });
    }
}