const { staffCollection, staffResource } = require("../resource/staffResource");
const createStaff = require("../service/staff/createStaff");
const deleteStaff = require("../service/staff/deleteStaff");
const fetchAllStaff = require("../service/staff/fetchAllStaff");
const fetchSingleStaff = require("../service/staff/fetchSingleStaff");
const updateStaff = require("../service/staff/updateStaff");
const ApiResponses = require("../utils/apiResponse");

class StaffController{

    async index(req, res)
    {
        const staff = await fetchAllStaff.execute(req.query.page);
        if(staff)
        {
            return ApiResponses(res, 200, 'All Staff', staffCollection(staff));
        }

        return ApiResponses(res, 200, 'No Staff Found');
    }

    async show(req, res)
    {
        const staff = await fetchSingleStaff.execute(req.params.id);
        if(staff)
        {
            return ApiResponses(res, 200, 'Single Staff', staffResource(staff));
        }

        return ApiResponses(res, 400, 'Staff Not Found');
    }

    async store(req, res)
    {
        if(await createStaff.execute(req.staffData))
        {
            return ApiResponses(res, 200, 'Staff Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Staff');
    }

    async update(req, res)
    {
        if(await updateStaff.execute(req.params.id, req.staffData))
        {
            return ApiResponses(res, 200, 'Staff Updated');
        }

        return ApiResponses(res, 400, 'Staff Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteStaff.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Staff Deleted');
        }

        return ApiResponses(res, 400, 'Staff Not Found');
    }
}

module.exports = new StaffController();