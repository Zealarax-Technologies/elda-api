const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");

function programmeResource(programme) {
    return {
        uuid: programme.uuid,
        name: programme.name,
        slug: programme.slug,
        description: programme.description,
        image: url(programme.image),
        date_created: programme.createdAt
    };
}

function programmeCollection(programmes, paginate = true) {

    if(paginate){

        return {
            data: programmes.data.map(programme => programmeResource(programme)),
            meta: {
                total: programmes.total,
                currentPage: programmes.currentPage,
                totalPage: programmes.totalPages,
                pageSize: programmes.pageSize
            },
            links: paginationLinks('programmes', programmes.currentPage, programmes.totalPages)
        };
    }

    return programmes.map((programme) => programmeResource(programme));

}

module.exports = {
    programmeResource,
    programmeCollection
};
