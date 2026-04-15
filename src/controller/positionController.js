const { positionCollection, positionResource } = require("../resource/positionResource");
const createPosition = require("../service/position/createPosition");
const deletePosition = require("../service/position/deletePosition");
const fetchAllPosition = require("../service/position/fetchAllPosition");
const fetchSinglePosition = require("../service/position/fetchSinglePosition");
const updatePosition = require("../service/position/updatePosition");
const ApiResponses = require("../utils/apiResponse");

class PositionController{

    async index(req, res)
    {
        const position = await fetchAllPosition.execute(req.query.page);
        if(position)
        {
            return ApiResponses(res, 200, 'All Position', positionCollection(position));
        }

        return ApiResponses(res, 200, 'No Position Found');
    }

    async show(req, res)
    {
        const position = await fetchSinglePosition.execute(req.params.id);
        if(position)
        {
            return ApiResponses(res, 200, 'Single Position', positionResource(position));
        }

        return ApiResponses(res, 400, 'Position Not Found');
    }

    async store(req, res)
    {
        if(await createPosition.execute(req.positionData))
        {
            return ApiResponses(res, 200, 'Position Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Position');
    }

    async update(req, res)
    {
        if(await updatePosition.execute(req.params.id, req.positionData))
        {
            return ApiResponses(res, 200, 'Position Updated');
        }

        return ApiResponses(res, 400, 'Problem Updated Position');
    }

    async destroy(req, res)
    {
        if(await deletePosition.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Position Deleted');
        }

        return ApiResponses(res, 400, 'Position Not Found');
    }
}

module.exports = new PositionController();