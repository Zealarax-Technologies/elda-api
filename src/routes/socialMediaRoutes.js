const socialMediaController = require('../controller/socialMediaController');
const CreateSocialMediaRequest = require('../request/createSocialMediaRequest');
const UpdateSocialMediaRequest = require('../request/updateSocialMediaRequest');

const router = require('express').Router();

router.get('/', socialMediaController.index);
router.get('/:id', socialMediaController.show);
router.post('/', CreateSocialMediaRequest, socialMediaController.store);
router.patch('/:id', UpdateSocialMediaRequest, socialMediaController.update);
router.delete('/:id', socialMediaController.destroy);

module.exports = router;