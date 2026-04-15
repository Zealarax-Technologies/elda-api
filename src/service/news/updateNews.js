const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateNews{

    async execute(id, newsData)
    {
        const news = await models.News.findByPk(id);
        if(news)
        {
            if(newsData?.image && news.image)
            {
                imageRemover(news.image);
            }
            return await news.update(newsData);
        }

        return false;
    }
}

module.exports = new UpdateNews();