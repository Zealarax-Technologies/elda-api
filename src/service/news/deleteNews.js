const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteNews{

    async execute(id)
    {
        const news = await models.News.findByPk(id);
        if(news)
        {
            if(news.image)
            {
                imageRemover(news.image);
            }
            return await news.destroy();
        }

        return false;
    }
}

module.exports = new DeleteNews();