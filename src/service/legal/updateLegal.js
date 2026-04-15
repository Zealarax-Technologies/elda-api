const models = require('../../models');

class UpdateLegal{

    async execute(id, data){
        const legal = await models.Legal.findByPk(id);

        if(legal){
            return await legal.update(data);
        }

        return false;
    }
}

module.exports = new UpdateLegal();