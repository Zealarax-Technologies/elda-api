const { eventTypeResource } = require("./eventTypeResource");
const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");


function eventResource(event) {
    return {
        uuid: event.uuid,
        title: event.title,
        date: event.date,
        location: event.location,
        topic: event.topic,
        description: event.description,
        image: event.image ? url(event.image) : event.image,
        slug: event.slug,
        event_type: event.event_type ? eventTypeResource(event.event_type) : event.event_type,
        date_created: event.createdAt
    };
}

function eventCollection(events, paginate = true) {
    
    if(paginate){

        return {
            data: events.data.map(event => eventResource(event)),
            meta: {
                total: events.total,
                currentPage: events.currentPage,
                totalPage: events.totalPages,
                pageSize: events.pageSize
            },
            links: paginationLinks('events', events.currentPage, events.totalPages)
        };
    }

    return events.map((event) => eventResource(event));
}

module.exports = {
    eventResource,
    eventCollection
};
