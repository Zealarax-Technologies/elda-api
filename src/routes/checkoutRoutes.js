const checkoutController = require('../controller/checkoutController');
const CreateCheckoutRequest = require('../request/createCheckoutRequest');

const router = require('express').Router();

router.get('/', checkoutController.index);
router.get('/:id', checkoutController.show);
router.post('/', CreateCheckoutRequest, checkoutController.store);
router.delete('/:id', checkoutController.destroy);

module.exports = router;