const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");

function heroSectionResource(heroSection) {
    return {
        uuid: heroSection.uuid,
        title: heroSection.title,
        caption: heroSection.caption,
        cta1: {
            title: heroSection.cta1_title,
            link: heroSection.cta1_link,
        },
        cta2: {
            title: heroSection.cta2_title,
            link: heroSection.cta2_link,
        },
        image: heroSection.image ? url(heroSection.image) : heroSection.image
    };
}


function heroSectionCollection(heroSections, paginate = true) {

    if(paginate){

        return {
            data: heroSections.data.map(heroSection => heroSectionResource(heroSection)),
            meta: {
                total: heroSections.total,
                currentPage: heroSections.currentPage,
                totalPage: heroSections.totalPages,
                pageSize: heroSections.pageSize
            },
            links: paginationLinks('hero-sections', heroSections.currentPage, heroSections.totalPages)
        };
    }

    return heroSections.map((heroSection) => heroSectionResource(heroSection));
}

module.exports = {
    heroSectionResource,
    heroSectionCollection,
};
