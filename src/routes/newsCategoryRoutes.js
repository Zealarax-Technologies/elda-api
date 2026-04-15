const newsCategoryController = require('../controller/newsCategoryController');
const CreateNewsCategoryRequest = require('../request/createNewsCategoryRequest');
const UpdateNewsCategoryRequest = require('../request/updateNewsCategoryRequest');

const router = require('express').Router();

router.get('/', newsCategoryController.index);
router.get('/:id', newsCategoryController.show);
router.post('/', CreateNewsCategoryRequest, newsCategoryController.store);
router.patch('/:id', UpdateNewsCategoryRequest, newsCategoryController.update);
router.delete('/:id', newsCategoryController.destroy);

module.exports = router;