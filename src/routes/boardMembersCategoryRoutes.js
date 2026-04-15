const boardMemberCategoryController = require('../controller/boardMemberCategoryController');
const CreateBoardMembersCategoryRequest = require('../request/createBoardMembersCategoryRequest');
const UpdateBoardMembersCategoryRequest = require('../request/updateBoardMembersCategoryRequest');

const router = require('express').Router();

router.get('/', boardMemberCategoryController.index);
router.get('/:id', boardMemberCategoryController.show);
router.post('/', CreateBoardMembersCategoryRequest, boardMemberCategoryController.store);
router.patch('/:id', UpdateBoardMembersCategoryRequest, boardMemberCategoryController.update);
router.delete('/:id', boardMemberCategoryController.destroy);

module.exports = router