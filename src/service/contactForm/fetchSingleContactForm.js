const models = require('../../models');

class FetchSingleContactForm{

    async execute(id)
    {
        const form = await models.ContactForm.findByPk(id);
        if(form)
        {
            return form;
        }

        return false;
    }
}

module.exports = new FetchSingleContactForm();