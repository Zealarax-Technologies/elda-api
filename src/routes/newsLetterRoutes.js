const newsLetterController = require('../controller/newsLetterController');
const CreateNewsLetterRequest = require('../request/createNewsLetterRequest');

const router = require('express').Router();

router.get('/', newsLetterController.index);
router.get('/:id', newsLetterController.show);
router.post('/', CreateNewsLetterRequest, newsLetterController.store);
router.delete('/:id', newsLetterController.destroy);

module.exports = router;