const createUser = require('../service/user/createUser')
const updateUser = require('../service/user/updateUser')
const fetchUser = require('../service/user/fetchSingleUser')
const fetchAllUsers = require('../service/user/fetchAllUser')
const destroyUser = require('../service/user/deleteUser')
const ApiResponses = require('../utils/apiResponse')
const login = require('../service/auth/login')
const { userResource } = require('../resource/userResource')
const forgetPassword = require('../service/auth/forgetPassword')
const VerifyPasswordResetOTP = require('../service/auth/VerifyPasswordResetOTP')
const resetPassword = require('../service/auth/resetPassword')

class AuthController {
    async index(req, res) {
        // createUser
    }

    async create(req, res) {
        if (await createUser.execute(req.userData)) {
            return ApiResponses(res, 201, 'user created successfully');
        }
        return ApiResponses(res, 400, "Problem Creating User");
    }

    async login(req, res) {
        const user = await login.execute(req.loginData);
        if (user) {
            req.user = user;
            return ApiResponses(res, 200, "User Logged In Successfully", userResource(user));
        }

        return ApiResponses(res, 400, "Invalid Email or password");
    }

    async forgottenPassword(req, res) {
        if (await forgetPassword.execute(req.userData)) {
            return ApiResponses(res, 200, 'Password Reset OTP Sent Successfully, Expires in 10 minutes');
        }
        return ApiResponses(res, 400, 'Cannot send otp, check email and try again');
    }

    async verifyPasswordResetOTP(req, res) {
        if (await VerifyPasswordResetOTP.execute(req.userData)) {
            return ApiResponses(res, 200, 'Password Reset OTP Confirmed Successfully, Proceed to reset your password within 5 minutes');
        }
        return ApiResponses(res, 400, 'Invalid or Expired OTP');
    }

    async resetPassword(req, res) {
        if (await resetPassword.execute(req.userData)) {
            return ApiResponses(res, 200, 'Password Reset Successfully');
        }
        return ApiResponses(res, 400, 'Unable to reset password,request for a new otp');
    }

}

module.exports = new AuthController();