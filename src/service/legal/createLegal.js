const models = require('../../models');

class CreateLegal{

    async execute(data){
        const legal = await models.Legal.create(data);

        if(legal){
            return true;
        }

        return false;
    }
}

module.exports = new CreateLegal();