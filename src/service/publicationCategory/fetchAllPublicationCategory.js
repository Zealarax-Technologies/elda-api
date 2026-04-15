const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllPublicationCategory{

    async execute(page = 1)
    {
        const pageSize = 20;
        const category = await paginate(models.PublicationCategory, {
            page,
            pageSize
        });

        if(category)
        {
            return category;
        }

        return false;
    }

    async getCategory(query){

        query.type = query.type || 'category';

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const programme = await this.execute(query.page);
            if(programme){
                return programme;
            }

            return false;
        }
        
        const category = await models.PublicationCategory.findAll({
            where: {
                type: query.type
            }
        });

        if(category)
        {
            return category;
        }

        return false;
    }
}

module.exports = new FetchAllPublicationCategory();