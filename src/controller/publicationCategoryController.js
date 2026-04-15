const { publicationCategoryCollection, publicationCategoryResource } = require("../resource/publicationCategoryResource");
const createPublicationCategory = require("../service/publicationCategory/createPublicationCategory");
const deletePublicationCategory = require("../service/publicationCategory/deletePublicationCategory");
const fetchAllPublicationCategory = require("../service/publicationCategory/fetchAllPublicationCategory");
const fetchSinglePublicationCategory = require("../service/publicationCategory/fetchSinglePublicationCategory");
const updatePublicationCategory = require("../service/publicationCategory/updatePublicationCategory");
const ApiResponses = require("../utils/apiResponse");

class PublicationCategoryController{

    async index(req, res)
    {
        const category = await fetchAllPublicationCategory.execute(req.query.page);
        if(category)
        {
            return ApiResponses(res, 200, 'All Publication Category', publicationCategoryCollection(category));
        }

        return ApiResponses(res, 200, 'No Publication Category Found');
    }

    async show(req, res)
    {
        const category = await fetchSinglePublicationCategory.execute(req.params.id);
        if(category)
        {
            return ApiResponses(res, 200, 'Single Publication Category', publicationCategoryResource(category));
        }

        return ApiResponses(res, 400, 'Publication Category Not Found');
    }

    async store(req, res)
    {
        if(await createPublicationCategory.execute(req.categoryData))
        {
            return ApiResponses(res, 200, 'Publication Category Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Publication Category');
    }

    async update(req, res)
    {
        if(await updatePublicationCategory.execute(req.params.id, req.categoryData))
        {
            return ApiResponses(res, 200, 'Publication Category Updated');
        }

        return ApiResponses(res, 400, 'Publication Category Not Found');
    }

    async destroy(req, res)
    {
        if(await deletePublicationCategory.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Publication Category Deleted');
        }

        return ApiResponses(res, 400, 'Publication Category Not Found');
    }

    async getCategory(req, res){
        const category = await fetchAllPublicationCategory.getCategory(req.query);
        if(category)
        {
            return ApiResponses(res, 200, 'All Publication Category', publicationCategoryCollection(category, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Publication Category Found');
    }
}

module.exports = new PublicationCategoryController();