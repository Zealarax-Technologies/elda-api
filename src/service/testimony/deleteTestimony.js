const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteTestimony{

    async execute(id)
    {
        const testimony = await models.Testimony.findByPk(id);
        if(testimony)
        {
            if(testimony.image)
            {
                imageRemover(testimony.image);
            }
            return await testimony.destroy();
        }

        return false;
    }
}

module.exports = new DeleteTestimony();