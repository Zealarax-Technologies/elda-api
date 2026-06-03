const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllTestimony{

    async execute(page = 1)
    {
        const pageSize = 20;
        const testimony = await paginate(models.Testimony, {
            page,
            pageSize
        });

        if(testimony)
        {
            return testimony;
        }

        return false;
    }

    async getTestimonial(query){
    
        if(parseInt(query?.paginate)){
            query.page = query.page || 1;
            const testimonials = await this.execute(query.page);
            if(testimonials){
                return testimonials;
            }

            return false;
        }
        
        const options = {
            order: [['createdAt', 'DESC']]
        };


        if (query?.limit) {
            options.limit = parseInt(query.limit, 10);
        }

        const testimonials = await models.Testimony.findAll(options);

        if(testimonials.length){
            return testimonials;
        }

        return false;
    }
}

module.exports = new FetchAllTestimony();