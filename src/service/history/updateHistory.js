const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateHistory{

    async execute(id, historyData)
    {
        const history = await models.History.findByPk(id);
        if(history)
        {
            if(historyData?.image && history.image)
            {
                imageRemover(history.image);
            }
            return await history.update(historyData);
        }

        return false;
    }
}

module.exports = new UpdateHistory();