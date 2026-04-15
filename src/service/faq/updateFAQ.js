const models = require('../../models');

class UpdateFAQ{

    async execute(id, faqData)
    {
        const faq = await models.FAQ.findByPk(id);
        if(faq)
        {
            return await faq.update(faqData);
        }

        return false;
    }
}

module.exports = new UpdateFAQ();