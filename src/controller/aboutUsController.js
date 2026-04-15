const { aboutUsResource, aboutUsCollection } = require("../resource/aboutUsResource");
const createAboutUs = require("../service/aboutUs/createAboutUs");
const deleteAboutUs = require("../service/aboutUs/deleteAboutUs");
const fetchAllAboutUs = require("../service/aboutUs/fetchAllAboutUs");
const fetchSingleAboutUs = require("../service/aboutUs/fetchSingleAboutUs");
const updateAboutUs = require("../service/aboutUs/updateAboutUs");
const ApiResponses = require("../utils/apiResponse");

class AboutUsController{

    async index(req, res)
    {
        const aboutus = await fetchAllAboutUs.execute(req.query.page);
        if(aboutus)
        {
            return ApiResponses(res, 200, 'All About Us', aboutUsCollection(aboutus));
        }

        return ApiResponses(res, 200, 'No About Us Found');
    }

    async show(req, res)
    {
        const aboutus = await fetchSingleAboutUs.execute(req.params.keyword);
        if(aboutus)
        {
            return ApiResponses(res, 200, 'Single About Us', aboutUsResource(aboutus));
        }

        return ApiResponses(res, 400, 'About us not found');
    }

    async store(req, res)
    {
        if(await createAboutUs.execute(req.aboutUsData))
        {
            return ApiResponses(res, 200, 'About Us Created');
        }

        return ApiResponses(res, 400, 'Problem Creating about us');
    }

    async update(req, res)
    {
        if(await updateAboutUs.execute(req.params.id, req.aboutUsData))
        {
            return ApiResponses(res, 200, 'About Us Updated');
        }

        return ApiResponses(res, 400, 'Problem Updating about us');
    }

    async destroy(req, res)
    {
        if(await deleteAboutUs.execute(req.params.id,))
        {
            return ApiResponses(res, 200, 'About Us Deleted');
        }

        return ApiResponses(res, 400, 'About us not found');
    }

    async getAboutUs(req, res){
        const aboutus = await fetchAllAboutUs.getAboutUs(req.query);
        if(aboutus)
        {
            return ApiResponses(res, 200, 'All About Us', aboutUsCollection(aboutus, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No About Us Found');
    }
}

module.exports = new AboutUsController();