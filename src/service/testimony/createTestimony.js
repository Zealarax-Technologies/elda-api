const models = require('../../models');

class CreateTestimony{

    async execute(testimonyData)
    {
        const testimony = await models.Testimony.create(testimonyData);
        if(testimony)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateTestimony();