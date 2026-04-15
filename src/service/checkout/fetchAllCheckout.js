const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllCheckout {

    async execute(page = 1) {
        const pageSize = 20;
        const checkout = await paginate(models.Checkout, {
            page,
            pageSize,
            order: [['createdAt', 'DESC']],
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

        if (checkout) {
            return checkout;
        }

        return false;
    }
}

module.exports = new FetchAllCheckout();