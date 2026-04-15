const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");
const { boardMemberCategoryResource } = require("./boardMemberCategoryResource");

function boardMemberResource(boardMember) {
    return {
        uuid: boardMember.uuid,
        name: boardMember.name,
        position: boardMember.position,
        about: boardMember.about,
        socialLinks: boardMember.social_links,
        image: boardMember.image ? url(boardMember.image) : null,
        category: boardMember.category ? boardMemberCategoryResource(boardMember.category) : boardMember.category,
    };
}

function boardMemberCollection(boardMembers, paginate = true) {

    if(paginate){

        return {
            data: boardMembers.data.map(boardMember => boardMemberResource(boardMember)),
            meta: {
                total: boardMembers.total,
                currentPage: boardMembers.currentPage,
                totalPage: boardMembers.totalPages,
                pageSize: boardMembers.pageSize
            },
            links: paginationLinks('board-members', boardMembers.currentPage, boardMembers.totalPages)
        };
    }

    return boardMembers.map((member) => boardMemberResource(member));
}

module.exports = {
    boardMemberResource,
    boardMemberCollection,
};
