const { Op } = require('sequelize');
const models = require('../../models');

class FetchSingleNews{

    async execute(id)
    {
        const news = await models.News.findOne({
            where: {
                [Op.or]: [
                    { uuid: id },
                    { slug: id }
                ]
            },
            include: [
                {
                    model: models.NewsCategory,
                    as: 'category'
                }
            ]
        });

        if(news)
        {
            return news;
        }

        return false;
    }
}

module.exports = new FetchSingleNews();