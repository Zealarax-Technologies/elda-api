const eventController = require('../controller/eventController');
const CreateEventRequest = require('../request/createEventRequest');
const UpdateEventRequest = require('../request/updateEventRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', eventController.index);
router.get('/:id', eventController.show);
router.post('/', upload('event').single('image'), CreateEventRequest, eventController.store);
router.patch('/:id', upload('event').single('image'), UpdateEventRequest, eventController.update);
router.delete('/:id', eventController.destroy);

module.exports = router