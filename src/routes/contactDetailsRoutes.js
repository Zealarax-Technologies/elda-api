const contactDetailsController = require('../controller/contactDetailsController');
const CreateContactDetailsRequest = require('../request/createContactDetailsRequest');
const UpdateContactDetailsRequest = require('../request/updateContactDetailsRequest');

const router = require('express').Router();

router.get('/', contactDetailsController.index);
router.get('/:keyword', contactDetailsController.show);
router.post('/', CreateContactDetailsRequest, contactDetailsController.store);
router.patch('/:id', UpdateContactDetailsRequest, contactDetailsController.update);
router.delete('/:id', contactDetailsController.destroy);

module.exports = router;