import express from "express";
import * as authController from "../controllers/auth.controller.js";
import loginController from "../controllers/loginController";
import { 
    registerLimiter, 
    registerValidator, 
    forgotPasswordLimiter, 
    forgotPasswordValidator, 
    resetPasswordValidator 
} from "../middleware/auth.middleware.js";
import { 
    loginLimiter, 
    loginValidator, 
    refreshTokenLimiter,
    authenticateToken, 
    authorizeUser, 
    authorizeAdmin 
} from "../middleware/loginMiddleware";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.json({ message: 'Backend API is running' });
    });

    router.post('/api/register', registerLimiter, registerValidator, authController.registerRequest);
    router.post('/api/verify-otp', authController.verifyOTP);
    router.post('/api/forgot-password', forgotPasswordLimiter, forgotPasswordValidator, authController.forgotPasswordRequest);
    router.post('/api/reset-password', resetPasswordValidator, authController.resetPassword);

    router.post('/api/login', loginLimiter, loginValidator, loginController.handleLogin);
    router.post('/api/refresh-token', refreshTokenLimiter, loginController.handleRefreshToken);
    router.post('/api/logout', loginController.handleLogout);

    router.get('/user/profile', authenticateToken, authorizeUser, loginController.getUserProfile);
    router.get('/admin/profile', authenticateToken, authorizeAdmin, loginController.getAdminProfile);

    return app.use("/", router);
}

export default initWebRoutes;