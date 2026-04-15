const models = require('../../models');
const deletePartnershipImage = require('./deletePartnershipImage');

class DeletePartnership{

    async execute(id)
    {
        const partnership = await models.Partnership.findByPk(id, {include: [
            {
                model: models.PartnershipImage,
                as: 'images'
            }
        ]});
        if(partnership)
        {
            if(partnership.images?.length > 0)
            {
                await this.deleteImage(partnership.images);
            }
            return await partnership.destroy();
        }

        return false;
    }

    async deleteImage(images)
    {
        await Promise.all(images.map(async (image) => {
            await deletePartnershipImage.execute(image.uuid)
        }))
    }
}

module.exports = new DeletePartnership();