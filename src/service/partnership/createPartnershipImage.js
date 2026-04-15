const models = require('../../models');

class CreatePartnershipImage{

    async execute(partnership_id, images)
    {
        return await Promise.all(images.map(async (image) => {
            models.PartnershipImage.create({
                partnership_id, image
            });
        }));
        
    }
}

module.exports = new CreatePartnershipImage();