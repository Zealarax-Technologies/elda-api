const { paginationLinks } = require("../utils/paginate");

function eventTypeResource(eventType) {
    return {
        uuid: eventType.uuid,
        name: eventType.name,
        description: eventType.description || "No description available",
    };
}

function eventTypeCollection(eventTypes, paginate = true) {

    if(paginate){

        return {
            data: eventTypes.data.map(eventType => eventTypeResource(eventType)),
            meta: {
                total: eventTypes.total,
                currentPage: eventTypes.currentPage,
                totalPage: eventTypes.totalPages,
                pageSize: eventTypes.pageSize
            },
            links: paginationLinks('event-types', eventTypes.currentPage, eventTypes.totalPages)
        };
    }

    return eventTypes.map((type) => eventTypeResource(type));
}

module.exports = {
    eventTypeResource,
    eventTypeCollection,
};
