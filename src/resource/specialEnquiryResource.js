const { paginationLinks } = require("../utils/paginate");

function specialEnquiryResource(specialEnquiry) {
    return {
        uuid: specialEnquiry.uuid,
        title: specialEnquiry.title,
        content: specialEnquiry.content,
        order_no: specialEnquiry.order_no,
        active: specialEnquiry.active,
        keyword: specialEnquiry.keyword,
    };
}

function specialEnquiryCollection(specialEnquiryArray, paginate = true) {

    if(paginate){

        return {
            data: specialEnquiryArray.data.map(specialEnquiry => specialEnquiryResource(specialEnquiry)),
            meta: {
                total: specialEnquiryArray.total,
                currentPage: specialEnquiryArray.currentPage,
                totalPage: specialEnquiryArray.totalPages,
                pageSize: specialEnquiryArray.pageSize
            },
            links: paginationLinks('special-enquiries', specialEnquiryArray.currentPage, specialEnquiryArray.totalPages)
        };
    }

    return specialEnquiryArray.map((enquiry) => specialEnquiryResource(enquiry));
}

module.exports = {
    specialEnquiryResource, specialEnquiryCollection
};