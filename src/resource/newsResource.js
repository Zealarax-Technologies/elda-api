const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");
const { newsCategoryResource } = require("./newsCategoryResource");

function newsResource(news) {
    return {
        uuid: news.uuid,
        title: news.title,
        slug: news.slug,
        content: news.content,
        image: news.image ? url(news.image) : null,
        category: news.category ? newsCategoryResource(news.category) : null,
        date_posted: news.createdAt
    };
}

function newsCollection(newsArray, paginate = true) {

    if(paginate){

        return {
            data: newsArray.data.map(news => newsResource(news)),
            meta: {
                total: newsArray.total,
                currentPage: newsArray.currentPage,
                totalPage: newsArray.totalPages,
                pageSize: newsArray.pageSize
            },
            links: paginationLinks('news', newsArray.currentPage, newsArray.totalPages)
        };
    }

    return newsArray.map((news) => newsResource(news));
}

module.exports = {
    newsResource,
    newsCollection,
};
