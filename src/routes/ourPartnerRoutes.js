const ourPartnerController = require('../controller/ourPartnerController');
const CreateOurPartnerRequest = require('../request/createOurPartnerRequest');
const UpdateOurPartnerRequest = require('../request/updateOurPartnerRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', ourPartnerController.index);
router.get('/:id', ourPartnerController.show);
router.post('/', upload('our_partner').single('image'), CreateOurPartnerRequest, ourPartnerController.store);
router.patch('/:id', upload('our_partner').single('image'), UpdateOurPartnerRequest, ourPartnerController.update);
router.delete('/:id', ourPartnerController.destroy);

module.exports = router;