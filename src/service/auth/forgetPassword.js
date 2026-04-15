const ForgottenPasswordMail = require('../../mail/ForgottenPasswordMail');
const models = require('../../models');

class ForgottenPassword{
    async execute(data)
    {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otp_expires_at = new Date(Date.now() + 10 * 60 * 1000);
        const user = await models.User.findOne({where: {email: data.email}});
        if(user)
        {
            if(await ForgottenPasswordMail(user.email, otp, user.name))
            {
                await user.update({
                    otp: otp,
                    otp_expires_at: otp_expires_at
                });

                return true;
            }

            return false;
        }
    }
}

module.exports = new ForgottenPassword();