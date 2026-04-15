const models = require('../../models');

class FetchSingleTestimony{

    async execute(id)
    {
        const testimony = await models.Testimony.findByPk(id);
        if(testimony)
        {
            return testimony;
        }

        return false;
    }
}

module.exports = new FetchSingleTestimony();