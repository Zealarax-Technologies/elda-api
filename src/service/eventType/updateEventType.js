const models = require('../../models');

class UpdateEventType{

    async execute(id, typeData)
    {
        const type = await models.EventType.findByPk(id);
        if(type)
        {
            return await type.update(typeData);
        }

        return false;
    }
}

module.exports = new UpdateEventType();