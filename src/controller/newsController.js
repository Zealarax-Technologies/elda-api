const { newsCollection, newsResource } = require("../resource/newsResource");
const createNews = require("../service/news/createNews");
const deleteNews = require("../service/news/deleteNews");
const fetchAllNews = require("../service/news/fetchAllNews");
const fetchSingleNews = require("../service/news/fetchSingleNews");
const updateNews = require("../service/news/updateNews");
const ApiResponses = require("../utils/apiResponse");

class NewsController{

    async index(req, res)
    {
        const news = await fetchAllNews.execute(req.query.page, req.query);
        if(news)
        {
            return ApiResponses(res, 200, 'All News', newsCollection(news));
        }

        return ApiResponses(res, 200, 'No News Found');
    }

    async show(req, res)
    {
        const news = await fetchSingleNews.execute(req.params.id);
        if(news)
        {
            return ApiResponses(res, 200, 'Single News', newsResource(news));
        }

        return ApiResponses(res, 400, 'News Not Found');
    }

    async store(req, res)
    {
        if(await createNews.execute(req.newsData))
        {
            return ApiResponses(res, 200, 'News Created');
        }

        return ApiResponses(res, 400, 'Problem Creating News');
    }

    async update(req, res)
    {
        if(await updateNews.execute(req.params.id, req.newsData))
        {
            return ApiResponses(res, 200, 'Newss Updated');
        }

        return ApiResponses(res, 400, 'Problem Updated Newss');
    }

    async destroy(req, res)
    {
        if(await deleteNews.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Newss Deleted');
        }

        return ApiResponses(res, 400, 'Newss Not Found');
    }

    async getNews(req, res){
        const news = await fetchAllNews.getNews(req.query);
        if(news)
        {
            return ApiResponses(res, 200, 'All News', newsCollection(news, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No News Found');
    }
}

module.exports = new NewsController();