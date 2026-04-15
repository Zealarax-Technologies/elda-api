const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllPartnership{

    async execute(page = 1)
    {
        const pageSize = 20;
        const partnership = await paginate(models.Partnership, {
            page,
            pageSize,
            include: [
                {
                    model: models.PartnershipImage,
                    as: 'images'
                }
            ]
        });

        if(partnership)
        {
            return partnership;
        }

        return false;
    }

    async getPartnership(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const partnership = await this.execute(query.page);
            if(partnership){
                return partnership;
            }

            return false;
        }

        const partnership = await models.Partnership.findAll({
            include: [
                {
                    model: models.PartnershipImage,
                    as: 'images'
                }
            ]
        });

        if(partnership)
        {
            return partnership;
        }

        return false;
    }
}

module.exports = new FetchAllPartnership();