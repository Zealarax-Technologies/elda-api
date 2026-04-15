const { courseTestimonyCollection, courseTestimonyResource } = require("../resource/courseTestimonialResource");
const createCourseTestimony = require("../service/courseTestimonial/createCourseTestimony");
const deleteCourseTestimony = require("../service/courseTestimonial/deleteCourseTestimony");
const fetchAllCourseTestimony = require("../service/courseTestimonial/fetchAllCourseTestimony");
const fetchSingleCourseTestimony = require("../service/courseTestimonial/fetchSingleCourseTestimony");
const updateCourseTestimony = require("../service/courseTestimonial/updateCourseTestimony");
const ApiResponses = require("../utils/apiResponse");

class CourseTestimonialController{
    async index(req, res)
    {
        const testimony = await fetchAllCourseTestimony.execute(req.query.page);
        if(testimony)
        {
            return ApiResponses(res, 200, 'All Testimony', courseTestimonyCollection(testimony));
        }

        return ApiResponses(res, 200, 'No Testimony Found');
    }

    async show(req, res)
    {
        const testimony = await fetchSingleCourseTestimony.execute(req.params.id);
        if(testimony)
        {
            return ApiResponses(res, 200, 'Single Testimony', courseTestimonyResource(testimony));
        }

        return ApiResponses(res, 400, 'Testimony Not Found');
    }

    async store(req, res)
    {
        if(await createCourseTestimony.execute(req.testimonyData))
        {
            return ApiResponses(res, 200, 'Testimony Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Testimony');
    }

    async update(req, res)
    {
        if(await updateCourseTestimony.execute(req.params.id, req.testimonyData))
        {
            return ApiResponses(res, 200, 'Testimony Updated');
        }

        return ApiResponses(res, 400, 'Testimony Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteCourseTestimony.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Testimony Deleted');
        }

        return ApiResponses(res, 400, 'Testimony Not Found');
    }
}

module.exports = new CourseTestimonialController();