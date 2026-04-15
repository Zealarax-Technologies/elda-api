const { paginationLinks } = require("../utils/paginate");

function newsletterResource(newsletter) {
    return {
        uuid: newsletter.uuid,
        name: newsletter.name,
        email: newsletter.email,
        date_created: newsletter.createdAt  
    };
}

function newsletterCollection(newsletters) {
    return {
        data: newsletters.data.map(newsletter => newsletterResource(newsletter)),
        meta: {
            total: newsletters.total,
            currentPage: newsletters.currentPage,
            totalPage: newsletters.totalPages,
            pageSize: newsletters.pageSize
        },
        links: paginationLinks('news-letters', newsletters.currentPage, newsletters.totalPages)
    };
}

module.exports = {
    newsletterResource,
    newsletterCollection
};
