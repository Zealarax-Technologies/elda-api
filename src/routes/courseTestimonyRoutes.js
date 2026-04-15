const courseTestimonialController = require('../controller/courseTestimonialController');
const CreateCourseTestimonyRequest = require('../request/createCourseTestimonialRequest');
const UpdateCourseTestimonyRequest = require('../request/updateCourseTestimonialRequest');
const upload = require('../utils/uploadHelper');

const router = require('express').Router();

router.get('/', courseTestimonialController.index);
router.get('/:id', courseTestimonialController.show);
router.post('/', upload('course_testimony').single('image'), CreateCourseTestimonyRequest, courseTestimonialController.store);
router.patch('/:id', upload('course_testimony').single('image'), UpdateCourseTestimonyRequest, courseTestimonialController.update);
router.delete('/:id', courseTestimonialController.destroy);

module.exports = router;