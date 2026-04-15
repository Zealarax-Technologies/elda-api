const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");
const { publicationCategoryResource } = require("./publicationCategoryResource");

function publicationResource(publication) {
    return {
        uuid: publication.uuid,
        title: publication.title,
        slug: publication.slug,
        image: url(publication.image),
        description: publication.description,
        file: url(publication.file),
        createdAt: publication.createdAt,
        category: publication.category ? publicationCategoryResource(publication.category) : null
    };
}

function publicationCollection(publications, paginate = true) {

    if(paginate){

        return {
            data: publications.data.map(publication => publicationResource(publication)),
            meta: {
                total: publications.total,
                currentPage: publications.currentPage,
                totalPage: publications.totalPages,
                pageSize: publications.pageSize
            },
            links: paginationLinks('publications', publications.currentPage, publications.totalPages)
        };
    }

    return publications.map((publication) => publicationResource(publication));
}

module.exports = {
    publicationResource,
    publicationCollection
};
