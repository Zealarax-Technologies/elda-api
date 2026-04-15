const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteEvent{

    async execute(id)
    {
        const event = await models.Event.findByPk(id);
        if(event)
        {
            if(event.image)
            {
                imageRemover(event.image);
            }
            return await event.destroy();
        }

        return false;
    }
}

module.exports = new DeleteEvent();