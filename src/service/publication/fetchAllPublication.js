const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllPublication{

    async execute(page = 1, category = null)
    {
        const pageSize = 20;

        const where = {};

        if(category){
            where.category_id = category
        }

        const publication = await paginate(models.Publication, {
            page,
            pageSize,
            where,
            include: [
                {
                    model: models.PublicationCategory,
                    as: 'category'
                }
            ]
        });
        
        if(publication)
        {
            return publication;
        }

        return false;
    }

    async getResearch(categoryId, query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const publication = await this.execute(query.page, categoryId);
            if(publication){
                return publication;
            }

            return false;
        }

        const publication = await models.Publication.findAll({
            where: {
                category_id: categoryId
            },
            include: [
                {
                    model: models.PublicationCategory,
                    as: 'category'
                }
            ]
        });

        if(publication)
        {
            return publication;
        }

        return false;
    }
}

module.exports = new FetchAllPublication();