import express from "express";
import * as homeController from "../controllers/homeController.js";
import * as authController from "../controllers/auth.controller.js";
import { registerLimiter, registerValidator } from "../middleware/auth.middleware.js";

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

    router.post('/api/register', registerLimiter, registerValidator, authController.registerRequest);
    router.post('/api/verify-otp', authController.verifyOTP);

    return app.use("/", router);
}

export default initWebRoutes;