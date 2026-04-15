const models = require('../../models');

class FetchSingleHistory{

    async execute(id)
    {
        const history = await models.History.findByPk(id);
        if(history)
        {
            return history;
        }

        return false;
    }
}

module.exports = new FetchSingleHistory();