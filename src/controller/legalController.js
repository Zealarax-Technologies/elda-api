const { legalCollection, legalResource } = require("../resource/legalResource");
const createLegal = require("../service/legal/createLegal");
const deleteLegal = require("../service/legal/deleteLegal");
const fetchAllLegal = require("../service/legal/fetchAllLegal");
const fetchSingleLegal = require("../service/legal/fetchSingleLegal");
const updateLegal = require("../service/legal/updateLegal");
const ApiResponses = require("../utils/apiResponse");

class LegalController{
    async index(req, res)
    {
        const legal = await fetchAllLegal.execute(req.query.page);
        if(legal)
        {
            return ApiResponses(res, 200, 'All Legal', legalCollection(legal));
        }

        return ApiResponses(res, 200, 'No Legal Found');
    }

    async show(req, res)
    {
        const legal = await fetchSingleLegal.execute(req.params.id);
        if(legal)
        {
            return ApiResponses(res, 200, 'Single Legal', legalResource(legal));
        }

        return ApiResponses(res, 400, 'Legal Not Found');
    }

    async store(req, res)
    {
        if(await createLegal.execute(req.legalData))
        {
            return ApiResponses(res, 200, 'Legal Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Legal');
    }

    async update(req, res)
    {
        if(await updateLegal.execute(req.params.id, req.legalData))
        {
            return ApiResponses(res, 200, 'Legal Updated');
        }

        return ApiResponses(res, 400, 'Legal Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteLegal.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Legal Deleted');
        }

        return ApiResponses(res, 400, 'Legal Not Found');
    }

    async getLegals(req, res){
        const legal = await fetchAllLegal.getLegals(req.query);
        if(legal)
        {
            return ApiResponses(res, 200, 'All Legal', legalCollection(legal, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Legal Found');
    }
}

module.exports = new LegalController();