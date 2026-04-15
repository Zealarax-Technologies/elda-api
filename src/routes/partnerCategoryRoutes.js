const partnerCategoryController = require('../controller/partnerCategoryController');
const CreatePartnerCategoryRequest = require('../request/createPartnerCategoryRequest');
const UpdatePartnerCategoryRequest = require('../request/updatePartnerCategoryRequest');

const router = require('express').Router();

router.get('/', partnerCategoryController.index);
router.get('/:id', partnerCategoryController.show);
router.post('/', CreatePartnerCategoryRequest, partnerCategoryController.store);
router.patch('/:id', UpdatePartnerCategoryRequest, partnerCategoryController.update);
router.delete('/:id', partnerCategoryController.destroy);

module.exports = router;