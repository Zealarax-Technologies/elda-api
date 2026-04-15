const { paginationLinks } = require("../utils/paginate");

function accountDetailsResource(accountDetails) {
    return {
        uuid: accountDetails.uuid,
        account_name: accountDetails.account_name,
        account_number: accountDetails.account_number,
        bank_name: accountDetails.bank_name,
        default: accountDetails.default
    };
}

function accountDetailsCollection(accountDetailsArray, paginate = true) {

    if(paginate){

        return {
            data: accountDetailsArray.data.map(accountDetails => accountDetailsResource(accountDetails)),
            meta: {
                total: accountDetailsArray.total,
                currentPage: accountDetailsArray.currentPage,
                totalPage: accountDetailsArray.totalPages,
                pageSize: accountDetailsArray.pageSize
            },
            links: paginationLinks('admission-details', accountDetailsArray.currentPage, accountDetailsArray.totalPages)
        };
    }

    return accountDetailsArray.map((details) => accountDetailsResource(details));
}

module.exports = {
    accountDetailsResource, accountDetailsCollection
};