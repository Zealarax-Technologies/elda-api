const models = require('../../models');

class CreateNews{

    async execute(newsData)
    {
        const news = await models.News.create(newsData);
        if(news)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateNews();