const { courseCollection, courseResource } = require("../resource/courseResource");
const createCourse = require("../service/course/createCourse");
const deleteCourse = require("../service/course/deleteCourse");
const fetchAllCourse = require("../service/course/fetchAllCourse");
const fetchSingleCourse = require("../service/course/fetchSingleCourse");
const updateCourse = require("../service/course/updateCourse");
const ApiResponses = require("../utils/apiResponse");

class CourseController{

    async index(req, res)
    {
        const course = await fetchAllCourse.execute(req);
        if(course)
        {
            return ApiResponses(res, 200, 'All Course', courseCollection(course));
        }

        return ApiResponses(res, 200, 'No Course Found');
    }

    async show(req, res)
    {
        const course = await fetchSingleCourse.execute(req.params.id);
        if(course)
        {
            return ApiResponses(res, 200, 'Single Course', courseResource(course));
        }

        return ApiResponses(res, 400, 'Course Not Found');
    }

    async store(req, res)
    {
        if(await createCourse.execute(req.courseData))
        {
            return ApiResponses(res, 200, 'Course Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Course');
    }

    async update(req, res)
    {
        if(await updateCourse.execute(req.params.id, req.courseData))
        {
            return ApiResponses(res, 200, 'Course Updated');
        }

        return ApiResponses(res, 400, 'Course Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteCourse.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Course Deleted');
        }

        return ApiResponses(res, 400, 'Course Not Found');
    }

    async getCourseByProgramme(req, res){
        const course = await fetchAllCourse.getCourse(req);
        if(course)
        {
            return ApiResponses(res, 200, 'All Course', courseCollection(course, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Course Found');
    }
}

module.exports = new CourseController();