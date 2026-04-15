const { paginationLinks } = require("../utils/paginate");

function newsCategoryResource(category) {
    return {
        uuid: category.uuid,
        name: category.name,
        slug: category.slug,
        description: category.description || "No description provided",
    };
}

function newsCategoryCollection(categories, paginate = true) {
    if(paginate){

        return {
            data: categories.data.map(category => newsCategoryResource(category)),
            meta: {
                total: categories.total,
                currentPage: categories.currentPage,
                totalPage: categories.totalPages,
                pageSize: categories.pageSize
            },
            links: paginationLinks('news-categories', categories.currentPage, categories.totalPages)
        };
    }   
    
    return categories.map((category) => newsCategoryResource(category));
}

module.exports = {
    newsCategoryResource,
    newsCategoryCollection,
};
