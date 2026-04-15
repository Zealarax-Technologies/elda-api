const { boardMemberCollection, boardMemberResource } = require("../resource/boardMemberResource");
const createBoardMember = require("../service/boardMember/createBoardMember");
const deleteBoardMember = require("../service/boardMember/deleteBoardMember");
const fetchAllBoardMember = require("../service/boardMember/fetchAllBoardMember");
const fetchSingleBoardMember = require("../service/boardMember/fetchSingleBoardMember");
const updateBoardMember = require("../service/boardMember/updateBoardMember");
const ApiResponses = require("../utils/apiResponse");

class BoardMemberController{

    async index(req, res)
    {
        const member = await fetchAllBoardMember.execute(req.query.page);
        if(member)
        {
            return ApiResponses(res, 200, 'All Board Member', boardMemberCollection(member));
        }

        return ApiResponses(res, 200, 'No Board Member Found');
    }

    async show(req, res)
    {
        const member = await fetchSingleBoardMember.execute(req.params.id);
        if(member)
        {
            return ApiResponses(res, 200, 'Single Board Member', boardMemberResource(member));
        }

        return ApiResponses(res, 400, 'Board Member Not Found');
    }

    async store(req, res)
    {
        if(await createBoardMember.execute(req.memberData))
        {
            return ApiResponses(res, 200, 'Board Member Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Board Member');
    }

    async update(req, res)
    {
        if(await updateBoardMember.execute(req.params.id, req.memberData))
        {
            return ApiResponses(res, 200, 'Board Members Updated');
        }

        return ApiResponses(res, 400, 'Problem Updated Board Members');
    }

    async destroy(req, res)
    {
        if(await deleteBoardMember.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Board Members Deleted');
        }

        return ApiResponses(res, 400, 'Board Members Not Found');
    }
    
    async getBoardMembers(req, res){
        const member = await fetchAllBoardMember.getMember(req.query);
        if(member)
        {
            return ApiResponses(res, 200, 'All Board Member', boardMemberCollection(member, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Board Member Found');
    }
}

module.exports = new BoardMemberController();