const { paginationLinks } = require("../utils/paginate");
const { positionCategoryResource } = require("./positionCategoryResource");

function positionResource(position) {
    return {
        uuid: position.uuid,
        title: position.title,
        slug: position.slug,
        description: position.description,
        requirements: position.requirements,
        location: position.location,
        job_type: position.job_type,
        position_category_id: position.position_category_id,
        date_created: position.createdAt,
        category: position.category ? positionCategoryResource(position.category) : null
    };
}

function positionCollection(positions) {
    return {
        data: positions.data.map(position => positionResource(position)),
        meta: {
            total: positions.total,
            currentPage: positions.currentPage,
            totalPage: positions.totalPages,
            pageSize: positions.pageSize
        },
        links: paginationLinks('positions', positions.currentPage, positions.totalPages)
    };
}

module.exports = {
    positionResource,
    positionCollection
};
