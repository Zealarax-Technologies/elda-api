const url = require("../config/url");
const { paginationLinks } = require("../utils/paginate");
const { courseTestimonyCollection, courseTestimonyResource } = require("./courseTestimonialResource");
const { programmeResource } = require("./programmeResource");
const { staffResource } = require("./staffResource");

function courseResource(course) {
    return {
        uuid: course.uuid,
        title: course.title,
        slug: course.slug,
        description: course.description,
        programme: course.programme ? programmeResource(course.programme) : course.programme,
        image: course.image ? url(course.image) : course.image,
        courseCode: course.course_code,
        ects: course.number_of_ects,
        mandatory: course.mandatory,
        date: course.date,
        duration: course.duration,
        fee: course.fee,
        learningOutcomes: course.learning_outcomes,
        how_to_apply: course.how_to_apply,
        entry_requirements: course.entry_requirements,
        modules: course.modules,
        prospectus_link: course.prospectus_link,
        assessment: course.assessment,
        status: course.status,
        target_audience: course.target_audience,
        course_chair_bio: course.course_chair_bio,
        location: course.location,
        language: course.language,
        staffs: course.staff?.length > 0 ? course.staff.map(staff => staffResource(staff)) : course.staff, 
        date_created: course.createdAt,
        testimonials: course.course_testimonials?.length ? course.course_testimonials.map((testimony) => courseTestimonyResource(testimony)) : course.course_testimonials
    };
}

function courseCollection(courses, paginate = true) 
{
    if(paginate){

        return {
            data: courses.data.map(course => courseResource(course)),
            meta: {
                total: courses.total,
                currentPage: courses.currentPage,
                totalPage: courses.totalPages,
                pageSize: courses.pageSize
            },
            links: paginationLinks('courses', courses.currentPage, courses.totalPages)
        };

    }
    return courses.map((course) => courseResource(course));
}

module.exports = {
    courseResource,
    courseCollection
};
