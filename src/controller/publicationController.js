const { publicationCollection, publicationResource } = require("../resource/publicationResource");
const createPublication = require("../service/publication/createPublication");
const deletePublication = require("../service/publication/deletePublication");
const fetchAllPublication = require("../service/publication/fetchAllPublication");
const fetchSinglePublication = require("../service/publication/fetchSinglePublication");
const updatePublication = require("../service/publication/updatePublication");
const ApiResponses = require("../utils/apiResponse");

class PositionController{

    async index(req, res)
    {
        const publication = await fetchAllPublication.execute(req.query.page, req.query.category);
        if(publication)
        {
            return ApiResponses(res, 200, 'All Publication', publicationCollection(publication));
        }

        return ApiResponses(res, 200, 'No Publication Found');
    }

    async show(req, res)
    {
        const publication = await fetchSinglePublication.execute(req.params.id);
        if(publication)
        {
            return ApiResponses(res, 200, 'Single Publication', publicationResource(publication));
        }

        return ApiResponses(res, 400, 'Publication Not Found');
    }

    async store(req, res)
    {
        if(await createPublication.execute(req.publicationData))
        {
            return ApiResponses(res, 200, 'Publication Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Publication');
    }

    async update(req, res)
    {
        if(await updatePublication.execute(req.params.id, req.publicationData))
        {
            return ApiResponses(res, 200, 'Publication Updated');
        }

        return ApiResponses(res, 400, 'Publication Not Found');
    }

    async destroy(req, res)
    {
        if(await deletePublication.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Publication Deleted');
        }

        return ApiResponses(res, 400, 'Publication Not Found');
    }

    async getResearch(req, res){
        const publication = await fetchAllPublication.getResearch(req.params.id, req.query);
        if(publication)
        {
            return ApiResponses(res, 200, 'All Publication', publicationCollection(publication, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Publication Found');
    }
    
}

module.exports = new PositionController();