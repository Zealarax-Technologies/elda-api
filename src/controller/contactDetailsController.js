const { contactDetailsResource, contactDetailsCollection } = require("../resource/contactDetailsResource");
const createContactDetails = require("../service/contactDetails/createContactDetails");
const DeleteContactDetails = require("../service/contactDetails/DeleteContactDetails");
const fetchAllContactDetails = require("../service/contactDetails/fetchAllContactDetails");
const fetchSingleContactDetails = require("../service/contactDetails/fetchSingleContactDetails");
const updateContactDetails = require("../service/contactDetails/updateContactDetails");
const ApiResponses = require("../utils/apiResponse");

class ContactDetailsController{

    async index(req, res)
    {
        const contact = await fetchAllContactDetails.execute(req.query.page);
        if(contact)
        {
            return ApiResponses(res, 200, 'All Contact Details', contactDetailsCollection(contact));
        }

        return ApiResponses(res, 200, 'No contact details found');
    }

    async show(req, res)
    {
        const contact = await fetchSingleContactDetails.execute(req.params.keyword);
        if(contact)
        {
            return ApiResponses(res, 200, 'Single Contact Details', contactDetailsResource(contact));
        }

        return ApiResponses(res, 400, 'Contact Details not found');
    }

    async store(req, res)
    {
        if(await createContactDetails.execute(req.contactData))
        {
            return ApiResponses(res, 200, 'Contact Details Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Contact Details');
    }

    async update(req, res)
    {
        if(await updateContactDetails.execute(req.params.id, req.contactData))
        {
            return ApiResponses(res, 200, 'Contact Details Updated');
        }

        return ApiResponses(res, 400, 'Problem Updating Contact Details');
    }

    async destroy(req, res)
    {
        if(await DeleteContactDetails.execute(req.params.id, ))
        {
            return ApiResponses(res, 200, 'Contact Details Deleted');
        }

        return ApiResponses(res, 400, 'Contact Details not found');
    }

    async getContactDetails(req, res){
        const contact = await fetchAllContactDetails.getContactDetails(req.query);
        if(contact)
        {
            return ApiResponses(res, 200, 'All Contact Details', contactDetailsCollection(contact, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No contact details found');
    }
}

module.exports = new ContactDetailsController();