const { paginationLinks } = require("../utils/paginate");

function legalResource(legal) {
    return {
        uuid: legal.uuid,
        title: legal.title,
        content: legal.content,
        keyword: legal.keyword,
    };
}

function legalCollection(legalArray, paginate = true) {
    if(paginate){

        return {
            data: legalArray.data.map(legal => legalResource(legal)),
            meta: {
                total: legalArray.total,
                currentPage: legalArray.currentPage,
                totalPage: legalArray.totalPages,
                pageSize: legalArray.pageSize
            },
            links: paginationLinks('hero-sections', legalArray.currentPage, legalArray.totalPages)
        };
    }

    return legalArray.map((legal) => legalResource(legal));
}

module.exports = {
    legalResource,
    legalCollection,
};
