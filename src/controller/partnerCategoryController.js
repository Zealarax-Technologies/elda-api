const { newsCategoryCollection, newsCategoryResource } = require("../resource/newsCategoryResource");
const createPartnerCategory = require("../service/partnerCategory/createPartnerCategory");
const deletePartnerCategory = require("../service/partnerCategory/deletePartnerCategory");
const fetchAllPartnerCategory = require("../service/partnerCategory/fetchAllPartnerCategory");
const fetchSinglePartnerCategory = require("../service/partnerCategory/fetchSinglePartnerCategory");
const updatePartnerCategory = require("../service/partnerCategory/updatePartnerCategory");
const ApiResponses = require("../utils/apiResponse");

class PartnerCategoryController{
    async index(req, res)
    {
        const category = await fetchAllPartnerCategory.execute(req.query.page);
        if(category)
        {
            return ApiResponses(res, 200, 'All Partners Category', newsCategoryCollection(category));
        }

        return ApiResponses(res, 200, 'No Partners Category Found');
    }

    async show(req, res)
    {
        const category = await fetchSinglePartnerCategory.execute(req.params.id);
        if(category)
        {
            return ApiResponses(res, 200, 'Single Partners Category', newsCategoryResource(category));
        }

        return ApiResponses(res, 400, 'Partners Category Not Found');
    }

    async store(req, res)
    {
        if(await createPartnerCategory.execute(req.categoryData))
        {
            return ApiResponses(res, 200, 'Partners Category Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Partners Category');
    }

    async update(req, res)
    {
        if(await updatePartnerCategory.execute(req.params.id, req.categoryData))
        {
            return ApiResponses(res, 200, 'Partners Category Updated');
        }

        return ApiResponses(res, 400, 'Problem Updating Partners Category');
    }

    async destroy(req, res)
    {
        if(await deletePartnerCategory.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Partners Category Deleted');
        }

        return ApiResponses(res, 400, 'Partners Category Not Found');
    }

    async getCategories(req, res){
        const category = await fetchAllPartnerCategory.getCategories(req.query);
        if(category)
        {
            return ApiResponses(res, 200, 'All Partners Category', newsCategoryCollection(category, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Partners Category Found');
    }
}

module.exports = new PartnerCategoryController();