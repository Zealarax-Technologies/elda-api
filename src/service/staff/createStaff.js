const models = require('../../models');

class CreateStaff{

    async execute(staffData)
    {
        const staff = await models.Staff.create(staffData);
        if(staff)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateStaff();