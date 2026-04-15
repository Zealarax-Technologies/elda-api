const { faqCollection, faqResource } = require("../resource/faqResource");
const createFAQ = require("../service/faq/createFAQ");
const deleteFAQ = require("../service/faq/deleteFAQ");
const fetchAllFAQ = require("../service/faq/fetchAllFAQ");
const fetchSingleFAQ = require("../service/faq/fetchSingleFAQ");
const updateFAQ = require("../service/faq/updateFAQ");
const ApiResponses = require("../utils/apiResponse");

class FAQController{

    async index(req, res)
    {
        const faq = await fetchAllFAQ.execute(req.query.page);
        if(faq)
        {
            return ApiResponses(res, 200, 'All FAQ', faqCollection(faq));
        }

        return ApiResponses(res, 200, 'No FAQ Found');
    }

    async show(req, res)
    {
        const faq = await fetchSingleFAQ.execute(req.params.id);
        if(faq)
        {
            return ApiResponses(res, 200, 'Single FAQ', faqResource(faq));
        }

        return ApiResponses(res, 400, 'FAQ Not Found');
    }

    async store(req, res)
    {
        if(await createFAQ.execute(req.faqData))
        {
            return ApiResponses(res, 200, 'FAQ Created');
        }

        return ApiResponses(res, 400, 'Problem Creating FAQ');
    }

    async update(req, res)
    {
        if(await updateFAQ.execute(req.params.id, req.faqData))
        {
            return ApiResponses(res, 200, 'FAQ Updated');
        }

        return ApiResponses(res, 400, 'FAQ Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteFAQ.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'FAQ Deleted');
        }

        return ApiResponses(res, 400, 'FAQ Not Found');
    }

    async getFaqs(req, res){
        const faq = await fetchAllFAQ.getFaqs(req.query);
        if(faq)
        {
            return ApiResponses(res, 200, 'All FAQ', faqCollection(faq, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No FAQ Found');
    }
}

module.exports = new FAQController();