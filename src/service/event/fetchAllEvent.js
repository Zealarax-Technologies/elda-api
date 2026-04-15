const { Op } = require('sequelize');
const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllEvent{

    async execute(page = 1, query)
    {
        let where = {};
        const pageSize = 20;

        if (query?.keyword) {
            const keyword = `%${query.keyword}%`;
            where = {
                ...where,
                [Op.or]: [
                    { title: { [Op.like]: keyword } },
                    { topic: { [Op.like]: keyword } },
                    { description: { [Op.like]: keyword } },
                    { location: { [Op.like]: keyword } },
                ],
            };
        }

        if (query?.type) {
            where = {
                ...where,
                event_type_id: query.type,
            };
        }

        if (query?.date === "past") {
            where = {
                ...where,
                createdAt: { [Op.lt]: new Date() },
            };
        } else if (query.date === "upcoming") {
            where = {
                ...where,
                createdAt: { [Op.gt]: new Date() },
            };
        }


        const event = await paginate(models.Event, {
            page,
            pageSize,
            where,
            include: [
                {
                    model: models.EventType,
                    as: 'event_type'
                }
            ],
            order: [['createdAt', 'DESC']]
        });

        if(event)
        {
            return event;
        }

        return false;
    }

    async getEvent(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const events = await this.execute(query.page, query);
            if(events){
                return events;
            }

            return false;
        }
        
        const options = {
            include: [
                {
                    model: models.EventType,
                    as: 'event_type'
                }
            ],
            order: [['createdAt', 'DESC']]
        };

        if (query?.keyword) {
            const keyword = `%${query.keyword}%`;
            options.where = {
                ...options.where,
                [Op.or]: [
                     { title: { [Op.like]: keyword } },
                    { topic: { [Op.like]: keyword } },
                    { description: { [Op.like]: keyword } },
                    { location: { [Op.like]: keyword } },
                ],
            };
        }

        if (query?.type) {
            options.where = {
                ...options.where,
                event_type_id: query.type,
            };
        }

        if (query?.date) {
            if(query.date === "past"){
                options.where = {
                    ...options.where,
                    [Op.gt]: [
                        
                    ]
                };
            }else{
                options.where = {
                    ...options.where,
                    [Op.gt]: [
                        
                    ]
                };
            }
        }

        if (query?.limit) {
            options.limit = parseInt(query.limit, 10);
        }

        const events = await models.Event.findAll(options);

        if(events.length){
            return events;
        }

        return false;
    }
}

module.exports = new FetchAllEvent();