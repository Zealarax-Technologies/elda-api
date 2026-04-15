const contactFormController = require('../controller/contactFormController');
const CreateContactFormRequest = require('../request/createContactFormRequest');

const router = require('express').Router();

router.get('/', contactFormController.index);
router.get('/:id', contactFormController.show);
router.post('/', CreateContactFormRequest, contactFormController.store);
router.delete('/:id', contactFormController.destroy);

module.exports = router