const historyController = require('../controller/historyController');
const CreateHistoryRequest = require('../request/createHistoryRequest');
const UpdateHistoryRequest = require('../request/updateHistoryRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', historyController.index);
router.get('/:id', historyController.show);
router.post('/', upload('history').single('image'), CreateHistoryRequest, historyController.store);
router.patch('/:id', upload('history').single('image'), UpdateHistoryRequest, historyController.update);
router.delete('/:id', historyController.destroy);

module.exports = router;