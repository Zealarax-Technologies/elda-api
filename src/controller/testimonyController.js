const { testimonyCollection, testimonyResource } = require("../resource/testimonyResource");
const createTestimony = require("../service/testimony/createTestimony");
const deleteTestimony = require("../service/testimony/deleteTestimony");
const fetchAllTestimony = require("../service/testimony/fetchAllTestimony");
const fetchSingleTestimony = require("../service/testimony/fetchSingleTestimony");
const updateTestimony = require("../service/testimony/updateTestimony");
const ApiResponses = require("../utils/apiResponse");

class TestimonyController{

    async index(req, res)
    {
        const testimony = await fetchAllTestimony.execute(req.query.page);
        if(testimony)
        {
            return ApiResponses(res, 200, 'All Testimony', testimonyCollection(testimony));
        }

        return ApiResponses(res, 200, 'No Testimony Found');
    }

    async show(req, res)
    {
        const testimony = await fetchSingleTestimony.execute(req.params.id);
        if(testimony)
        {
            return ApiResponses(res, 200, 'Single Testimony', testimonyResource(testimony));
        }

        return ApiResponses(res, 400, 'Testimony Not Found');
    }

    async store(req, res)
    {
        if(await createTestimony.execute(req.testimonyData))
        {
            return ApiResponses(res, 200, 'Testimony Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Testimony');
    }

    async update(req, res)
    {
        if(await updateTestimony.execute(req.params.id, req.testimonyData))
        {
            return ApiResponses(res, 200, 'Testimony Updated');
        }

        return ApiResponses(res, 400, 'Testimony Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteTestimony.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Testimony Deleted');
        }

        return ApiResponses(res, 400, 'Testimony Not Found');
    }

    async getTestimonial(req, res){
        const testimonials = await fetchAllTestimony.getTestimonial(req.query);
        if(testimonials)
        {
            return ApiResponses(res, 200, 'All Testimonials', testimonyCollection(testimonials, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Testimonials Found');
    }
}

module.exports = new TestimonyController();