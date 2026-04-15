const { paginationLinks } = require("../utils/paginate");

function admissionFAQResource(faq) {
    return {
        uuid: faq.uuid,
        question: faq.question,
        answer: faq.answer
    };
}

function admissionFAQCollection(faqs) {
    return {
        data: faqs.data.map(faq => admissionFAQResource(faq)),
        meta: {
            total: faqs.total,
            currentPage: faqs.currentPage,
            totalPage: faqs.totalPages,
            pageSize: faqs.pageSize
        },
        links: paginationLinks('admission-faqs', faqs.currentPage, faqs.totalPages)
    };
}

module.exports = {
    admissionFAQResource,
    admissionFAQCollection
};
