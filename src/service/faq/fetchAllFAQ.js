const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllFAQ{

    async execute(page = 1)
    {
        const pageSize = 20;
        const faq = await paginate(models.FAQ, {
            page,
            pageSize
        });

        if(faq)
        {
            return faq;
        }

        return false;
    }

    async getFaqs(query){

        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const faqs = await this.execute(query.page);
            if(faqs){
                return faqs;
            }

            return false;
        }

        const faqs = await models.FAQ.findAll();

        if(faqs.length)
        {
            return faqs;
        }

        return false;
    }
}

module.exports = new FetchAllFAQ();