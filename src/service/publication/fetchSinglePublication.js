const { Op } = require('sequelize');
const models = require('../../models');

class FetchSinglePublication{

    async execute(id)
    {
        const publication = await models.Publication.findOne({
            where: {
                [Op.or]: [
                    { uuid: id },
                    { slug: id }
                ]
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

module.exports = new FetchSinglePublication();