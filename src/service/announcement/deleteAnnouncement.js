const models = require('../../models');

class DeleteAnnouncement{

    async execute(id){
        const announcement = await models.Announcement.findByPk(id);

        if(announcement){
            return await announcement.destroy();
        }

        return false;
    }
}

module.exports = new DeleteAnnouncement();