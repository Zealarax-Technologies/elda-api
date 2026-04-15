const faqController = require('../controller/faqController');
const CreateFAQRequest = require('../request/createFAQRequest');
const UpdateFAQRequest = require('../request/updateFAQRequest');

const router = require('express').Router();

router.get('/', faqController.index);
router.get('/:id', faqController.show);
router.post('/', CreateFAQRequest, faqController.store);
router.patch('/:id', UpdateFAQRequest, faqController.update);
router.delete('/:id', faqController.destroy);

module.exports = router