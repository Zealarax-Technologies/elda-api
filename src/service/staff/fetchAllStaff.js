const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllStaff{

    async execute(page = 1)
    {
        const pageSize = 20;
        const staff = await paginate(models.Staff, {
            page,
            pageSize
        });

        if(staff)
        {
            return staff;
        }

        return false;
    }
}

module.exports = new FetchAllStaff();