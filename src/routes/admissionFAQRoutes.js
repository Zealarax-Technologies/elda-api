const admissionFAQController = require('../controller/admissionFAQController');
const CreateAdmissionFAQRequest = require('../request/createAdmissionFAQRequest');
const UpdateAdmissionFAQRequest = require('../request/updateAdmissionFAQRequest');

const router = require('express').Router();

router.get('/', admissionFAQController.index);
router.get('/:id', admissionFAQController.show);
router.post('/', CreateAdmissionFAQRequest, admissionFAQController.store);
router.patch('/:id', UpdateAdmissionFAQRequest, admissionFAQController.update);
router.delete('/:id', admissionFAQController.destroy);

module.exports = router;