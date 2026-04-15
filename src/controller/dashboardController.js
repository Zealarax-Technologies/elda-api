const { Op } = require("sequelize");
const models = require("../models");
const ApiResponses = require("../utils/apiResponse");
const { eventResource } = require("../resource/eventResource");
const { courseResource } = require("../resource/courseResource");
const { announcementCollection, announcementResource } = require("../resource/announcementResource");

class DashboardController{

    async stats(req, res){
        const [aboutUs, histories, boardMembers, programmes, courses, news, events, partners, testimonies, publications, newsletter, faqs, upcomingEvents, top_selling_course, recent_announcement] = await Promise.all([
            models.AboutUs.count(),
            models.History.count(),
            models.BoardMember.count(),
            models.Programme.count(),
            models.Course.count(),
            models.News.count(),
            models.Event.count(),
            models.OurPartner.count(),
            models.Testimony.count(),
            models.Publication.count(),
            models.NewsLetter.count(),
            models.FAQ.count(),
            models.Event.findAll({
                limit: 3
            }),
            models.Course.findAll({
                limit: 3
            }),
            models.Announcement.findAll({
                limit: 3
            }),

        ]);

        const payments = [
            {
                uuid: '12345',
                user: 'John Doe',
                amount: 500,
                date: '2025-05-20T00:00:00.000Z',
                status: 'paid',
                course: {
                    uuid: '8eccaa2e-eb5d-4175-9276-0609466c6aa2',
                    title: 'Sample Course Title Update',
                    description: 'A detailed description of the course content and objectives.',
                    fee: 500,
                },
            },
            {
                uuid: '67890',
                user: 'Jane Smith',
                amount: 300,
                date: '2025-05-21T00:00:00.000Z',
                status: 'pending',
                course: {
                    uuid: 'd83a2092-e263-4aac-a3ea-ab8395af9ff3',
                    title: 'Advanced Programming',
                    description: 'Learn advanced coding techniques.',
                    fee: 300,
                },
            },
        ];


        return ApiResponses(res, 200, 'Database Stat', {
                aboutUs,
                histories,
                boardMembers,
                programmes,
                courses,
                news,
                events,
                partners,
                testimonies,
                publications,
                newsletter,
                faqs,
                total_purchased_course: 0,
                visitors: 0,
                upcomingEvents: upcomingEvents.map((event) => eventResource(event)),
                top_selling_course: top_selling_course.map((course) => courseResource(course)),
                recent_payments: payments,
                recent_announcement: recent_announcement.map((announcment) => announcementResource(announcment)),
            }
        );


    }
}

module.exports = new DashboardController();