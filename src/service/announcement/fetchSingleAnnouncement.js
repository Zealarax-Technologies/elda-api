const { Op } = require('sequelize');
const models = require('../../models');

class FetchSingleAnnouncement{

    async execute(id){
        const announcement = await models.Announcement.findOne({
            where: {
                [Op.or]: [
                    { uuid: id },
                    { slug: id }
                ]
            },
        });

        if(announcement){
            return announcement;
        }

        return false;
    }
}

module.exports = new FetchSingleAnnouncement();