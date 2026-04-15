const { eventCollection, eventResource } = require("../resource/eventResource");
const createEvent = require("../service/event/createEvent");
const deleteEvent = require("../service/event/deleteEvent");
const fetchAllEvent = require("../service/event/fetchAllEvent");
const fetchSingleEvent = require("../service/event/fetchSingleEvent");
const updateEvent = require("../service/event/updateEvent");
const ApiResponses = require("../utils/apiResponse");

class EventController{
    
    async index(req, res)
    {
        const event = await fetchAllEvent.execute(req.query.page, req.query);
        if(event)
        {
            return ApiResponses(res, 200, 'All Event', eventCollection(event));
        }

        return ApiResponses(res, 200, 'No Event Found');
    }

    async show(req, res)
    {
        const event = await fetchSingleEvent.execute(req.params.id);
        if(event)
        {
            return ApiResponses(res, 200, 'Single Event', eventResource(event));
        }

        return ApiResponses(res, 400, 'Event Not Found');
    }

    async store(req, res)
    {
        if(await createEvent.execute(req.eventData))
        {
            return ApiResponses(res, 200, 'Event Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Event');
    }

    async update(req, res)
    {
        if(await updateEvent.execute(req.params.id, req.eventData))
        {
            return ApiResponses(res, 200, 'Event Updated');
        }

        return ApiResponses(res, 400, 'Event Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteEvent.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Event Deleted');
        }

        return ApiResponses(res, 400, 'Event Not Found');
    }

    async getEvents(req, res){
        const event = await fetchAllEvent.getEvent(req.query);
        if(event)
        {
            return ApiResponses(res, 200, 'All Event', eventCollection(event, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Event Found');
    }
}

module.exports = new EventController();