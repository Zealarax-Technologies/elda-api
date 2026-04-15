const { paginationLinks } = require("../utils/paginate");
const { courseResource } = require("./courseResource");

function checkoutResource(checkout) {
    return {
        uuid: checkout.uuid,
        reference: checkout.reference,
        name: checkout.name,
        email: checkout.email,
        street: checkout.street,
        city: checkout.city,
        state: checkout.state,
        postal_code: checkout.postal_code,
        country: checkout.country,
        orders: checkout.order?.length ? checkout.order.map((order) => courseResource(order.course)) : [],
        total_amount: checkout.total_amount,
        date_created: checkout.createdAt
    };
}

function checkoutCollection(checkouts) {
    return {
        data: checkouts.data.map(checkout => checkoutResource(checkout)),
        meta: {
            total: checkouts.total,
            currentPage: checkouts.currentPage,
            totalPage: checkouts.totalPages,
            pageSize: checkouts.pageSize
        },
        links: paginationLinks('checkouts', checkouts.currentPage, checkouts.totalPages)
    };
}

module.exports = {
    checkoutResource,
    checkoutCollection
};
