const legalController = require('../controller/legalController');
const CreateLegalRequest = require('../request/createLegalRequest');
const UpdateLegalRequest = require('../request/updateLegalRequest');

const router = require('express').Router();

router.get('/', legalController.index);
router.get('/:id', legalController.show);
router.post('/', CreateLegalRequest, legalController.store);
router.patch('/:id', UpdateLegalRequest, legalController.update);
router.delete('/:id', legalController.destroy);

module.exports = router