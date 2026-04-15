const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllTestimony{

    async execute(page = 1)
    {
        const pageSize = 20;
        const testimony = await paginate(models.Testimony, {
            page,
            pageSize
        });

        if(testimony)
        {
            return testimony;
        }

        return false;
    }
}

module.exports = new FetchAllTestimony();