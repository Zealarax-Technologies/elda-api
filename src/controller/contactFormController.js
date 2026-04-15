const { contactFormCollection, contactFormResource } = require("../resource/contactFormResource");
const createContactForm = require("../service/contactForm/createContactForm");
const deleteContactForm = require("../service/contactForm/deleteContactForm");
const fetchAllContactForm = require("../service/contactForm/fetchAllContactForm");
const fetchSingleContactForm = require("../service/contactForm/fetchSingleContactForm");
const ApiResponses = require("../utils/apiResponse");

class ContactFormController{

    async index(req, res)
    {
        const form = await fetchAllContactForm.execute(req.query.page);
        if(form)
        {
            return ApiResponses(res, 200, 'All Contact Form', contactFormCollection(form));
        }

        return ApiResponses(res, 200, 'No Contact Form Found');
    }

    async show(req, res)
    {
        const form = await fetchSingleContactForm.execute(req.params.id);
        if(form)
        {
            return ApiResponses(res, 200, 'Single Contact Form', contactFormResource(form));
        }

        return ApiResponses(res, 400, 'Contact Form Not Found');
    }

    async store(req, res)
    {
        if(await createContactForm.execute(req.formData))
        {
            return ApiResponses(res, 200, 'Contact Form Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Contact Form');
    }

    async destroy(req, res)
    {
        if(await deleteContactForm.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Contact Forms Deleted');
        }

        return ApiResponses(res, 400, 'Contact Forms Not Found');
    }
}

module.exports = new ContactFormController();