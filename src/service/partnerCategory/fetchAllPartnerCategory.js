const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllPartnerCategory{

    async execute(page = 1)
    {
        const pageSize = 20;
        const category = await paginate(models.PartnerCategory, {
            page,
            pageSize,
        });

        if(category)
        {
            return category;
        }

        return false;
    }

    async getCategories(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const category = await this.execute(query.page);
            if(category){
                return category;
            }

            return false;
        }

        const category = await models.PartnerCategory.findAll();
        
        if(category.length){
            return category;
        }

        return false;
    }
}

module.exports = new FetchAllPartnerCategory();