const { where } = require('sequelize');
const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllOurPartner{

    async execute(page = 1, category = null)
    {
        const pageSize = 20;
        let where = {};

        if (category) {
            where = {
                category_id: category
            };
        }
        const partner = await paginate(models.OurPartner, {
            page,
            pageSize,
            where,
            include: [
                {
                    model: models.PartnerCategory,
                    as: 'category'
                }
            ],
        });

        if(partner)
        {
            return partner;
        }

        return false;
    }

    async getPartners(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const partners = await this.execute(query.page, query.category);
            if(partners){
                return partners;
            }

            return false;
        }
        
        const options = {
            include: [
                {
                    model: models.PartnerCategory,
                    as: 'category'
                }
            ],
            where: {},
        };

        if (query.category) {
            options.where.category_id = query.category;
        }

        if (query?.limit) {
            options.limit = parseInt(query.limit, 10);
        }

        const partners = await models.OurPartner.findAll(options);
        
        if(partners.length){
            return partners;
        }

        return false;
    }
}

module.exports = new FetchAllOurPartner();