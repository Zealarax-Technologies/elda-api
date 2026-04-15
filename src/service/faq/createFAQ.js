const models = require('../../models');

class CreateFAQ{

    async execute(faqData)
    {
        const faq = await models.FAQ.create(faqData);
        if(faq)
        {
            return true;
        }

        return false;
    }
}

module.exports = new CreateFAQ();