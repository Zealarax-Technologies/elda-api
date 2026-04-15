const heroSectionController = require('../controller/heroSectionController');
const CreateHeroSectionrequest = require('../request/createHeroSectionRequest');
const UpdateHeroSectionrequest = require('../request/updateHeroSectionRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('', heroSectionController.index);
router.get('/:id', heroSectionController.show);
router.post('', upload('hero').single('image'), CreateHeroSectionrequest, heroSectionController.store);
router.patch('/:id', upload('hero').single('image'), UpdateHeroSectionrequest, heroSectionController.update);
router.delete('/:id', heroSectionController.destroy);

module.exports = router