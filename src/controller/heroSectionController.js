const { heroSectionCollection, heroSectionResource } = require("../resource/heroSectionResource");
const createHeroSection = require("../service/heroSection/createHeroSection");
const deleteHeroSection = require("../service/heroSection/deleteHeroSection");
const fetchAllHeroSection = require("../service/heroSection/fetchAllHeroSection");
const fetchSingleHeroSection = require("../service/heroSection/fetchSingleHeroSection");
const updateHeroSection = require("../service/heroSection/updateHeroSection");
const ApiResponses = require("../utils/apiResponse");

class HeroSectionController{

    async index(req, res)
    {
        const hero = await fetchAllHeroSection.execute(req.query.page ?? 1);
        if(hero)
        {
            return ApiResponses(res, 200, 'All Hero Section Slider', heroSectionCollection(hero));
        }

        return ApiResponses(res, 200, 'No Hero Section Slider Found');
    }

    async store(req, res)
    {
        if(await createHeroSection.execute(req.heroData))
        {
            return ApiResponses(res, 200, 'Hero Section Slider Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Hero Section Slider');
    }

    async show(req, res)
    {
        const hero = await fetchSingleHeroSection.execute(req.params.id);
        if(hero)
        {
            return ApiResponses(res, 200, 'Single Hero Section Slider', heroSectionResource(hero));
        }

        return ApiResponses(res, 400, 'Hero Section Slider Not Found');
    }

    async update(req, res)
    {
        if(await updateHeroSection.execute(req.params.id, req.heroData))
        {
            return ApiResponses(res, 200, 'Hero Section Slider Updated');
        }

        return ApiResponses(res, 400, 'Hero Section Slider Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteHeroSection.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Hero Section Slider Deleted');
        }

        return ApiResponses(res, 400, 'Hero Section Slider Not Found');
    }

    async getSliders(req, res){
        const hero = await fetchAllHeroSection.getSliders(req.query.limit);
        if(hero)
        {
            return ApiResponses(res, 200, 'All Hero Section Slider', heroSectionCollection(hero, false));
        }

        return ApiResponses(res, 200, 'No Hero Section Slider Found');
    }
}

module.exports = new HeroSectionController();