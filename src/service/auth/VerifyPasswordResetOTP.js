const models = require('../../models');

class VerifyPasswordResetOTP{

    async execute(data)
    {
        const user= await models.User.findOne({where: {email: data.email}});
        console.log(user);
        if(user && user.otp !== null)
        {
            const currentTime = new Date();
            const otpExpiresAt = new Date(user.otp_expires_at);
            const otpVerifiedAt = new Date(Date.now() + 5 * 60 * 1000);

            if(user.otp === data.otp && currentTime < otpExpiresAt)
            {
                return await user.update({
                    otp_verified_at: otpVerifiedAt,
                    otp: null,
                    otp_expires_at: null
                });
            }
        }

        return false;
    }
}

module.exports = new VerifyPasswordResetOTP();