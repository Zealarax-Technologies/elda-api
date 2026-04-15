const router = require('express').Router();
const heroSectionRoutes = require('./heroSectionRoutes');
const aboutUsRoutes = require('./aboutUsRoutes');
const historyRoutes = require('./historyRoutes');
const boardMembersCategoryRoutes = require('./boardMembersCategoryRoutes');
const boardMemberRoutes = require('./boardMemberRoutes');
const ourPartnerRoutes = require('./ourPartnerRoutes');
const newsCategoryRoutes = require('./newsCategoryRoutes');
const newsRoutes = require('./newsRoutes');
const testimonyRoutes = require('./testimonyRoutes');
const eventTypeRoutes = require('./eventTypeRoutes');
const eventRoutes = require('./eventRoutes');
const contactFormRoutes = require('./contactFormRoutes');
const contactDetailsRoutes = require('./contactDetailsRoutes');
const newsLetterRoutes = require('./newsLetterRoutes');
const socialMediaRoutes = require('./socialMediaRoutes');
const faqRoutes = require('./faqRoutes');
const positionCategoryRoutes = require('./positionCategoryRoutes');
const positionRoutes = require('./positionRoutes');
const programmeRoutes = require('./programmeRoutes');
const courseRoutes = require('./courseRoutes');
const publicationCategoryRoutes = require('./publicationCategoryRoutes');
const publicationRoutes = require('./publicationRoutes');
const specialEnquiryRoutes = require('./specialEnquiryRoutes');
const admissionDetailsRoutes = require('./admissionDetailsRoutes');
const admissionFAQRoutes = require('./admissionFAQRoutes');
const staffRoutes = require('./staffRoutes');
const partnershipRoutes = require('./partnershipRoutes');
const collaborationRoutes = require('./collaborationRoutes');
const authRoutes = require('./authRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const announcementRoutes = require('./announcementRoutes');
const publicRoutes = require('./publicRoutes');
const legalRoutes = require('./legalRoutes');
const courseTestimonyRoutes = require('./courseTestimonyRoutes');
const partnerCategoryRoutes = require('./partnerCategoryRoutes');
const checkoutRoutes = require('./checkoutRoutes');
const accountDetailsRoutes = require('./accountDetailsRoutes');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/test', (req, res) => {
    res.status(200).json({
        message: "Api Routes are working"
    })
});

router.use('/public', publicRoutes);

router.use('/', authRoutes);

router.use(authMiddleware);

router.use('/hero-sections', heroSectionRoutes);
router.use('/about-us', aboutUsRoutes);
router.use('/histories', historyRoutes);
router.use('/board-members-categories', boardMembersCategoryRoutes);
router.use('/board-members', boardMemberRoutes);
router.use('/partner-categories', partnerCategoryRoutes);
router.use('/our-partners', ourPartnerRoutes);
router.use('/news-categories', newsCategoryRoutes);
router.use('/news', newsRoutes);
router.use('/testimonies', testimonyRoutes);
router.use('/event-types', eventTypeRoutes);
router.use('/events', eventRoutes);
router.use('/contact-forms', contactFormRoutes);
router.use('/contact-details', contactDetailsRoutes);
router.use('/news-letters', newsLetterRoutes);
router.use('/social-medias', socialMediaRoutes);
router.use('/faqs', faqRoutes);
router.use('/position-categories', positionCategoryRoutes);
router.use('/positions', positionRoutes);
router.use('/programmes', programmeRoutes);
router.use('/courses', courseRoutes);
router.use('/publication-categories', publicationCategoryRoutes);
router.use('/publications', publicationRoutes);
router.use('/special-enquiries', specialEnquiryRoutes);
router.use('/admission-details', admissionDetailsRoutes);
router.use('/admission-faqs', admissionFAQRoutes);
router.use('/staffs', staffRoutes);
router.use('/partnerships', partnershipRoutes);
router.use('/collaborations', collaborationRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/announcements', announcementRoutes);
router.use('/legals', legalRoutes);
router.use('/course-testimonials', courseTestimonyRoutes);
router.use('/checkouts', checkoutRoutes);
router.use('/account-details', accountDetailsRoutes);

module.exports = router;