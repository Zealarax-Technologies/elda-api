const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");

function aboutUsResource(aboutUs) {
    return {
        uuid: aboutUs.uuid,
        title: aboutUs.title,
        content: aboutUs.content,
        order_no: aboutUs.order_no,
        active: aboutUs.active,
        keyword: aboutUs.keyword,
        image: aboutUs.image ? url(aboutUs.image) : aboutUs.image
    };
}

function aboutUsCollection(aboutUsArray, paginate = true) {
    if(paginate){

        return {
            data: aboutUsArray.data.map(aboutUs => aboutUsResource(aboutUs)),
            meta: {
                total: aboutUsArray.total,
                currentPage: aboutUsArray.currentPage,
                totalPage: aboutUsArray.totalPages,
                pageSize: aboutUsArray.pageSize
            },
            links: paginationLinks('hero-sections', aboutUsArray.currentPage, aboutUsArray.totalPages)
        };
    }

    return aboutUsArray.map((aboutus) => aboutUsResource(aboutus));
}

module.exports = {
    aboutUsResource,
    aboutUsCollection,
};
