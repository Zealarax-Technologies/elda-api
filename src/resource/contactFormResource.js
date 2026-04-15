const { paginationLinks } = require("../utils/paginate");

function contactFormResource(contactForm) {
    return {
        uuid: contactForm.uuid,
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        subject: contactForm.subject,
        message: contactForm.message,
        communication_preference: contactForm.communication_preference,
        date_created: contactForm.createdAt
    };
}

function contactFormCollection(contactForms) {
    return {
        data: contactForms.data.map(contactForm => contactFormResource(contactForm)),
        meta: {
            total: contactForms.total,
            currentPage: contactForms.currentPage,
            totalPage: contactForms.totalPages,
            pageSize: contactForms.pageSize
        },
        links: paginationLinks('contact-forms', contactForms.currentPage, contactForms.totalPages)
    };
}

module.exports = {
    contactFormResource,
    contactFormCollection
};
