const models = require('../../models');

class FetchSingleStaff{

    async execute(id)
    {
        const staff = await models.Staff.findByPk(id);
        if(staff)
        {
            return staff;
        }

        return false;
    }
}

module.exports = new FetchSingleStaff();