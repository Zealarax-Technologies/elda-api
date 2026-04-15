const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllEventType{

    async execute(page = 1)
    {
        const pageSize = 20;
        const type = await paginate(models.EventType, {
            page,
            pageSize
        });

        if(type)
        {
            return type;
        }

        return false;
    }

    async getTypes(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const types = await this.execute(query.page);
            if(types){
                return types;
            }

            return false;
        }

        const types = await models.EventType.findAll();

        if(types.length){
            return types;
        }

        return false;
    }
}

module.exports = new FetchAllEventType();