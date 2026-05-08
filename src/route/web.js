import express from "express";
import homeController from "../controllers/homeController";
import * as authController from "../controllers/auth.controller";
import {
    forgotPasswordLimiter,
    forgotPasswordValidator,
    registerLimiter,
    registerValidator,
    resetPasswordValidator
} from "../middleware/auth.middleware";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('Bùi Thanh Tùng');
    });
    router.get('/home', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.getFindAllCrud);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.get('/register-page', (req, res) => {
        return res.render('register.ejs'); 
    });

    router.get('/verify-otp-page', (req, res) => {
        return res.render('verifyOtp.ejs');
    });

    router.get('/forgot-password-page', (req, res) => {
        return res.render('forgotPassword.ejs');
    });

    router.get('/reset-password-page', (req, res) => {
        return res.render('resetPassword.ejs');
    });

    router.post('/api/register', registerLimiter, registerValidator, authController.registerRequest);
    router.post('/api/verify-otp', authController.verifyOTP);
    router.post('/api/forgot-password', forgotPasswordLimiter, forgotPasswordValidator, authController.forgotPasswordRequest);
    router.post('/api/reset-password', resetPasswordValidator, authController.resetPassword);

    return app.use("/", router);
}

export default initWebRoutes;