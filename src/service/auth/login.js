const generateWebToken = require("../../config/jwt");
const models = require('../../models');

class Login {

    async execute(loginData) {
        const user = await models.User.findOne({ where: { email: loginData.email } });

        if (await user?.comparePassword(loginData.password)) {
            user.token = await generateWebToken(user);
            console.log(user);

            return user;
        }

        return false;
    }
}

module.exports = new Login();