const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");

function partnershipResource(partnership) {
    return {
        uuid: partnership.uuid,
        name: partnership.name,
        description: partnership.description,
        images: partnership.images.length > 0 ? imageCollection(partnership.images) : partnership.images
    };
}

function partnershipCollection(partnershipArray, paginate = true) {

    if(paginate){

        return {
            data: partnershipArray.data.map(partnership => partnershipResource(partnership)),
            meta: {
                total: partnershipArray.total,
                currentPage: partnershipArray.currentPage,
                totalPage: partnershipArray.totalPages,
                pageSize: partnershipArray.pageSize
            },
            links: paginationLinks('partnerships', partnershipArray.currentPage, partnershipArray.totalPages)
        };
    }

    return partnershipArray.map((partnership) => partnershipResource(partnership));
}

function imageCollection(images)
{
    return images.map((image) => {
        return {
            uuid: image.uuid,
            image: url(image.image)
        }

    })
}

module.exports = {
    partnershipResource,
    partnershipCollection,
};
