const testimonyController = require('../controller/testimonyController');
const CreateTestimonyRequest = require('../request/createTestimonyRequest');
const UpdateTestimonyRequest = require('../request/updateTestimonyRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', testimonyController.index);
router.get('/:id', testimonyController.show);
router.post('/', upload('testimony').single('image'), CreateTestimonyRequest, testimonyController.store);
router.patch('/:id', upload('testimony').single('image'), UpdateTestimonyRequest, testimonyController.update);
router.delete('/:id', testimonyController.destroy);

module.exports = router;