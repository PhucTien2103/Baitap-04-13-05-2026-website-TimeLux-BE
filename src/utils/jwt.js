import jwt from 'jsonwebtoken';

export const createTempToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_TEMP_SECRET, { expiresIn: '10m' });
};

export const createAccessToken = (user) => { 
    return jwt.sign(
        { id: user._id, roleId: user.roleId },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
};