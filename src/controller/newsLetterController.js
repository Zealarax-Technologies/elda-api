const { newsletterCollection, newsletterResource } = require("../resource/newsLetterResource");
const createNewsLetter = require("../service/newsLetter/createNewsLetter");
const deleteNewsLetter = require("../service/newsLetter/deleteNewsLetter");
const fetchAllNewsLetter = require("../service/newsLetter/fetchAllNewsLetter");
const fetchSingleNewsLetter = require("../service/newsLetter/fetchSingleNewsLetter");
const ApiResponses = require("../utils/apiResponse");

class NewsLetterController{

    async index(req, res)
    {
        const newsLetter = await fetchAllNewsLetter.execute(req.query.page);
        if(newsLetter)
        {
            return ApiResponses(res, 200, 'All News Letter', newsletterCollection(newsLetter));
        }

        return ApiResponses(res, 200, 'No News Letter Found');
    }

    async show(req, res)
    {
        const newsLetter = await fetchSingleNewsLetter.execute(req.params.id);
        if(newsLetter)
        {
            return ApiResponses(res, 200, 'Single News Letter', newsletterResource(newsLetter));
        }

        return ApiResponses(res, 400, 'News Letter Not Found');
    }

    async store(req, res)
    {
        if(await createNewsLetter.execute(req.newsLetterData))
        {
            return ApiResponses(res, 200, 'News Letter Created');
        }

        return ApiResponses(res, 400, 'Problem Creating News Letter');
    }

    async destroy(req, res)
    {
        if(await deleteNewsLetter.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'News Letter Deleted');
        }

        return ApiResponses(res, 400, 'News Letter Not Found');
    }
}

module.exports = new NewsLetterController();