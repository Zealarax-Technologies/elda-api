const { paginationLinks } = require("../utils/paginate");

function positionCategoryResource(category) {
    return {
        uuid: category.uuid,
        name: category.name,
        description: category.description
    };
}

function positionCategoryCollection(categories) {
    return {
        data: categories.data.map(category => positionCategoryResource(category)),
        meta: {
            total: categories.total,
            currentPage: categories.currentPage,
            totalPage: categories.totalPages,
            pageSize: categories.pageSize
        },
        links: paginationLinks('position-categories', categories.currentPage, categories.totalPages)
    };
}

module.exports = {
    positionCategoryResource,
    positionCategoryCollection
};
