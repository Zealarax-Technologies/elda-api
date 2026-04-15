const { paginationLinks } = require("../utils/paginate");

function boardMemberCategoryResource(category) {
    return {
        uuid: category.uuid,
        name: category.name,
        description: category.description,
    };
}

function boardMemberCategoryCollection(categories) {
    return {
        data: categories.data.map(category => boardMemberCategoryResource(category)),
        meta: {
            total: categories.total,
            currentPage: categories.currentPage,
            totalPage: categories.totalPages,
            pageSize: categories.pageSize
        },
        links: paginationLinks('board-members-categories', categories.currentPage, categories.totalPages)
    };
}

module.exports = {
    boardMemberCategoryResource,
    boardMemberCategoryCollection,
};
