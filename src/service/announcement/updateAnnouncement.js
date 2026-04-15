const models = require('../../models');

class UpdateAnnouncement{

    async execute(id, data){
        const announcement = await models.Announcement.findByPk(id);

        if(announcement){
            return await announcement.update(data);
        }

        return false;
    }
}

module.exports = new UpdateAnnouncement();