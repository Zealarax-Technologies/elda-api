const { checkoutCollection, checkoutResource } = require("../resource/checkoutResource");
const createCheckout = require("../service/checkout/createCheckout");
const deleteCheckout = require("../service/checkout/deleteCheckout");
const fetchAllCheckout = require("../service/checkout/fetchAllCheckout");
const fetchSingleCheckout = require("../service/checkout/fetchSingleCheckout");
const ApiResponses = require("../utils/apiResponse");

class CheckoutController{

    async index(req, res)
    {
        const checkout = await fetchAllCheckout.execute(req.query.page);
        if(checkout)
        {
            return ApiResponses(res, 200, 'All Checkout', checkoutCollection(checkout));
        }

        return ApiResponses(res, 200, 'No Checkout Found');
    }

    async show(req, res)
    {
        const checkout = await fetchSingleCheckout.execute(req.params.id);
        if(checkout)
        {
            return ApiResponses(res, 200, 'Single Checkout', checkoutResource(checkout));
        }

        return ApiResponses(res, 400, 'Checkout Not Found');
    }

    async store(req, res)
    {
        if(await createCheckout.execute(req.checkoutData))
        {
            return ApiResponses(res, 200, 'Checkout Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Checkout');
    }

    async destroy(req, res)
    {
        if(await deleteCheckout.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Checkout Deleted');
        }

        return ApiResponses(res, 400, 'Checkout Not Found');
    }
}

module.exports = new CheckoutController();