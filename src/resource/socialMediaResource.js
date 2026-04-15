const { paginationLinks } = require("../utils/paginate");

function socialMediaResource(socialMedia) {
    return {
        uuid: socialMedia.uuid,
        name: socialMedia.name,
        icon: socialMedia.icon,
        link: socialMedia.link,
    };
}

function socialMediaCollection(socialMedias, paginate = true) {

    if(paginate){

        return {
            data: socialMedias.data.map(socialMedia => socialMediaResource(socialMedia)),
            meta: {
                total: socialMedias.total,
                currentPage: socialMedias.currentPage,
                totalPage: socialMedias.totalPages,
                pageSize: socialMedias.pageSize
            },
            links: paginationLinks('social-medias', socialMedias.currentPage, socialMedias.totalPages)
        };
    }

    return socialMedias.map((socials) => socialMediaResource(socials));
}

module.exports = {
    socialMediaResource,
    socialMediaCollection
};
