const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllAdmissionFAQ{

    async execute(page = 1)
    {
        const pageSize = 20;
        const faq = await paginate(models.AdmissionFAQ, {
            page,
            pageSize,
        });
        
        if(faq)
        {
            return faq;
        }

        return false;
    }
}

module.exports = new FetchAllAdmissionFAQ();