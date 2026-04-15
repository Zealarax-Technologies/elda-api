const models = require('../../models');

class DeleteAdmissionFAQ{

    async execute(id)
    {
        const faq = await models.AdmissionFAQ.findByPk(id);
        if(faq)
        {
            return await faq.destroy();
        }

        return false;
    }
}

module.exports = new DeleteAdmissionFAQ();