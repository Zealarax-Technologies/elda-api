const jwt = require('jsonwebtoken');

async function generateWebToken(user)
{
    return await jwt.sign(
        {
            userId: user.uuid,
        },
        process.env.JWT_KEY,
        { expiresIn: "1d"}
    );
}

module.exports = generateWebToken;