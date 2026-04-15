const positionController = require('../controller/positionController');
const CreatePositionRequest = require('../request/createPositionRequest');
const UpdatePositionRequest = require('../request/updatePositionRequest');

const router = require('express').Router();

router.get('/', positionController.index);
router.get('/:id', positionController.show);
router.post('/', CreatePositionRequest, positionController.store);
router.patch('/:id', UpdatePositionRequest, positionController.update);
router.delete('/:id', positionController.destroy);

module.exports = router;