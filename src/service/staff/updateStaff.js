const models = require('../../models');
const imageRemover = require('../../utils/imageRemover');

class UpdateStaff{

    async execute(id, staffData)
    {
        const staff = await models.Staff.findByPk(id);
        if(staff)
        {
            if(staffData?.image && staff.image)
            {
                imageRemover(staff.image);
            }
            
            return await staff.update(staffData);
        }

        return false;
    }
}

module.exports = new UpdateStaff();