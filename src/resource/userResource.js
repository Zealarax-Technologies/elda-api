const { paginationLinks } = require("../utils/paginate");

function userResource(user){
    return {
        uuid: user.uuid,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: user.token ? user.token : ''
    }
}

function userCollection(users)
{
    return {
        data: users.data.map(testimony => userResource(testimony)),
        meta: {
            total: users.total,
            currentPage: users.currentPage,
            totalPage: users.totalPages,
            pageSize: users.pageSize
        },
        links: paginationLinks('users', users.currentPage, users.totalPages)
    };
}

module.exports = {userResource, userCollection}