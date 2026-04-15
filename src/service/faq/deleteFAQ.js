const models = require('../../models');

class DeleteFAQ{

    async execute(id)
    {
        const faq = await models.FAQ.findByPk(id);
        if(faq)
        {
            return await faq.destroy();
        }

        return false;
    }
}

module.exports = new DeleteFAQ();