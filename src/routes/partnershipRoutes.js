const partnershipController = require('../controller/partnershipController');
const CreatePartnershipRequest = require('../request/createPartnershipRequest');
const UpdatePartnershipRequest = require('../request/updatePartnershipRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', partnershipController.index);
router.get('/:id', partnershipController.show);
router.post('/', upload('partnership').array('images'), CreatePartnershipRequest, partnershipController.store);
router.patch('/:id', upload('partnership').array('images'), UpdatePartnershipRequest, partnershipController.update);
router.delete('/:id', partnershipController.destroy);

module.exports = router;