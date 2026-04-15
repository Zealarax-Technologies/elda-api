const staffController = require('../controller/staffController');
const CreateStaffRequest = require('../request/createStaffRequest');
const UpdateStaffRequest = require('../request/updateStaffRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', staffController.index);
router.get('/:id', staffController.show);
router.post('/', upload('staff').single('image'), CreateStaffRequest, staffController.store);
router.patch('/:id', upload('staff').single('image'), UpdateStaffRequest, staffController.update);
router.delete('/:id', staffController.destroy);

module.exports = router;