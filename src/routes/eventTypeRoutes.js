const eventTypeController = require('../controller/eventTypeController');
const CreateEventTypeRequest = require('../request/createEventTypeRequest');
const UpdateEventTypeRequest = require('../request/updateEventTypeRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', eventTypeController.index);
router.get('/:id', eventTypeController.show);
router.post('/', CreateEventTypeRequest, eventTypeController.store);
router.patch('/:id', UpdateEventTypeRequest, eventTypeController.update);
router.delete('/:id', eventTypeController.destroy);

module.exports = router