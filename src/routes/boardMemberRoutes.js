const boardMemberController = require('../controller/boardMemberController');
const CreateBoardMemberRequest = require('../request/createBoardMemberRequest');
const UpdateBoardMemberRequest = require('../request/updateBoardMemberRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', boardMemberController.index);
router.get('/:id', boardMemberController.show);
router.post('/', upload('board_members').single('image'), CreateBoardMemberRequest, boardMemberController.store);
router.patch('/:id', upload('board_members').single('image'), UpdateBoardMemberRequest, boardMemberController.update);
router.delete('/:id', boardMemberController.destroy);

module.exports = router;