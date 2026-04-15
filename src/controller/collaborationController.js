const { collaborationCollection, collaborationResource } = require("../resource/collaborationResource");
const createCollaboration = require("../service/collaboration/createCollaboration");
const deleteCollaboration = require("../service/collaboration/deleteCollaboration");
const fetchAllCollaboration = require("../service/collaboration/fetchAllCollaboration");
const fetchSingleCollaboration = require("../service/collaboration/fetchSingleCollaboration");
const updateCollaboration = require("../service/collaboration/updateCollaboration");
const ApiResponses = require("../utils/apiResponse");

class CollaborationController{
    async index(req, res)
    {
        const collaboration = await fetchAllCollaboration.execute(req.query.page);
        if(collaboration)
        {
            return ApiResponses(res, 200, 'All Collaboration', collaborationCollection(collaboration));
        }

        return ApiResponses(res, 200, 'No Collaboration Found');
    }

    async show(req, res)
    {
        const collaboration = await fetchSingleCollaboration.execute(req.params.id);
        if(collaboration)
        {
            return ApiResponses(res, 200, 'Single Collaboration', collaborationResource(collaboration));
        }

        return ApiResponses(res, 400, 'Collaboration Not Found');
    }

    async store(req, res)
    {
        if(await createCollaboration.execute(req.collaborationData))
        {
            return ApiResponses(res, 200, 'Collaboration Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Collaboration');
    }

    async update(req, res)
    {
        if(await updateCollaboration.execute(req.params.id, req.collaborationData))
        {
            return ApiResponses(res, 200, 'Collaboration Updated');
        }

        return ApiResponses(res, 400, 'Collaboration Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteCollaboration.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Collaboration Deleted');
        }

        return ApiResponses(res, 400, 'Collaboration Not Found');
    }
}

module.exports = new CollaborationController();