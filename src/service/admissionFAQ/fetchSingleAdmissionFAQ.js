const models = require('../../models');

class FetchSingleAdmissionFAQ{

    async execute(id)
    {
        const faq = await models.AdmissionFAQ.findByPk(id);
        if(faq)
        {
            return faq;
        }

        return false;
    }
}

module.exports = new FetchSingleAdmissionFAQ();