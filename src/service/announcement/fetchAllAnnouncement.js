const { paginate } = require("../../utils/paginate");
const models = require('../../models');

class FetchAllAnnouncement{

    async execute(page = 1){

        const pageSize = 20;
        const announcement = await paginate(models.Announcement, {
            page,
            pageSize,
            order: [['createdAt', 'DESC']],
        });

        if(announcement){
            return announcement;
        }

        return false;
    }

    async getAnnouncements(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const announcement = await this.execute(query.page);
            if(announcement){
                return announcement;
            }

            return false;
        }

        const announcement = await models.Announcement.findAll({
            order: [['createdAt', 'DESC']],
        });

        if(announcement.length){
            return announcement;
        }

        return false;
    }
}

module.exports = new FetchAllAnnouncement();