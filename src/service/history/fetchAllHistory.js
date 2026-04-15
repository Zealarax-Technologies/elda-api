const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllHistory{

    async execute(page = 1)
    {
        const pageSize = 20;
        const history = await paginate(models.History, {
            page,
            pageSize,
            order: [['date', 'DESC']]
        });

        if(history)
        {
            return history;
        }

        return false;
    }

    async getHistory(query){
        
        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const history = await this.execute(query.page);
            if(history){
                return history;
            }

            return false;
        }

        const history = await models.History.findAll();
        if(history.length){
            return history;
        }

        return false;
    }
}

module.exports = new FetchAllHistory();