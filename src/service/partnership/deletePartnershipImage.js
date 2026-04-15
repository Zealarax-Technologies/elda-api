const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeletePartnershipImage{

    async execute(id)
    {
        const image = await models.PartnershipImage.findByPk(id);
        if(image)
        {
            imageRemover(image.image);
            return await image.destroy();
        }

        return false;
    }

}

module.exports = new DeletePartnershipImage();