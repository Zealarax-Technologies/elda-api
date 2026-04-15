const authController = require('../controller/authController');
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
const CreateUserRequest = require('../request/createUserRequest');
const ForgetPasswordRequest = require('../request/forgetPasswordRequest');
const LoginRequest = require('../request/loginRequest');
const ResetPasswordRequest = require('../request/resetPasswordRequest');
const VerifyPasswordOTPRequest = require('../request/verifyPasswordOTPRequest');
const router = require('express').Router()


router.post('/login', LoginRequest, authController.login);
router.post('/forgotten-password', ForgetPasswordRequest, authController.forgottenPassword);
router.post('/verify-password-otp', VerifyPasswordOTPRequest, authController.verifyPasswordResetOTP);
router.post('/reset-password', ResetPasswordRequest, authController.resetPassword);

router.post('/register', CreateUserRequest, authController.create);
router.use(authMiddleware);
router.get('/users', userController.index);
router.get('/users/:id', userController.show);
router.delete('/users/:id', userController.destroy);

module.exports = router 