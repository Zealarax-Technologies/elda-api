const { paginationLinks } = require("../utils/paginate");

function admissionDetailsResource(admissionDetails) {
    return {
        uuid: admissionDetails.uuid,
        title: admissionDetails.title,
        content: admissionDetails.content,
        order_no: admissionDetails.order_no,
        active: admissionDetails.active,
        keyword: admissionDetails.keyword,
    };
}

function admissionDetailsCollection(admissionDetailsArray, paginate = true) {

    if(paginate){

        return {
            data: admissionDetailsArray.data.map(admissionDetails => admissionDetailsResource(admissionDetails)),
            meta: {
                total: admissionDetailsArray.total,
                currentPage: admissionDetailsArray.currentPage,
                totalPage: admissionDetailsArray.totalPages,
                pageSize: admissionDetailsArray.pageSize
            },
            links: paginationLinks('admission-details', admissionDetailsArray.currentPage, admissionDetailsArray.totalPages)
        };
    }

    return admissionDetailsArray.map((details) => admissionDetailsResource(details));
}

module.exports = {
    admissionDetailsResource, admissionDetailsCollection
};