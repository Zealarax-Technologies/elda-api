const models = require('../../models');

class CreateContactForm{

    async execute(formData)
    {
        const form = await models.ContactForm.create(formData);
        if(form)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateContactForm();