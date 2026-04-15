const models = require('../../models');

class CreateAdmissionFAQ{

    async execute(faqData)
    {
        const faq = await models.AdmissionFAQ.create(faqData);
        if(faq)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateAdmissionFAQ();