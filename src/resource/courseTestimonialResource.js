const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");
const { courseResource } = require("./courseResource");

function courseTestimonyResource(testimony) {
    return {
        uuid: testimony.uuid,
        name: testimony.name,
        testimony: testimony.testimony,
        image: testimony.image ? url(testimony.image) : null,
        course: testimony.course
    };
}


function courseTestimonyCollection(testimonies) {
    return {
        data: testimonies.data.map(testimony => courseTestimonyResource(testimony)),
        meta: {
            total: testimonies.total,
            currentPage: testimonies.currentPage,
            totalPage: testimonies.totalPages,
            pageSize: testimonies.pageSize
        },
        links: paginationLinks('testimonies', testimonies.currentPage, testimonies.totalPages)
    };
}

module.exports = {
    courseTestimonyResource,
    courseTestimonyCollection,
};
