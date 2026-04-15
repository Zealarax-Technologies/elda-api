const { paginationLinks } = require("../utils/paginate");

function publicationCategoryResource(publicationCategory) {
    return {
        uuid: publicationCategory.uuid,
        name: publicationCategory.name,
        type: publicationCategory.type,
        slug: publicationCategory.slug,
        description: publicationCategory.description ?? null
    };
}

function publicationCategoryCollection(publicationCategories, paginate = true) {

    if(paginate){

        return {
            data: publicationCategories.data.map(category => publicationCategoryResource(category)),
            meta: {
                total: publicationCategories.total,
                currentPage: publicationCategories.currentPage,
                totalPage: publicationCategories.totalPages,
                pageSize: publicationCategories.pageSize
            },
            links: paginationLinks('publication-categories', publicationCategories.currentPage, publicationCategories.totalPages)
        };
    }

    return publicationCategories.map((category) => publicationCategoryResource(category));
}

module.exports = {
    publicationCategoryResource,
    publicationCategoryCollection
};
