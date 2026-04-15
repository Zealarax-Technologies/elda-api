const { Op } = require('sequelize');
const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllNews{

    async execute(page = 1, query)
    {
        const pageSize = 20;
        let where = {};
        let order = [['createdAt', 'DESC']];

        if (query?.category) {
            where = {
                category_id: query.category
            };
        }

        if (query?.date) {
            if (query.date === 'latest') { 
                order = [['createdAt', 'ASC']]; 
            } else {
                order = [['createdAt', 'DESC']];
            }
        }

        if (query?.keyword) {
            const keyword = `%${query.keyword}%`;
            where = {
                ...where,
                [Op.or]: [
                    { title: { [Op.like]: keyword } },
                    { content: { [Op.like]: keyword } },
                ],
            };
        }


        const news = await paginate(models.News, {
            page,
            pageSize,
            where,
            include: [
                {
                    model: models.NewsCategory,
                    as: 'category'
                }
            ],
            order,
        });


        if(news)
        {
            return news;
        }

        return false;
    }

    async getNews(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const news = await this.execute(query.page, query);
            if(news){
                return news;
            }

            return false;
        }

        const options = {
            include: [
                {
                    model: models.NewsCategory,
                    as: 'category'
                }
            ],
            order: [['createdAt', 'DESC']]
        };

        if (query.category) {
            options.where = {
                category_id: query.category
            };
        }

        if (query.date) {
            if (query.date === 'latest') { 
                options.order = [['createdAt', 'ASC']]; 
            } else {
                options.order = [['createdAt', 'DESC']];
            }
        }

        if (query.keyword) {
            const keyword = `%${query.keyword}%`;
            options.where = {
                ...options.where,
                [Op.or]: [
                    { title: { [Op.like]: keyword } },
                    { content: { [Op.like]: keyword } },
                ],
            };
        }


        if (query?.limit) {
            options.limit = parseInt(query.limit, 10);
        }

        const news = await models.News.findAll(options);

        if(news.length){
            return news;
        }

        return false;
    }
}

module.exports = new FetchAllNews();