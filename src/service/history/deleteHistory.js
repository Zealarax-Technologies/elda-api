const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteHistory{

    async execute(id)
    {
        const history = await models.History.findByPk(id);
        if(history)
        {
            if(history.image)
            {
                imageRemover(history.image);
            }
            return await history.destroy();
        }

        return false;
    }
}

module.exports = new DeleteHistory();