const { paginationLinks } = require("../utils/paginate");

function faqResource(faq) {
    return {
        uuid: faq.uuid,
        question: faq.question,
        answer: faq.answer
    };
}

function faqCollection(faqs, paginate = true) {

    if(paginate){

        return {
            data: faqs.data.map(faq => faqResource(faq)),
            meta: {
                total: faqs.total,
                currentPage: faqs.currentPage,
                totalPage: faqs.totalPages,
                pageSize: faqs.pageSize
            },
            links: paginationLinks('faqs', faqs.currentPage, faqs.totalPages)
        };
    }

    return faqs.map((faq) => faqResource(faq));
}

module.exports = {
    faqResource,
    faqCollection
};
