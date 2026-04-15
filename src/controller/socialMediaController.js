const { socialMediaCollection, socialMediaResource } = require("../resource/socialMediaResource");
const createSocialMedia = require("../service/socialMedia/createSocialMedia");
const deleteSocialMedia = require("../service/socialMedia/deleteSocialMedia");
const fetchAllSocialMedia = require("../service/socialMedia/fetchAllSocialMedia");
const fetchSingleSocialMedia = require("../service/socialMedia/fetchSingleSocialMedia");
const updateSocialMedia = require("../service/socialMedia/updateSocialMedia");
const ApiResponses = require("../utils/apiResponse");

class SocialMediaController{

    async index(req, res)
    {
        const socialMedia = await fetchAllSocialMedia.execute(req.query.page);
        if(socialMedia)
        {
            return ApiResponses(res, 200, 'All Social Media', socialMediaCollection(socialMedia));
        }

        return ApiResponses(res, 200, 'No Social Media Found');
    }

    async show(req, res)
    {
        const socialMedia = await fetchSingleSocialMedia.execute(req.params.id);
        if(socialMedia)
        {
            return ApiResponses(res, 200, 'Single Social Media', socialMediaResource(socialMedia));
        }

        return ApiResponses(res, 400, 'Social Media Not Found');
    }

    async store(req, res)
    {
        if(await createSocialMedia.execute(req.socialMediaData))
        {
            return ApiResponses(res, 200, 'Social Media Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Social Media');
    }

    async update(req, res)
    {
        if(await updateSocialMedia.execute(req.params.id, req.socialMediaData))
        {
            return ApiResponses(res, 200, 'Social Medias Updated');
        }

        return ApiResponses(res, 400, 'Problem Updated Social Medias');
    }

    async destroy(req, res)
    {
        if(await deleteSocialMedia.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Social Medias Deleted');
        }

        return ApiResponses(res, 400, 'Social Medias Not Found');
    }

    async getSocials(req, res){
        const socialMedia = await fetchAllSocialMedia.getSocials(req.query);
        if(socialMedia)
        {
            return ApiResponses(res, 200, 'All Social Media', socialMediaCollection(socialMedia, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Social Media Found');
    }
}

module.exports = new SocialMediaController();