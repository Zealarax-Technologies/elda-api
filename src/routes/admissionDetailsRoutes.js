const admissionDetailsController = require('../controller/admissionDetailsController');
const CreateAdmissionDetailsRequest = require('../request/createAdmissionDetailsRequest');
const UpdateAdmissionDetailsRequest = require('../request/updateAdmissionDetailsRequest');

const router = require('express').Router();

router.get('/', admissionDetailsController.index);
router.get('/:keyword', admissionDetailsController.show);
router.post('/', CreateAdmissionDetailsRequest, admissionDetailsController.store);
router.patch('/:id', UpdateAdmissionDetailsRequest, admissionDetailsController.update);
router.delete('/:id', admissionDetailsController.destroy);

module.exports = router;