const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");

function testimonyResource(testimony) {
    return {
        uuid: testimony.uuid,
        name: testimony.name,
        quote: testimony.quote,
        role: testimony.role,
        company: testimony.company,
        image: testimony.image ? url(testimony.image) : null,
    };
}

function testimonyCollection(testimonies, paginate = true) {

    if(paginate){
        return {
            data: testimonies.data.map(testimony => testimonyResource(testimony)),
            meta: {
                total: testimonies.total,
                currentPage: testimonies.currentPage,
                totalPage: testimonies.totalPages,
                pageSize: testimonies.pageSize
            },
            links: paginationLinks('testimonies', testimonies.currentPage, testimonies.totalPages)
        };
    }

    return testimonies.map((testimony) => testimonyResource(testimony));
}

module.exports = {
    testimonyResource,
    testimonyCollection,
};
