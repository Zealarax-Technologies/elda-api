const models = require('../../models');

class FetchSingleCheckout{

    async execute(id)
    {
        const checkout = await models.Checkout.findByPk(id, {
            include: [
                {
                    model: models.Order,
                    as: 'order',
                    include: [
                        {
                            model: models.Course,
                            as: 'course',
                        }
                    ]
                },
            ]
        });
        if(checkout)
        {
            return checkout;
        }

        return false;
    }
}

module.exports = new FetchSingleCheckout();