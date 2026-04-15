const models = require('../../models');

class ResetPassword{

    async execute(data)
    {
        const user= await models.User.findOne({where: {email: data.email}});
        if(user && user.otp_verified_at !== null)
        {
            const currentTime = new Date();
            const otpVerifiedAt = new Date(user.otp_verified_at);

            if(currentTime < otpVerifiedAt)
            {
                return await user.update({
                    otp_verified_at: null,
                    password: data.password,
                });
            }
        }

        return false;
    }
}

module.exports = new ResetPassword();