const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllProgramme{

    async execute(page = 1)
    {
        const pageSize = 20;
        const programme = await paginate(models.Programme, {
            page,
            pageSize
        });

        if(programme)
        {
            return programme;
        }

        return false;
    }

    async getProgrammes(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const programme = await this.execute(query.page);
            if(programme){
                return programme;
            }

            return false;
        }

        const options = {};

        if(query?.limit){
            options.limit = parseInt(query.limit, 10);
        }

        const programme = await models.Programme.findAll(options);

        if(programme){
            return programme;
        }

        return false;
    }
}

module.exports = new FetchAllProgramme();