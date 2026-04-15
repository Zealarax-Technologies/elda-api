const positionCategoryController = require('../controller/positionCategoryController');
const CreatePositionCategoryRequest = require('../request/createPositionCategoryRequest');
const UpdatePositionCategoryRequest = require('../request/updatePositionCategoryRequest');

const router = require('express').Router();

router.get('/', positionCategoryController.index);
router.get('/:id', positionCategoryController.show);
router.post('/', CreatePositionCategoryRequest, positionCategoryController.store);
router.patch('/:id', UpdatePositionCategoryRequest, positionCategoryController.update);
router.delete('/:id', positionCategoryController.destroy);

module.exports = router;