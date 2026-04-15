const { paginationLinks } = require("../utils/paginate");

function contactDetailsResource(contactDetails) {
    return {
        uuid: contactDetails.uuid,
        title: contactDetails.title,
        content: contactDetails.content,
        order_no: contactDetails.order_no,
        active: contactDetails.active,
        keyword: contactDetails.keyword,
    };
}

function contactDetailsCollection(contactDetailsArray, paginate = true) {

    if(paginate){

        return {
            data: contactDetailsArray.data.map(contactDetails => contactDetailsResource(contactDetails)),
            meta: {
                total: contactDetailsArray.total,
                currentPage: contactDetailsArray.currentPage,
                totalPage: contactDetailsArray.totalPages,
                pageSize: contactDetailsArray.pageSize
            },
            links: paginationLinks('contact-details', contactDetailsArray.currentPage, contactDetailsArray.totalPages)
        };
    }

    return contactDetailsArray.map((details) => contactDetailsResource(details));
}

module.exports = {
    contactDetailsResource, contactDetailsCollection
};