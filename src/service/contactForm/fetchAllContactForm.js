const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllContactForm{

    async execute(page = 1)
    {
        const pageSize = 20;
        const form = await paginate(models.ContactForm, {
            page,
            pageSize
        });
        
        if(form)
        {
            return form;
        }

        return false;
    }
}

module.exports = new FetchAllContactForm();