const courseController = require('../controller/courseController');
const CreateCourseRequest = require('../request/createCourseRequest');
const UpdateCourseRequest = require('../request/updateCourseRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', courseController.index);
router.get('/:id', courseController.show);
router.post('/', upload('course').single('image'), CreateCourseRequest, courseController.store);
router.patch('/:id', upload('course').single('image'), UpdateCourseRequest, courseController.update);
router.delete('/:id', courseController.destroy);

module.exports = router;