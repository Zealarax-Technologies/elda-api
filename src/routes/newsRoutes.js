const newsController = require('../controller/newsController');
const CreateNewsRequest = require('../request/createNewsRequest');
const UpdateNewsRequest = require('../request/updateNewsRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', newsController.index);
router.get('/:id', newsController.show);
router.post('/', upload('news').single('image'), CreateNewsRequest, newsController.store);
router.patch('/:id', upload('news').single('image'), UpdateNewsRequest, newsController.update);
router.delete('/:id', newsController.destroy);

module.exports = router;