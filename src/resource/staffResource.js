const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");
const { courseCollection } = require("./courseResource");

function staffResource(staff)
{
    return {
        uuid: staff.uuid,
        name: staff.name,
        slug: staff.slug,
        position: staff.position,
        field: staff.field,
        image: staff.image ? url(staff.image) : staff.image,
    }
}

function staffCollection(staffs)
{
    return {
        data: staffs.data.map(staff => staffResource(staff)),
        meta: {
            total: staffs.total,
            currentPage: staffs.currentPage,
            totalPage: staffs.totalPages,
            pageSize: staffs.pageSize
        },
        links: paginationLinks('staffs', staffs.currentPage, staffs.totalPages)
    };
}

module.exports = {
    staffResource,
    staffCollection
}