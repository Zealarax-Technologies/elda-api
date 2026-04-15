const { announcementCollection, announcementResource } = require("../resource/announcementResource");
const createAnnouncement = require("../service/announcement/createAnnouncement");
const deleteAnnouncement = require("../service/announcement/deleteAnnouncement");
const fetchAllAnnouncement = require("../service/announcement/fetchAllAnnouncement");
const fetchSingleAnnouncement = require("../service/announcement/fetchSingleAnnouncement");
const updateAnnouncement = require("../service/announcement/updateAnnouncement");
const ApiResponses = require("../utils/apiResponse");

class AnnouncementController{
    async index(req, res)
    {
        const announcement = await fetchAllAnnouncement.execute(req.query.page);
        if(announcement)
        {
            return ApiResponses(res, 200, 'All Announcement', announcementCollection(announcement));
        }

        return ApiResponses(res, 200, 'No Announcement Found');
    }

    async show(req, res)
    {
        const announcement = await fetchSingleAnnouncement.execute(req.params.id);
        if(announcement)
        {
            return ApiResponses(res, 200, 'Single Announcement', announcementResource(announcement));
        }

        return ApiResponses(res, 400, 'Announcement Not Found');
    }

    async store(req, res)
    {
        if(await createAnnouncement.execute(req.announcementData))
        {
            return ApiResponses(res, 200, 'Announcement Created');
        }

        return ApiResponses(res, 400, 'Problem Creating Announcement');
    }

    async update(req, res)
    {
        if(await updateAnnouncement.execute(req.params.id, req.announcementData))
        {
            return ApiResponses(res, 200, 'Announcement Updated');
        }

        return ApiResponses(res, 400, 'Announcement Not Found');
    }

    async destroy(req, res)
    {
        if(await deleteAnnouncement.execute(req.params.id))
        {
            return ApiResponses(res, 200, 'Announcement Deleted');
        }

        return ApiResponses(res, 400, 'Announcement Not Found');
    }

    async getAnnouncements(req, res){
        const announcement = await fetchAllAnnouncement.getAnnouncements(req.query);
        if(announcement)
        {
            return ApiResponses(res, 200, 'All Announcement', announcementCollection(announcement, (parseInt(req.query?.paginate) ? true : false)));
        }

        return ApiResponses(res, 200, 'No Announcement Found');
    }
}

module.exports = new AnnouncementController();