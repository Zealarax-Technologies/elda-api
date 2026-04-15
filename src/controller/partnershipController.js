const { partnershipCollection, partnershipResource } = require("../resource/partnershipResource");
const createPartnership = require("../service/partnership/createPartnership");
const deletePartnership = require("../service/partnership/deletePartnership");
const fetchAllPartnership = require("../service/partnership/fetchAllPartnership");
const fetchSinglePartnership = require("../service/partnership/fetchSinglePartnership");
const updatePartnership = require("../service/partnership/updatePartnership");
const ApiResponses = require("../utils/apiResponse");

class PartnershipController{

    async index(req, res)
    {
        const partnership = await fetchAllPartnership.execute(req.query.page);
        if(partnership)
        {
            return ApiResponses(res, 200, 'All Partnership', partnershipCollection(partnership));
        }

        return ApiResponses(res, 200, 'No Partnership Found');
    }

    async show(req, res)
    {
        const partnership = await fetchSinglePartnership.execute(req.params.id);
        if(partnership)
        {
            return ApiResponses(res, 200, 'Single Partnership', partnershipResource(partnership));
        }

        return ApiResponses(res, 400, 'Partnership Not Found');
    }

    async store(req, res)
    {
        if(await createPartnership.execute(req.partnershipData))
        {
            return ApiResponses(res, 200, 'Partnership Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Partnership');
    }

    async update(req, res)
    {
        if(await updatePartnership.execute(req.params.id, req.partnershipData))
        {
            return ApiResponses(res, 200, 'Partnership Updated');
        }

        return ApiResponses(res, 400, 'Partnership Not Found');
    }

    async destroy(req, res)
    {
        if(await deletePartnership.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Partnership Deleted');
        }

        return ApiResponses(res, 400, 'Partnership Not Found');
    }

    async getPartnership(req, res){
        const partnership = await fetchAllPartnership.getPartnership(req.query);
        if(partnership)
        {
            return ApiResponses(res, 200, 'All Partnership', partnershipCollection(partnership, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Partnership Found');
    }
}

module.exports = new PartnershipController();