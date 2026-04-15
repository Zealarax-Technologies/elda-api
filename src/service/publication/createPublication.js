const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class CreatePublication{

    async execute(publicationData)
    {
        const publication = await models.Publication.create(publicationData);
        if(publication)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreatePublication();