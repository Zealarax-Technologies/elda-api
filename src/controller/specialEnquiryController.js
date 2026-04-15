const { specialEnquiryCollection, specialEnquiryResource } = require("../resource/specialEnquiryResource");
const createSpecialEnquiry = require("../service/specialEnquiry/createSpecialEnquiry");
const deleteSpecialEnquiry = require("../service/specialEnquiry/deleteSpecialEnquiry");
const fetchAllSpecialEnquiry = require("../service/specialEnquiry/fetchAllSpecialEnquiry");
const fetchSingleSpecialEnquiry = require("../service/specialEnquiry/fetchSingleSpecialEnquiry");
const updateSpecialEnquiry = require("../service/specialEnquiry/updateSpecialEnquiry");
const ApiResponses = require("../utils/apiResponse");

class SpecialEnquiryController{

    async index(req, res)
    {
        const enquiry = await fetchAllSpecialEnquiry.execute(req.query.page);
        if(enquiry)
        {
            return ApiResponses(res, 200, 'All Special Enquiry', specialEnquiryCollection(enquiry));
        }

        return ApiResponses(res, 200, 'No Special Enquiry found');
    }

    async show(req, res)
    {
        const enquiry = await fetchSingleSpecialEnquiry.execute(req.params.keyword);
        if(enquiry)
        {
            return ApiResponses(res, 200, 'Single Special Enquiry', specialEnquiryResource(enquiry));
        }

        return ApiResponses(res, 400, 'Special Enquiry not found');
    }

    async store(req, res)
    {
        if(await createSpecialEnquiry.execute(req.specialEnquiryData))
        {
            return ApiResponses(res, 200, 'Special Enquiry Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Special Enquiry');
    }

    async update(req, res)
    {
        if(await updateSpecialEnquiry.execute(req.params.id, req.specialEnquiryData))
        {
            return ApiResponses(res, 200, 'Special Enquiry Updated');
        }

        return ApiResponses(res, 400, 'Problem Updating Special Enquiry');
    }

    async destroy(req, res)
    {
        if(await deleteSpecialEnquiry.execute(req.params.id, ))
        {
            return ApiResponses(res, 200, 'Special Enquiry Deleted');
        }

        return ApiResponses(res, 400, 'Special Enquiry not found');
    }
    async getEnquiry(req, res){
        const enquiry = await fetchAllSpecialEnquiry.getEnquiry(req.query);
        if(enquiry)
        {
            return ApiResponses(res, 200, 'All Special Enquiry', specialEnquiryCollection(enquiry, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Special Enquiry found');
    }
}

module.exports = new SpecialEnquiryController();