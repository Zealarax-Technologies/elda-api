const models = require('../../models');

class DeleteNewsLetter{

    async execute(id)
    {
        const newsLetter = await models.NewsLetter.findByPk(id);
        if(newsLetter)
        {
            return await newsLetter.destroy();
        }

        return false;
    }
}

module.exports = new DeleteNewsLetter();