const models = require('../../models');

class DeleteContactForm{

    async execute(id)
    {
        const form = await models.ContactForm.findByPk(id);
        if(form)
        {
            return await form.destroy();
        }

        return false;
    }
}

module.exports = new DeleteContactForm();