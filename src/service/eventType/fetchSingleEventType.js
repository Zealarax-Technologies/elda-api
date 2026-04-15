const models = require('../../models');

class FetchSingleEventType{

    async execute(id)
    {
        const type = await models.EventType.findByPk(id);
        if(type)
        {
            return type;
        }

        return false;
    }
}

module.exports = new FetchSingleEventType();