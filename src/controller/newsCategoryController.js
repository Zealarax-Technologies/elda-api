const { newsCategoryCollection, newsCategoryResource } = require("../resource/newsCategoryResource");
const createNewsCategory = require("../service/newsCategory/createNewsCategory");
const deleteNewsCategory = require("../service/newsCategory/deleteNewsCategory");
const fetchAllNewsCategory = require("../service/newsCategory/fetchAllNewsCategory");
const fetchSingleNewsCategory = require("../service/newsCategory/fetchSingleNewsCategory");
const updateNewsCategory = require("../service/newsCategory/updateNewsCategory");
const ApiResponses = require("../utils/apiResponse");

class NewsCategoryController{

    async index(req, res)
    {
        const category = await fetchAllNewsCategory.execute(req.query.page);
        if(category)
        {
            return ApiResponses(res, 200, 'All News Category', newsCategoryCollection(category));
        }

        return ApiResponses(res, 200, 'No News Category Found');
    }

    async show(req, res)
    {
        const category = await fetchSingleNewsCategory.execute(req.params.id);
        if(category)
        {
            return ApiResponses(res, 200, 'Single News Category', newsCategoryResource(category));
        }

        return ApiResponses(res, 400, 'News Category Not Found');
    }

    async store(req, res)
    {
        if(await createNewsCategory.execute(req.categoryData))
        {
            return ApiResponses(res, 200, 'News Category Created');
        }

        return ApiResponses(res, 400, 'Problem Creating News Category');
    }

    async update(req, res)
    {
        if(await updateNewsCategory.execute(req.params.id, req.categoryData))
        {
            return ApiResponses(res, 200, 'News Category Updated');
        }

        return ApiResponses(res, 400, 'Problem Updating News Category');
    }

    async destroy(req, res)
    {
        if(await deleteNewsCategory.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'News Category Deleted');
        }

        return ApiResponses(res, 400, 'Newss Category Not Found');
    }

    async getCategories(req, res){
        const category = await fetchAllNewsCategory.getCategories(req.query);
        if(category)
        {
            return ApiResponses(res, 200, 'All News Category', newsCategoryCollection(category, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No News Category Found');
    }
}

module.exports = new NewsCategoryController();