const { positionCategoryCollection, positionCategoryResource } = require("../resource/positionCategoryResource");
const createPositionCategory = require("../service/positionCategory/createPositionCategory");
const deletePositionCategory = require("../service/positionCategory/deletePositionCategory");
const fetchAllPositionCategory = require("../service/positionCategory/fetchAllPositionCategory");
const fetchSinglePositionCategory = require("../service/positionCategory/fetchSinglePositionCategory");
const updatePositionCategory = require("../service/positionCategory/updatePositionCategory");
const ApiResponses = require("../utils/apiResponse");

class PositionCategoryController{

    async index(req, res)
    {
        const category = await fetchAllPositionCategory.execute(req.query.page);
        if(category)
        {
            return ApiResponses(res, 200, 'All Position Category', positionCategoryCollection(category));
        }

        return ApiResponses(res, 200, 'No Position Category Found');
    }

    async show(req, res)
    {
        const category = await fetchSinglePositionCategory.execute(req.params.id);
        if(category)
        {
            return ApiResponses(res, 200, 'Single Position Category', positionCategoryResource(category));
        }

        return ApiResponses(res, 400, 'Position Category Not Found');
    }

    async store(req, res)
    {
        if(await createPositionCategory.execute(req.categoryData))
        {
            return ApiResponses(res, 200, 'Position Category Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Position Category');
    }

    async update(req, res)
    {
        if(await updatePositionCategory.execute(req.params.id, req.categoryData))
        {
            return ApiResponses(res, 200, 'Position Category Updated');
        }

        return ApiResponses(res, 400, 'Problem Updating Position Category');
    }

    async destroy(req, res)
    {
        if(await deletePositionCategory.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Position Category Deleted');
        }

        return ApiResponses(res, 400, 'Newss Category Not Found');
    }
}

module.exports = new PositionCategoryController();