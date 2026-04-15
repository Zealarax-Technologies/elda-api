const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");

function historyResource(history) {
    return {
        uuid: history.uuid,
        title: history.title || "Untitled",
        description: history.description,
        date: history.date,
        image: history.image ? url(history.image) : null,
    };
}

function historyCollection(histories, paginate = true) {

    if(paginate){

        return {
            data: histories.data.map(history => historyResource(history)),
            meta: {
                total: histories.total,
                currentPage: histories.currentPage,
                totalPage: histories.totalPages,
                pageSize: histories.pageSize
            },
            links: paginationLinks('histories', histories.currentPage, histories.totalPages)
        };
    }

    return histories.map((history) => historyResource(history));
}

module.exports = {
    historyResource,
    historyCollection,
};
