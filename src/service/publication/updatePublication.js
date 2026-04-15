const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdatePublication{

    async execute(id, publicationData)
    {
        const publication = await models.Publication.findByPk(id);
        if(publication)
        {
            if(publicationData.image && publication.image)
            {
                imageRemover(publication.image);
            }

            if(publicationData.file_path && publication.file_path)
            {
                imageRemover(publication.file_path);
            }

            return await publication.update(publicationData);
        }

        return false;
    }
}

module.exports = new UpdatePublication();