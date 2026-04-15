const { Op } = require('sequelize');
const models = require('../../models');

class FetchSingleEvent{

    async execute(id)
    {
        const event = await models.Event.findOne({
            where: {
                [Op.or]: [
                    { uuid: id },
                    { slug: id }
                ]
            },
            include: [
            {
                model: models.EventType,
                as: 'event_type'
            }
        ]});
        
        if(event)
        {
            return event;
        }

        return false;
    }
}

module.exports = new FetchSingleEvent();