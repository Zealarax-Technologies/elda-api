const models = require('../../models');

class DeleteCheckout{

    async execute(id)
    {
        const checkout = await models.Checkout.findByPk(id);
        if(checkout)
        {
            return await checkout.destroy();
        }

        return false;
    }
}

module.exports = new DeleteCheckout();