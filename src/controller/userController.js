const { userCollection, userResource } = require("../resource/userResource");
const createUser = require("../service/user/createUser");
const deleteUser = require("../service/user/deleteUser");
const fetchAllUser = require("../service/user/fetchAllUser");
const fetchSingleUser = require("../service/user/fetchSingleUser");
const updateUser = require("../service/user/updateUser");
const ApiResponses = require("../utils/apiResponse");

class UserController{
    async index(req, res)
    {
        const user = await fetchAllUser.execute(req.query.page);
        if(user)
        {
            return ApiResponses(res, 200, 'All User', userCollection(user));
        }

        return ApiResponses(res, 200, 'No User Found');
    }

    async show(req, res)
    {
        const user = await fetchSingleUser.execute(req.params.id);
        if(user)
        {
            return ApiResponses(res, 200, 'Single User', userResource(user));
        }

        return ApiResponses(res, 400, 'User Not Found');
    }

    async store(req, res)
    {
        if(await createUser.execute(req.UserData))
        {
            return ApiResponses(res, 200, 'User Created');
        }

        return ApiResponses(res, 400, 'Problem Creating User');
    }

    async update(req, res)
    {
        if(await updateUser.execute(req.params.id, req.UserData))
        {
            return ApiResponses(res, 200, 'User Updated');
        }

        return ApiResponses(res, 400, 'User Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteUser.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'User Deleted');
        }

        return ApiResponses(res, 400, 'User Not Found');
    }
}

module.exports = new UserController();