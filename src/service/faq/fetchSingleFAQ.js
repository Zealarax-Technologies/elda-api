const models = require('../../models');

class FetchSingleFAQ{

    async execute(id)
    {
        const faq = await models.FAQ.findByPk(id);
        if(faq)
        {
            return faq;
        }

        return false;
    }
}

module.exports = new FetchSingleFAQ();