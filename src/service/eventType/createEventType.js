const models = require('../../models');

class CreateEventType{

    async execute(typeData)
    {
        const type = await models.EventType.create(typeData);
        if(type)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateEventType();