const announcementController = require('../controller/announcementController');
const CreateAnnouncementRequest = require('../request/createAnnouncementRequest');
const UpdateAnnouncementRequest = require('../request/updateAnnouncementRequest');

const router = require('express').Router()

router.get('/', announcementController.index);
router.get('/:id', announcementController.show);
router.post('/', CreateAnnouncementRequest, announcementController.store);
router.patch('/:id', UpdateAnnouncementRequest, announcementController.update);
router.delete('/:id', announcementController.destroy);

module.exports = router;