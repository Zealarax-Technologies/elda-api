const specialEnquiryController = require('../controller/specialEnquiryController');
const CreateSpecialEnquiryRequest = require('../request/createSpecialEnquiryRequest');
const UpdateSpecialEnquiryRequest = require('../request/updateSpecialEnquiryRequest');

const router = require('express').Router();

router.get('/', specialEnquiryController.index);
router.get('/:keyword', specialEnquiryController.show);
router.post('/', CreateSpecialEnquiryRequest, specialEnquiryController.store);
router.patch('/:id', UpdateSpecialEnquiryRequest, specialEnquiryController.update);
router.delete('/:id', specialEnquiryController.destroy);

module.exports = router