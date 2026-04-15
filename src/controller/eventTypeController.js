const { eventTypeCollection, eventTypeResource } = require("../resource/eventTypeResource");
const createEventType = require("../service/eventType/createEventType");
const deleteEventType = require("../service/eventType/deleteEventType");
const fetchAllEventType = require("../service/eventType/fetchAllEventType");
const fetchSingleEventType = require("../service/eventType/fetchSingleEventType");
const updateEventType = require("../service/eventType/updateEventType");
const ApiResponses = require("../utils/apiResponse");

class EventTypeController{

    async index(req, res)
    {
        const type = await fetchAllEventType.execute(req.query.page);
        if(type)
        {
            return ApiResponses(res, 200, 'All Event Type', eventTypeCollection(type));
        }

        return ApiResponses(res, 200, 'No Event Found');
    }

    async show(req, res)
    {
        const type = await fetchSingleEventType.execute(req.params.id);
        if(type)
        {
            return ApiResponses(res, 200, 'Single Event Type', eventTypeResource(type));
        }

        return ApiResponses(res, 400, 'Event Type Not Found');
    }

    async store(req, res)
    {
        if(await createEventType.execute(req.typeData))
        {
            return ApiResponses(res, 200, 'Event Type Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Event Type');
    }

    async update(req, res)
    {
        if(await updateEventType.execute(req.params.id, req.typeData))
        {
            return ApiResponses(res, 200, 'Event Type Updated');
        }

        return ApiResponses(res, 400, 'Event Type Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteEventType.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Event Type Deleted');
        }

        return ApiResponses(res, 400, 'Event Type Not Found');
    }

    async getTypes(req, res){
        const type = await fetchAllEventType.getTypes(req.query);
        if(type)
        {
            return ApiResponses(res, 200, 'All Event Type', eventTypeCollection(type, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Event Found');
    }
}

module.exports = new EventTypeController();