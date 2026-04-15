const publicationController = require('../controller/publicationController');
const CreatePublicationRequest = require('../request/createPublicationRequest');
const UpdatePublicationRequest = require('../request/updatePublicationRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', publicationController.index);
router.get('/:id', publicationController.show);
router.post('/', upload('publication').fields([{ name: 'image', maxCount: 1 },{ name: 'file', maxCount: 1 },]), CreatePublicationRequest, publicationController.store);
router.patch('/:id', upload('publication').fields([{ name: 'image', maxCount: 1 },{ name: 'file', maxCount: 1 },]), UpdatePublicationRequest, publicationController.update);
router.delete('/:id', publicationController.destroy);

module.exports = router;