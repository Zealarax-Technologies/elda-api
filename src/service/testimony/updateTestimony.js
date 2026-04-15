const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateTestimony{

    async execute(id, testimonyData)
    {
        const testimony = await models.Testimony.findByPk(id);
        if(testimony)
        {
            if(testimonyData?.image && testimony.image)
            {
                imageRemover(testimony.image);
            }
            return await testimony.update(testimonyData);
        }

        return false;
    }
}

module.exports = new UpdateTestimony();