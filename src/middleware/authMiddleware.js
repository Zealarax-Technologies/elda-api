const models = require("../models");
const jwt = require("jsonwebtoken");
const ApiResponses = require("../utils/apiResponse");

async function authMiddleware(req, res, next) {
  let token;

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);

      if (!decoded.userId) {
        return ApiResponses(res, 401, "invalid token. Authentication failed.");
      }

      const user = await models.User.findByPk(decoded?.userId);

      if(user)
      {
        req.userData = {
            id: user.uuid,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: token
        };
        return next();
      }
    } catch (err) {
      return ApiResponses(res, 401, err.message);
    }
  }

  return ApiResponses(res, 401, "invalid token. Authentication failed.");
}

module.exports = authMiddleware;