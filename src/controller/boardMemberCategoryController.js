const { boardMemberCategoryCollection, boardMemberCategoryResource } = require("../resource/boardMemberCategoryResource");
const createBoardMembersCategory = require("../service/boardMembersCategory/createBoardMembersCategory");
const deleteBoardMembersCategory = require("../service/boardMembersCategory/deleteBoardMembersCategory");
const fetchAllBoardMembersCategory = require("../service/boardMembersCategory/fetchAllBoardMembersCategory");
const fetchSingleBoardMembersCategory = require("../service/boardMembersCategory/fetchSingleBoardMembersCategory");
const updateBoardMembersCategory = require("../service/boardMembersCategory/updateBoardMembersCategory");
const ApiResponses = require("../utils/apiResponse");

class BoardMemberCategoryController{

    async index(req, res)
    {
        const category = await fetchAllBoardMembersCategory.execute(req.query.page);
        if(category)
        {
            return ApiResponses(res, 200, 'All Board Member Category', boardMemberCategoryCollection(category));
        }

        return ApiResponses(res, 200, 'No Board Member Category Found');
    }

    async show(req, res)
    {
        const category = await fetchSingleBoardMembersCategory.execute(req.params.id);
        if(category)
        {
            return ApiResponses(res, 200, 'Single Board Member Category', boardMemberCategoryResource(category));
        }

        return ApiResponses(res, 400, 'Board Member Category Not Found');
    }

    async store(req, res)
    {
        if(await createBoardMembersCategory.execute(req.categoryData))
        {
            return ApiResponses(res, 200, 'Board Member Category Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Board Member Category');
    }

    async update(req, res)
    {
        if(await updateBoardMembersCategory.execute(req.params.id, req.categoryData))
        {
            return ApiResponses(res, 200, 'Board Members Category Updated');
        }

        return ApiResponses(res, 400, 'Problem Updated Board Members Category');
    }

    async destroy(req, res)
    {
        if(await deleteBoardMembersCategory.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Board Members Category Deleted');
        }

        return ApiResponses(res, 400, 'Board Members Category Not Found');
    }
}

module.exports = new BoardMemberCategoryController();