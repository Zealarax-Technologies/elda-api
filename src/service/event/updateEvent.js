const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateEvent{

    async execute(id, eventData)
    {
        const event = await models.Event.findByPk(id);
        if(event)
        {
            if(eventData.image && event.image)
            {
                imageRemover(event.image);
            }
            return await event.update(eventData);
        }

        return false;
    }
}

module.exports = new UpdateEvent();