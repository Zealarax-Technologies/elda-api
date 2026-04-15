const models = require('../../models');

class FetchSingleNewsLetter{

    async execute(id)
    {
        const newsLetter = await models.NewsLetter.findByPk(id);
        if(newsLetter)
        {
            return newsLetter;
        }

        return false;
    }
}

module.exports = new FetchSingleNewsLetter();