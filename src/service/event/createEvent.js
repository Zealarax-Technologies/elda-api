const models = require('../../models');

class CreateEvent{

    async execute(eventData)
    {
        const event = await models.Event.create(eventData);
        if(event)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateEvent();