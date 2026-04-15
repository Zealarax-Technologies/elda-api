const models = require('../../models');

class CreateCheckout {

    generateReference() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const random = String(Date.now()).slice(-4);
        return `REF${year}${month}RTI${random}`;
    }

    async execute(checkoutData) {
        checkoutData.reference = this.generateReference();
        const checkout = await models.Checkout.create(checkoutData);
        if (checkout) {
            if (checkoutData?.orders?.length > 0) {
                await Promise.all(checkoutData.orders.map(async (orderItem) => {
                    await models.Order.findOrCreate({
                        where: {
                            course_id: orderItem.course_id,
                            checkout_id: checkout.uuid,
                        },
                        defaults: {
                            course_id: orderItem.course_id,
                            checkout_id: checkout.uuid,
                            month: orderItem.month,
                        },
                    });
                }));
            }
            return checkout;
        }

        return false;
    }
}

module.exports = new CreateCheckout();