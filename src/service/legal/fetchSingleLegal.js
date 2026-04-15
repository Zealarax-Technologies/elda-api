const { Op } = require('sequelize');
const models = require('../../models');

class FetchSingleLegal{

    async execute(keyword){
        const legal = await models.Legal.findOne({where: {
            [Op.or]: [
                { uuid: keyword }, 
                { keyword: keyword }
            ]
        }});

        if(legal){
            return legal;
        }

        return false;
    }
}

module.exports = new FetchSingleLegal();