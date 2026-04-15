const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeletePublication{

    async execute(id)
    {
        const publication = await models.Publication.findByPk(id);
        if(publication)
        {
            if(publication.image)
            {
                imageRemover(publication.image);
            }

            if(publication.file_path)
            {
                imageRemover(publication.file_path);
            }
            
            return await publication.destroy();
        }

        return false;
    }
}

module.exports = new DeletePublication();