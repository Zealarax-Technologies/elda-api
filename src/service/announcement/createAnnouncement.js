const models = require('../../models');

class CreateAnnouncement{

    async execute(data){
        const announcement = await models.Announcement.create(data);

        if(announcement){
            return true;
        }

        return false;
    }
}

module.exports = new CreateAnnouncement();