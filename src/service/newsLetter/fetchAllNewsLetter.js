const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllNewsLetter{

    async execute(page = 1)
    {
        const pageSize = 20;
        const newsLetter = await paginate(models.NewsLetter, {
            page,
            pageSize
        });

        if(newsLetter)
        {
            return newsLetter;
        }

        return false;
    }
}

module.exports = new FetchAllNewsLetter();