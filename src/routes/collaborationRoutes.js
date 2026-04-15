const collaborationController = require('../controller/collaborationController');
const CreateCollaborationRequest = require('../request/createCollaborationRequest');
const UpdateCollaborationRequest = require('../request/updateCollaborationRequest');

const router = require('express').Router();

router.get('/', collaborationController.index);
router.get('/:id', collaborationController.show);
router.post('/', CreateCollaborationRequest, collaborationController.store);
router.patch('/:id', UpdateCollaborationRequest, collaborationController.update);
router.delete('/:id', collaborationController.destroy);

module.exports = router;