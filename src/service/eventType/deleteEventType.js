const models = require('../../models');

class DeleteEventType{

    async execute(id)
    {
        const type = await models.EventType.findByPk(id);
        if(type)
        {
            return await type.destroy();
        }

        return false;
    }
}

module.exports = new DeleteEventType();