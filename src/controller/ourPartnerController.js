const { ourPartnerCollection, ourPartnerResource } = require("../resource/ourPartnerResource");
const createOurPartner = require("../service/ourPartner/createOurPartner");
const deleteOurPartner = require("../service/ourPartner/deleteOurPartner");
const fetchAllOurPartner = require("../service/ourPartner/fetchAllOurPartner");
const fetchSingleOurPartner = require("../service/ourPartner/fetchSingleOurPartner");
const updateOurPartner = require("../service/ourPartner/updateOurPartner");
const ApiResponses = require("../utils/apiResponse");

class OurPartnerController{

    async index(req, res)
    {
        const partner = await fetchAllOurPartner.execute(req.query.page, req.query.category);
        if(partner)
        {
            return ApiResponses(res, 200, 'All Our Partner', ourPartnerCollection(partner));
        }

        return ApiResponses(res, 200, 'No Our Partner Found');
    }

    async show(req, res)
    {
        const partner = await fetchSingleOurPartner.execute(req.params.id);
        if(partner)
        {
            return ApiResponses(res, 200, 'Single Our Partner', ourPartnerResource(partner));
        }

        return ApiResponses(res, 400, 'Our Partner Not Found');
    }

    async store(req, res)
    {
        if(await createOurPartner.execute(req.partnerData))
        {
            return ApiResponses(res, 200, 'Our Partner Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Our Partner');
    }

    async update(req, res)
    {
        if(await updateOurPartner.execute(req.params.id, req.partnerData))
        {
            return ApiResponses(res, 200, 'Our Partner Updated');
        }

        return ApiResponses(res, 400, 'Our Partner Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteOurPartner.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Our Partner Deleted');
        }

        return ApiResponses(res, 400, 'Our Partner Not Found');
    }

    async getPartners(req, res){
        const partner = await fetchAllOurPartner.getPartners(req.query);
        if(partner)
        {
            return ApiResponses(res, 200, 'All Our Partner', ourPartnerCollection(partner, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Our Partner Found');
    }
}

module.exports = new OurPartnerController();