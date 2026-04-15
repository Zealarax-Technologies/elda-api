const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");
const { newsCategoryResource } = require("./newsCategoryResource");

function ourPartnerResource(partner) {
    return {
        uuid: partner.uuid,
        name: partner.name,
        image: partner.image ? url(partner.image) : null,
        category: partner.category ? newsCategoryResource(partner.category) : null
    };
}

function ourPartnerCollection(partners, paginate = true) {

    if(paginate){

        return {
            data: partners.data.map(partner => ourPartnerResource(partner)),
            meta: {
                total: partners.total,
                currentPage: partners.currentPage,
                totalPage: partners.totalPages,
                pageSize: partners.pageSize
            },
            links: paginationLinks('our-partners', partners.currentPage, partners.totalPages)
        };
    }

    return partners.map((partner) => ourPartnerResource(partner));
}

module.exports = {
    ourPartnerResource,
    ourPartnerCollection,
};
