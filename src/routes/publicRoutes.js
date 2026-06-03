const aboutUsController = require('../controller/aboutUsController');
const accountDetailsController = require('../controller/accountDetailsController');
const admissionDetailsController = require('../controller/admissionDetailsController');
const announcementController = require('../controller/announcementController');
const boardMemberController = require('../controller/boardMemberController');
const checkoutController = require('../controller/checkoutController');
const contactDetailsController = require('../controller/contactDetailsController');
const contactFormController = require('../controller/contactFormController');
const courseController = require('../controller/courseController');
const eventController = require('../controller/eventController');
const eventTypeController = require('../controller/eventTypeController');
const faqController = require('../controller/faqController');
const heroSectionController = require('../controller/heroSectionController');
const historyController = require('../controller/historyController');
const legalController = require('../controller/legalController');
const newsCategoryController = require('../controller/newsCategoryController');
const newsController = require('../controller/newsController');
const ourPartnerController = require('../controller/ourPartnerController');
const partnerCategoryController = require('../controller/partnerCategoryController');
const partnershipController = require('../controller/partnershipController');
const programmeController = require('../controller/programmeController');
const publicationCategoryController = require('../controller/publicationCategoryController');
const publicationController = require('../controller/publicationController');
const socialMediaController = require('../controller/socialMediaController');
const specialEnquiryController = require('../controller/specialEnquiryController');
const testimonyController = require('../controller/testimonyController');
const CreateCheckoutRequest = require('../request/createCheckoutRequest');
const CreateContactFormRequest = require('../request/createContactFormRequest');

const router = require('express').Router();

router.get('/hero-sections', heroSectionController.getSliders);

router.get('/about-us', aboutUsController.getAboutUs);
router.get('/about-us/:keyword', aboutUsController.show);
router.get('/histories', historyController.getHistory);
router.get('/board-members', boardMemberController.getBoardMembers);
router.get('/board-members/:id', boardMemberController.show);

router.get('/news', newsController.getNews);
router.get('/news/:id', newsController.show);
router.get('/news-category', newsCategoryController.getCategories)

router.get('/events', eventController.getEvents);
router.get('/events/:id', eventController.show);
router.get('/event-types', eventTypeController.getTypes);

router.get('/announcements', announcementController.getAnnouncements);

router.get('/partner-categories', partnerCategoryController.getCategories);
router.get('/our-partners', ourPartnerController.getPartners);

router.get('/admissions', admissionDetailsController.getAdmissionDetails);
router.get('/admissions/:keyword', admissionDetailsController.show);

router.get('/programmes', programmeController.getProgrammes)
router.get('/programmes/:id', programmeController.show);
router.get('/programmes/:id/courses', courseController.getCourseByProgramme);
router.get('/courses/:id', courseController.show);

router.get('/partnerships', partnershipController.getPartnership);

router.get('/research-categories', publicationCategoryController.getCategory);
router.get('/category/:id/research', publicationController.getResearch);
router.get('/research/:id', publicationController.show);

router.get('/contact-details', contactDetailsController.getContactDetails);
router.get('/special-enquiry', specialEnquiryController.getEnquiry);
router.post('/contact-us', CreateContactFormRequest, contactFormController.store);

router.get('/faqs', faqController.getFaqs);

router.get('/legals', legalController.getLegals);
router.get('/legals/:id', legalController.show);

router.get('/social-medias', socialMediaController.getSocials);

router.get('/account-details', accountDetailsController.getAccountDetails);
router.post('/checkouts', CreateCheckoutRequest, checkoutController.store);

router.get('/testimonies', testimonyController.getTestimonial);

module.exports = router;