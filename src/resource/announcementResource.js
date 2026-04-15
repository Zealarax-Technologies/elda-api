const { paginationLinks } = require("../utils/paginate");

function announcementResource(announcement) {
    return {
        uuid: announcement.uuid,
        title: announcement.title,
        slug: announcement.slug,
        content: announcement.content,
        createdAt: announcement.createdAt
    };
}

function announcementCollection(announcementArray, paginate = true) {
    if(paginate){
        return {
            data: announcementArray.data.map(announcement => announcementResource(announcement)),
            meta: {
                total: announcementArray.total,
                currentPage: announcementArray.currentPage,
                totalPage: announcementArray.totalPages,
                pageSize: announcementArray.pageSize
            },
            links: paginationLinks('announcements', announcementArray.currentPage, announcementArray.totalPages)
        };
    }

    return announcementArray.map((announcement) => announcementResource(announcement));
}

module.exports = {
    announcementResource,
    announcementCollection,
};
