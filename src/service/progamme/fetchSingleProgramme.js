const { Op } = require('sequelize');
const models = require('../../models');

class FetchSingleProgramme{

    async execute(id)
    {
        const programme = await models.Programme.findOne({
            where: {
                [Op.or]: [
                    { uuid: id },
                    { slug: id }
                ]
            },
        });
        if(programme)
        {
            return programme;
        }

        return false;
    }
}

module.exports = new FetchSingleProgramme();