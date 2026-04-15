const models = require('../../models');
const { paginate } = require('../../utils/paginate');

class FetchAllCourse {

    async execute(req) {
        const { query, params } = req;
        const page = query?.page || 1;
        const pageSize = 20;

        const where = {};
        if (params?.id) {
            where.programme_id = params?.id
        }

        if (query?.status) {
            where.status = query.status;
        }


        const course = await paginate(models.Course, {
            page,
            pageSize,
            where,
            order: [['createdAt', 'DESC']],
            include: [
                {
                    model: models.Programme,
                    as: 'programme'
                },
                {
                    model: models.Staff,
                    as: 'staff'
                },
                {
                    model: models.CourseTestimonials,
                    as: 'course_testimonials'
                },
            ]
        });

        if (course) {
            return course;
        }

        return false;
    }

    async getCourse(req) {

        const { query, params } = req;
        const programmeId = params.id;

        if (parseInt(query?.paginate)) {
            query.page = query.page || 1;
            const course = await this.execute(req);
            if (course) {
                return course;
            }

            return false;
        }

        const where = {
            programme_id: programmeId
        };

        if (query.status) {
            where.status = query.status;
        }



        const course = await models.Course.findAll({
            where,
            include: [
                {
                    model: models.Programme,
                    as: 'programme'
                },
                {
                    model: models.Staff,
                    as: 'staff'
                },
                {
                    model: models.CourseTestimonials,
                    as: 'course_testimonials'
                },
            ]
        });

        if (course) {
            return course;
        }

        return false;
    }
}

module.exports = new FetchAllCourse();