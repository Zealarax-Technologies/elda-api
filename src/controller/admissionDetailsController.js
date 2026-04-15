const { admissionDetailsCollection, admissionDetailsResource } = require("../resource/admissionDetailsResource");
const createAdmissionDetails = require("../service/admissionDetails/createAdmissionDetails");
const deleteAdmissionDetails = require("../service/admissionDetails/deleteAdmissionDetails");
const fetchAllAdmissionDetails = require("../service/admissionDetails/fetchAllAdmissionDetails");
const fetchSingleAdmissionDetails = require("../service/admissionDetails/fetchSingleAdmissionDetails");
const updateAdmissionDetails = require("../service/admissionDetails/updateAdmissionDetails");
const ApiResponses = require("../utils/apiResponse");

class AdmissionDetailsController{

    async index(req, res)
    {
        const details = await fetchAllAdmissionDetails.execute(req.query.page);
        if(details)
        {
            return ApiResponses(res, 200, 'All Admission Details', admissionDetailsCollection(details));
        }

        return ApiResponses(res, 200, 'No Admission Details found');
    }

    async show(req, res)
    {
        const details = await fetchSingleAdmissionDetails.execute(req.params.keyword);
        if(details)
        {
            return ApiResponses(res, 200, 'Single Admission Details', admissionDetailsResource(details));
        }

        return ApiResponses(res, 400, 'Admission Details not found');
    }

    async store(req, res)
    {
        if(await createAdmissionDetails.execute(req.detailsData))
        {
            return ApiResponses(res, 200, 'Admission Details Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Admission Details');
    }

    async update(req, res)
    {
        if(await updateAdmissionDetails.execute(req.params.id, req.detailsData))
        {
            return ApiResponses(res, 200, 'Admission Details Updated');
        }

        return ApiResponses(res, 400, 'Problem Updating Admission Details');
    }

    async destroy(req, res)
    {
        if(await deleteAdmissionDetails.execute(req.params.id, ))
        {
            return ApiResponses(res, 200, 'Admission Details Deleted');
        }

        return ApiResponses(res, 400, 'Admission Details not found');
    }

    async getAdmissionDetails(req, res){
        const details = await fetchAllAdmissionDetails.getAdmissionDetails(req.query);
        if(details)
        {
            return ApiResponses(res, 200, 'All Admission Details', admissionDetailsCollection(details, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Admission Details found');
    }
}

module.exports = new AdmissionDetailsController();