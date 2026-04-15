const programmeController = require('../controller/programmeController');
const CreateProgrammeRequest = require('../request/createProgrammeRequest');
const UpdateProgrammeRequest = require('../request/updateProgrammeRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', programmeController.index);
router.get('/:id', programmeController.show);
router.post('/', upload('programme').single('image'), CreateProgrammeRequest, programmeController.store);
router.patch('/:id', upload('programme').single('image'), UpdateProgrammeRequest, programmeController.update);
router.delete('/:id', programmeController.destroy);

module.exports = router;