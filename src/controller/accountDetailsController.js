const { accountDetailsCollection, accountDetailsResource } = require("../resource/accountDetailsResource");
const createAccountDetails = require("../service/accountDetails/createAccountDetails");
const deleteAccountDetails = require("../service/accountDetails/deleteAccountDetails");
const fetchAllAccountDetails = require("../service/accountDetails/fetchAllAccountDetails");
const fetchSingleAccountDetails = require("../service/accountDetails/fetchSingleAccountDetails");
const updateAccountDetails = require("../service/accountDetails/updateAccountDetails");
const ApiResponses = require("../utils/apiResponse");

class AccountDetailsController{

    async index(req, res)
    {
        const details = await fetchAllAccountDetails.execute(req.query.page);
        if(details)
        {
            return ApiResponses(res, 200, 'All Account Details', accountDetailsCollection(details));
        }

        return ApiResponses(res, 200, 'No Account Details found');
    }

    async show(req, res)
    {
        const details = await fetchSingleAccountDetails.execute(req.params.keyword);
        if(details)
        {
            return ApiResponses(res, 200, 'Single Account Details', accountDetailsResource(details));
        }

        return ApiResponses(res, 400, 'Account Details not found');
    }

    async store(req, res)
    {
        if(await createAccountDetails.execute(req.detailsData))
        {
            return ApiResponses(res, 200, 'Account Details Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Account Details');
    }

    async update(req, res)
    {
        if(await updateAccountDetails.execute(req.params.id, req.detailsData))
        {
            return ApiResponses(res, 200, 'Account Details Updated');
        }

        return ApiResponses(res, 400, 'Problem Updating Account Details');
    }

    async destroy(req, res)
    {
        if(await deleteAccountDetails.execute(req.params.id, ))
        {
            return ApiResponses(res, 200, 'Account Details Deleted');
        }

        return ApiResponses(res, 400, 'Account Details not found');
    }

    async getAccountDetails(req, res){
        const details = await fetchAllAccountDetails.getAccountDetails(req.query);
        if(details)
        {
            return ApiResponses(res, 200, 'All Account Details', accountDetailsResource(details));
        }

        return ApiResponses(res, 200, 'No Account Details found');
    }
}

module.exports = new AccountDetailsController();