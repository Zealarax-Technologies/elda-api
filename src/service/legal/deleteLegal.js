const models = require('../../models');

class DeleteLegal{

    async execute(id){
        const legal = await models.Legal.findByPk(id);

        if(legal){
            return await legal.destroy();
        }

        return false;
    }
}

module.exports = new DeleteLegal();