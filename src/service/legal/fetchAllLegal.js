const { paginate } = require("../../utils/paginate");
const models = require('../../models');

class FetchAllLegal{

    async execute(page = 1){

        const pageSize = 20;
        const legal = await paginate(models.Legal, {
            page,
            pageSize,
            order: [['createdAt', 'DESC']],
        });

        if(legal){
            return legal;
        }

        return false;
    }

    async getLegals(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const legal = await this.execute(query.page);
            if(legal){
                return legal;
            }

            return false;
        }

        const legal = await models.Legal.findAll({
            order: [['createdAt', 'DESC']],
        });

        if(legal.length){
            return legal;
        }

        return false;
    }
}

module.exports = new FetchAllLegal();