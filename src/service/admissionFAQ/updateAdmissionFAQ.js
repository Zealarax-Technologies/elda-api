const models = require('../../models');

class UpdateAdmissionFAQ{

    async execute(id, faqData)
    {
        const faq = await models.AdmissionFAQ.findByPk(id);
        if(faq)
        {
            return await faq.update(faqData);
        }

        return false;
    }
}

module.exports = new UpdateAdmissionFAQ();