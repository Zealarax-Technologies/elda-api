const publicationCategoryController = require('../controller/publicationCategoryController');
const CreatePublicationCategoryRequest = require('../request/CreatePublicationCategoryRequest');
const UpdatePublicationCategoryRequest = require('../request/updatePublicationCategoryRequest');

const router = require('express').Router();

router.get('/', publicationCategoryController.index);
router.get('/:id', publicationCategoryController.show);
router.post('/', CreatePublicationCategoryRequest, publicationCategoryController.store);
router.patch('/:id', UpdatePublicationCategoryRequest, publicationCategoryController.update);
router.delete('/:id', publicationCategoryController.destroy);

module.exports = router;