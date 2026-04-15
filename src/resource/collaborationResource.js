const { paginationLinks } = require("../utils/paginate");

function collaborationResource(collaboration) {
    return {
        uuid: collaboration.uuid,
        title: collaboration.title,
        content: collaboration.content,
    };
}

function collaborationCollection(collaborationArray) {
    return {
        data: collaborationArray.data.map(collaboration => collaborationResource(collaboration)),
        meta: {
            total: collaborationArray.total,
            currentPage: collaborationArray.currentPage,
            totalPage: collaborationArray.totalPages,
            pageSize: collaborationArray.pageSize
        },
        links: paginationLinks('collaborations', collaborationArray.currentPage, collaborationArray.totalPages)
    };
}

module.exports = {
    collaborationResource,
    collaborationCollection,
};
