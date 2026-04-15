const aboutUsController = require('../controller/aboutUsController');
const CreateAboutUsRequest = require('../request/createAboutsUsRequest');
const UpdateAboutUsRequest = require('../request/updateAboutUsRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', aboutUsController.index);
router.get('/:keyword', aboutUsController.show);
router.post('/', upload('about').single('image'), CreateAboutUsRequest, aboutUsController.store);
router.patch('/:id', upload('about').single('image'), UpdateAboutUsRequest, aboutUsController.update);
router.delete('/:id', aboutUsController.destroy);

module.exports = router;