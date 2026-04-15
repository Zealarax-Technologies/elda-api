const models = require('../../models');

class CreateHistory{

    async execute(historyData)
    {
        const history = await models.History.create(historyData);
        if(history)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateHistory();