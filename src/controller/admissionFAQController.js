const { admissionFAQCollection, admissionFAQResource } = require("../resource/admissionFaqResource");
const createAdmissionFAQ = require("../service/admissionFAQ/createAdmissionFAQ");
const deleteAdmissionFAQ = require("../service/admissionFAQ/deleteAdmissionFAQ");
const fetchAllAdmissionFAQ = require("../service/admissionFAQ/fetchAllAdmissionFAQ");
const fetchSingleAdmissionFAQ = require("../service/admissionFAQ/fetchSingleAdmissionFAQ");
const updateAdmissionFAQ = require("../service/admissionFAQ/updateAdmissionFAQ");
const ApiResponses = require("../utils/apiResponse");

class AdmissionFAQController{

    async index(req, res)
    {
        const faq = await fetchAllAdmissionFAQ.execute(req.query.page);
        if(faq)
        {
            return ApiResponses(res, 200, 'All FAQ', admissionFAQCollection(faq));
        }

        return ApiResponses(res, 200, 'No FAQ Found');
    }

    async show(req, res)
    {
        const faq = await fetchSingleAdmissionFAQ.execute(req.params.id);
        if(faq)
        {
            return ApiResponses(res, 200, 'Single FAQ', admissionFAQResource(faq));
        }

        return ApiResponses(res, 400, 'FAQ Not Found');
    }

    async store(req, res)
    {
        if(await createAdmissionFAQ.execute(req.faqData))
        {
            return ApiResponses(res, 200, 'FAQ Created');
        }

        return ApiResponses(res, 400, 'Problem Creating FAQ');
    }

    async update(req, res)
    {
        if(await updateAdmissionFAQ.execute(req.params.id, req.faqData))
        {
            return ApiResponses(res, 200, 'FAQ Updated');
        }

        return ApiResponses(res, 400, 'FAQ Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteAdmissionFAQ.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'FAQ Deleted');
        }

        return ApiResponses(res, 400, 'FAQ Not Found');
    }
}

module.exports = new AdmissionFAQController();