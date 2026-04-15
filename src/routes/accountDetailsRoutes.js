const accountDetailsController = require('../controller/accountDetailsController');
const CreateAccountDetailsRequest = require('../request/createAccountDetailsRequest');
const UpdateAccountDetailsRequest = require('../request/updateAccountDetailsRequest');

const router = require('express').Router();

router.get('/', accountDetailsController.index);
router.get('/:keyword', accountDetailsController.show);
router.post('/', CreateAccountDetailsRequest, accountDetailsController.store);
router.patch('/:id', UpdateAccountDetailsRequest, accountDetailsController.update);
router.delete('/:id', accountDetailsController.destroy);

module.exports = router;