const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class DeleteStaff{

    async execute(id)
    {
        const staff = await models.Staff.findByPk(id);
        if(staff)
        {
            if(staff.image)
            {
                imageRemover(staff.image);
            }
            return await staff.destroy();
        }

        return false;
    }
}

module.exports = new DeleteStaff();