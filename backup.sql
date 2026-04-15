-- MySQL dump 10.13  Distrib 8.0.42, for Linux (x86_64)
--
-- Host: 145.223.103.202    Database: rti
-- ------------------------------------------------------
-- Server version	8.0.42-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AboutUs`
--

DROP TABLE IF EXISTS `AboutUs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AboutUs` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `order_no` int DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  `keyword` varchar(255) NOT NULL,
  `image` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AboutUs`
--

LOCK TABLES `AboutUs` WRITE;
/*!40000 ALTER TABLE `AboutUs` DISABLE KEYS */;
INSERT INTO `AboutUs` VALUES ('9da378ae-4436-4fd1-9969-5010ab37f2c4','Accreditation & Affiliations','<section class=\"p-6 md:p-20 aos-init aos-animate\" data-aos=\"fade-in\" data-aos-delay=\"200\">\r\n<h2 class=\"font-bold text-3xl py-1\">We are Regional Trade Institute</h2>\r\n<p class=\"text-[16px] text-[#555555] py-2\"><span style=\"color: #555555;\">RTI is hosted at&nbsp;Cosmopolitan University, Abuja, and affiliated with:</span></p>\r\n<ul>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">University of West Bohemia, Czech Republic</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Charles University of Prague, Czech Republic</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Mendel University, Czech Republic</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Nigerian British University, Nigeria&nbsp;(Academic partner for medical and tech programs)</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Cosmopolitan University, Nigeria</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Lagos University, Nigeria</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">NCECC&nbsp;(Our gateway to EU-African trade networks)</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">European Union Mobility Networks&nbsp;(Erasmus+, Horizon Europe)</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Czech Ministry of Foreign Affairs &amp; CzechAid</span></li>\r\n</ul>\r\n</section>\r\n<section class=\"bg-[#F2F4F7] p-6 md:p-20\"></section>',4,1,'accreditation-and-affiliations',NULL,'2025-05-29 08:19:13','2025-05-29 09:28:16'),('d34c0212-2c22-465c-b8fc-8ef93b5fbb25','background','<h2 class=\"font-bold text-3xl py-1\">Our Background</h2>\r\n<p class=\"text-[16px] text-[#555555] py-2\"><span style=\"color: #555555;\">RTI was created in response to Africa&rsquo;s need for internationally connected, practice-oriented, and accessible education in global trade and policy. We collaborate closely with government institutions, development agencies, and both African and European universities.</span></p>\r\n<p class=\"text-[16px] text-[#555555] py-2\"><span style=\"color: #555555;\">Our approach is based on:</span></p>\r\n<ul>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Applied learning and real-world problem-solving</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Institutional partnerships with recognized EU, UK, and Nigerian universities</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Exchange-driven models of learning and economic diplomacy</span></li>\r\n</ul>\r\n<p class=\"text-[16px] text-[#555555] py-2\"><span style=\"color: #555555;\">Through our connection with the&nbsp;<strong>Nigerian-Central Europe Chamber of Commerce (NCECC)</strong>, we go beyond education&mdash;we serve as a channel for placement, mentorship, and international professional development.</span></p>',4,1,'background',NULL,'2025-05-29 08:25:57','2025-05-29 09:29:01'),('e207e73b-7183-4ac4-b5c4-938ca6ea3bff','Welcome Address','<h2 class=\"font-bold text-3xl py-1 aos-init aos-animate\" data-aos=\"fade-right\"><span style=\"font-size: 24pt;\">Welcome to the Regional Trade Institute (RTI)</span></h2>\r\n<p class=\"text-[#555555] text-[16px] mb-3\"><span style=\"color: #555555;\">We are Africa&rsquo;s premier hub for executive education, trade policy training, and international academic exchange. RTI empowers students, educators, and professionals with globally aligned programs, access to international universities and companies, and strategic pathways to career success across borders.</span></p>\r\n<h5 class=\"font-bold text-xl text-[#555555] py-2\"><span style=\"color: #555555; font-size: 18pt;\">Highlights of Our Signature Programs:</span></h5>\r\n<ul>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Certificate in Cross-Border Trade Law</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Student Exchange with EU &amp; US Universities</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Short Course in Climate Finance and Green Economy</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Healthcare Logistics &amp; Compliance Program</span></li>\r\n</ul>\r\n<h5 class=\"font-bold text-xl text-[#555555] py-4\"><span style=\"color: #555555; font-size: 18pt;\">Key Initiatives:</span></h5>\r\n<ul>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Placement-driven academic exchange programs</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Corporate training for African managers entering global markets</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\" style=\"color: #555555;\"><span style=\"color: #555555;\">Dual degree pathways for Nigerian students</span></li>\r\n</ul>',4,1,'welcome-address',NULL,'2025-05-29 08:25:03','2025-05-29 08:35:52'),('e72e505b-1fbd-4a62-b5ba-b33f14251e4f','Mission & Vision','<h2 class=\"font-bold text-3xl py-1 aos-init aos-animate\" data-aos=\"fade-right\">Our Mission</h2>\r\n<p class=\"text-[#555555] text-[16px] mb-3 aos-init aos-animate\" data-aos=\"fade-up\" data-aos-delay=\"100\"><span style=\"color: #555555;\">To empower Africa&rsquo;s present and future leaders through transformative education, cutting-edge research, and global collaboration in trade, law, sustainability, and innovation.</span></p>\r\n<h2 class=\"font-bold text-3xl py-1 mt-10 aos-init aos-animate\" data-aos=\"fade-right\">Our Vision</h2>\r\n<p class=\"text-[16px] text-[#555555] py-2 aos-init aos-animate\" data-aos=\"fade-left\" data-aos-delay=\"200\"><span style=\"color: #555555;\">Our vision is to become the most respected African institution for trade education and leadership, known for:</span></p>\r\n<ul>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center aos-init aos-animate\" style=\"color: #555555;\" data-aos=\"fade-up\" data-aos-delay=\"300\"><span style=\"color: #555555;\">Enabling seamless access to international academic programs</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center aos-init aos-animate\" style=\"color: #555555;\" data-aos=\"fade-up\" data-aos-delay=\"400\"><span style=\"color: #555555;\">Driving innovation in trade policy and entrepreneurship</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center aos-init aos-animate\" style=\"color: #555555;\" data-aos=\"fade-up\" data-aos-delay=\"500\"><span style=\"color: #555555;\">Building bridges between African institutions and global partners</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center aos-init aos-animate\" style=\"color: #555555;\" data-aos=\"fade-up\" data-aos-delay=\"600\"><span style=\"color: #555555;\">Facilitating direct student and faculty mobility for growth and exposure</span></li>\r\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center aos-init aos-animate\" style=\"color: #555555;\" data-aos=\"fade-up\" data-aos-delay=\"700\"><span style=\"color: #555555;\">Supporting companies and professionals with certified training and upskilling</span></li>\r\n</ul>',3,1,'mission-and-vision',NULL,'2025-05-29 08:16:27','2025-05-29 08:52:10');
/*!40000 ALTER TABLE `AboutUs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AdmissionDetails`
--

DROP TABLE IF EXISTS `AdmissionDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AdmissionDetails` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `keyword` varchar(255) DEFAULT NULL,
  `order_no` int DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AdmissionDetails`
--

LOCK TABLES `AdmissionDetails` WRITE;
/*!40000 ALTER TABLE `AdmissionDetails` DISABLE KEYS */;
INSERT INTO `AdmissionDetails` VALUES ('6288152a-8ee1-4439-870e-67f68a8afa84','Fees & Scholarships','<<h2 class=\"font-bold text-3xl py-1\">Fees &amp; Scholarships</h2>\n<ul>\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\">Vary per program; fee waiver available for top applicants</li>\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\">80% scholarships for female candidates and public sector educators</li>\n</ul>','fees-and-scholarships',1,1,'2025-05-29 14:27:19','2025-05-29 14:27:19'),('729e6f6d-7b05-4a69-abdb-cb8454271226','Eligibility Requirements','<h2 class=\"font-bold text-3xl py-1\">Eligibility Requirements</h2>\n<ul>\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\">Completed secondary education (students)</li>\n<li class=\"text-[#555555] text-[16px] py-1 flex items-center\">Professional experience (executive programs)</li>\n</ul>','eligibility-requirements',3,1,'2025-05-29 14:59:02','2025-05-29 14:59:02'),('cf62bee9-de59-41bc-a564-7397fecb91f8','How to Apply','<p>Follow these steps to apply:</p>\n<ol>\n<li>Fill out the online application form.</li>\n<li>Submit all required documents.</li>\n<li>Pay the application fee.</li>\n<li>Wait for the admission committee\'s decision.</li>\n</ol>','how-to-apply',1,1,'2025-04-30 19:07:38','2025-05-29 14:23:45');
/*!40000 ALTER TABLE `AdmissionDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AdmissionFAQs`
--

DROP TABLE IF EXISTS `AdmissionFAQs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AdmissionFAQs` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `question` text,
  `answer` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AdmissionFAQs`
--

LOCK TABLES `AdmissionFAQs` WRITE;
/*!40000 ALTER TABLE `AdmissionFAQs` DISABLE KEYS */;
INSERT INTO `AdmissionFAQs` VALUES ('bd9a7157-1851-470b-9526-45beb31362ff','What are the application deadlines?','The application deadlines vary by program. Please check the specific program page for details.','2025-05-19 11:06:17','2025-05-19 11:06:17');
/*!40000 ALTER TABLE `AdmissionFAQs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Announcements`
--

DROP TABLE IF EXISTS `Announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Announcements` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Announcements`
--

LOCK TABLES `Announcements` WRITE;
/*!40000 ALTER TABLE `Announcements` DISABLE KEYS */;
INSERT INTO `Announcements` VALUES ('4a2936fe-6ed8-4907-bc93-1070d783139c','Campus Wi-Fi Upgrade Scheduled','To enhance connectivity and internet speeds, the IT Services department will be upgrading the campus Wi-Fi infrastructure from June 5 to June 7. During this period, intermittent network outages are expected. Students and staff are advised to plan their online activities accordingly and report any persistent connectivity issues to the IT helpdesk.','campus-wi-fi-upgrade-scheduled','2025-05-28 15:34:12','2025-05-29 05:17:35'),('7c221aca-21c4-4983-be6d-92f3c551a1e8','Scholarship Applications Now Open','The Financial Aid Office is pleased to announce the opening of applications for the 2025 scholarship programs. Scholarships are available for undergraduate and postgraduate students based on academic merit and financial need. Interested students should complete the application form online and submit all required documents before the deadline on July 1st. Late submissions will not be accepted.','scholarship-applications-now-open','2025-05-28 15:34:47','2025-05-29 05:16:58'),('88429088-9a8d-4fec-9631-8142591be7e0','New Academic Calendar Released for 2025','The official academic calendar for 2025 has now been released. It includes important dates such as semester start and end dates, holidays, exam periods, and deadlines for course registration. Students should check the calendar carefully to plan their studies and submissions accordingly. The calendar is available on the university website and at the registrar\'s office.','new-academic-calendar-released-for-2025','2025-05-28 15:36:23','2025-05-29 05:16:18'),('9b012ee8-f0ec-4642-ba37-2b72cfc0b497','Guest Lecture on Artificial Intelligence','Dr. Jane Smith, a leading expert in artificial intelligence, will deliver a lecture on \'The Future of AI in Education\' on June 10 at 3 PM in the main auditorium. This lecture will cover current AI technologies transforming education and the ethical considerations involved. The event is open to all students and faculty members and will include a Q&A session.','guest-lecture-on-artificial-intelligence','2025-05-28 08:43:37','2025-05-29 05:18:24');
/*!40000 ALTER TABLE `Announcements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BoardMembers`
--

DROP TABLE IF EXISTS `BoardMembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BoardMembers` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `category_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `about` text,
  `image` varchar(255) DEFAULT NULL,
  `social_links` json DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BoardMembers`
--

LOCK TABLES `BoardMembers` WRITE;
/*!40000 ALTER TABLE `BoardMembers` DISABLE KEYS */;
INSERT INTO `BoardMembers` VALUES ('e874e78d-e0f2-4615-b444-fd6866c24d47','44b1e45b-0916-412d-840b-e66f4ebe16e7','Tomáš Tureček, BCL','Vice President – First Deputy (Czech Republic)','She is very active lately','board_members/cb695e1748451799979.jpg','{\"twitter\": \"https://linkedin.com/salimah\", \"facebook\": \"https://linkedin.com/salimah\", \"linkedin\": \"https://linkedin.com/salimah\"}','2025-05-18 22:16:12','2025-05-28 23:00:51'),('f2408d28-2004-465b-9835-b9d7ce7f851c','44b1e45b-0916-412d-840b-e66f4ebe16e7','Paschal Dozie Onyemaechi, Ph.D.','President & Chairman (Nigeria)','John Doe has been an integral part of the organization since its inception, bringing decades of leadership experience.','board_members/839ef01748451658502.jpg','{\"twitter\": \"https://twitter.com/johndoe\", \"facebook\": \"https://facebook.com/johndoe\", \"linkedin\": \"https://linkedin.com/in/johndoe\"}','2025-05-28 10:51:08','2025-05-28 17:02:05');
/*!40000 ALTER TABLE `BoardMembers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BoardMembersCategories`
--

DROP TABLE IF EXISTS `BoardMembersCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BoardMembersCategories` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BoardMembersCategories`
--

LOCK TABLES `BoardMembersCategories` WRITE;
/*!40000 ALTER TABLE `BoardMembersCategories` DISABLE KEYS */;
INSERT INTO `BoardMembersCategories` VALUES ('44b1e45b-0916-412d-840b-e66f4ebe16e7','Board of Trustees','who is responsiblewho is responsiblewho is responsiblewho is responsible','2025-05-15 17:37:43','2025-05-29 10:20:56');
/*!40000 ALTER TABLE `BoardMembersCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Collaborations`
--

DROP TABLE IF EXISTS `Collaborations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Collaborations` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Collaborations`
--

LOCK TABLES `Collaborations` WRITE;
/*!40000 ALTER TABLE `Collaborations` DISABLE KEYS */;
INSERT INTO `Collaborations` VALUES ('25148405-86fd-46cb-9bea-b5f04e508ca0','Hello There','Hi hope you are good?','2025-05-19 13:33:42','2025-05-24 01:16:12'),('d586e555-5cdb-408b-b475-64de31eef45a','Workspace Colab...','Can we use your workspace for collaboration?','2025-05-19 14:02:52','2025-05-29 00:54:22');
/*!40000 ALTER TABLE `Collaborations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ContactDetails`
--

DROP TABLE IF EXISTS `ContactDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ContactDetails` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `order_no` int DEFAULT NULL,
  `active` tinyint(1) DEFAULT '1',
  `keyword` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContactDetails`
--

LOCK TABLES `ContactDetails` WRITE;
/*!40000 ALTER TABLE `ContactDetails` DISABLE KEYS */;
INSERT INTO `ContactDetails` VALUES ('cbdfbae9-b3b9-47db-b727-784ec07163a3','Contact Us...','For inquiries, please reach out to us at our office located at 123 Main Street, Lagos. You can also call us at +234 800 123 4567 or email us at info@institution.com.',1,1,'contactdetails','2025-05-16 22:50:16','2025-05-27 22:20:32'),('f4567739-83f3-4668-95c0-8fcf4f486a9a','Lets see','Lets connect today',2,0,'lets-see-today','2025-05-16 23:05:00','2025-05-16 23:05:14');
/*!40000 ALTER TABLE `ContactDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ContactForms`
--

DROP TABLE IF EXISTS `ContactForms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ContactForms` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text,
  `communication_preference` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContactForms`
--

LOCK TABLES `ContactForms` WRITE;
/*!40000 ALTER TABLE `ContactForms` DISABLE KEYS */;
INSERT INTO `ContactForms` VALUES ('05e844cd-929c-4e31-9804-b698d5b85b82','Lekan','test@test.com','09088776655','Colab','Can we?','WhatsApp','2025-05-16 21:58:21','2025-05-16 21:58:21'),('5aba219f-308f-48b6-b216-cae365255b2a','John Doe','johndoe@example.com','+1234567890','Inquiry about services','I would like more information about your offerings.','email','2025-05-16 18:06:46','2025-05-16 18:06:46');
/*!40000 ALTER TABLE `ContactForms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CourseTestimonials`
--

DROP TABLE IF EXISTS `CourseTestimonials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CourseTestimonials` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `testimony` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CourseTestimonials`
--

LOCK TABLES `CourseTestimonials` WRITE;
/*!40000 ALTER TABLE `CourseTestimonials` DISABLE KEYS */;
/*!40000 ALTER TABLE `CourseTestimonials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CourseToStaffs`
--

DROP TABLE IF EXISTS `CourseToStaffs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CourseToStaffs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` varchar(255) DEFAULT NULL,
  `staff_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CourseToStaffs`
--

LOCK TABLES `CourseToStaffs` WRITE;
/*!40000 ALTER TABLE `CourseToStaffs` DISABLE KEYS */;
INSERT INTO `CourseToStaffs` VALUES (1,'7bf7f6c9-e9f7-4409-b47b-4080c2e15a84','02c68954-7ecc-4284-91b2-081107280cee','2025-05-03 15:05:03','2025-05-03 15:05:03'),(2,'18bbb0d2-02b8-44ed-89aa-258356c7cc2a','02c68954-7ecc-4284-91b2-081107280cee','2025-05-19 08:29:25','2025-05-19 08:29:25'),(3,'89406686-84e5-4588-a8b3-35e528a0911c','dc6b96ab-d0f0-47a1-be25-b227519e3bee','2025-05-19 21:27:29','2025-05-19 21:27:29'),(4,'dee5bd4f-d735-4068-9a3b-0169bed83e67','dc6b96ab-d0f0-47a1-be25-b227519e3bee','2025-05-24 00:16:31','2025-05-24 00:16:31'),(5,'dee5bd4f-d735-4068-9a3b-0169bed83e67','02c68954-7ecc-4284-91b2-081107280cee','2025-05-24 00:16:31','2025-05-24 00:16:31'),(6,'896306ad-e1aa-45ea-b298-0edf66a0d6ad','60853100-ab1f-4a25-b986-f84445e664e2','2025-05-25 19:30:43','2025-05-25 19:30:43'),(7,'896306ad-e1aa-45ea-b298-0edf66a0d6ad','dc6b96ab-d0f0-47a1-be25-b227519e3bee','2025-05-25 19:30:43','2025-05-25 19:30:43');
/*!40000 ALTER TABLE `CourseToStaffs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Courses`
--

DROP TABLE IF EXISTS `Courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Courses` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `programme_id` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `course_code` varchar(255) DEFAULT NULL,
  `number_of_ects` varchar(255) DEFAULT NULL,
  `mandatory` tinyint(1) DEFAULT NULL,
  `date` json DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `fee` varchar(255) DEFAULT NULL,
  `learning_outcomes` text,
  `assessment` text,
  `language` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `status` enum('upcoming','latest','popular') DEFAULT 'upcoming',
  `target_audience` text,
  `course_chair_bio` text,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Courses`
--

LOCK TABLES `Courses` WRITE;
/*!40000 ALTER TABLE `Courses` DISABLE KEYS */;
INSERT INTO `Courses` VALUES ('157ae0a7-14cf-4b29-a651-1a32725e3ce5','Freelancing','freelancing','English','996b1279-8c5d-4dfc-8e11-1a3011bf5cb1','course/77178e1748469810735.png','11','1',1,'{\"end-date\": \"2025-06-07T00:00:00.000Z\", \"start-date\": \"2025-05-30T00:00:00.000Z\"}','1','111','English','English','English','2025-05-28 22:03:30','2025-05-28 22:03:30','upcoming','English','English','English'),('18bbb0d2-02b8-44ed-89aa-258356c7cc2a','Freelancing test updated....','freelancing-test-updated','Intro to freelancing updated','49232961-5342-42ee-b049-04dc39a13d01','course/90bf791748120993818.jpg','111','5',1,'{\"end-date\": \"2025-08-04T00:00:00.000Z\", \"start-date\": \"2025-06-02T00:00:00.000Z\"}','3weeks','25000','Intro to freelancing','Intro to freelancing updated','Hausa','2025-05-19 08:29:25','2025-05-28 06:41:06','upcoming',NULL,NULL,NULL),('326c95cf-9ba0-4137-b1a8-564d24cf2ec1','Sample Course Title Update','sample-course-title-update','A detailed description of the course content and objectives.','6419314d-4bd8-466a-907d-7f340a525c70','course/3596d11748538904281.jpg','CS101','5',1,'{\"end-date\": \"2025-06-30T00:00:00.000Z\", \"start-date\": \"2025-04-23T00:00:00.000Z\"}','12 weeks','500','Students will learn fundamental programming concepts.','Regular quizzes, assignments, and a final project.','English','2025-05-29 17:15:04','2025-05-29 17:15:04','upcoming','everyone','Biography','Online'),('3b4b89d1-b981-4895-a41e-8f581fc6bcc6','Sample Course Title Update','sample-course-title-update','A detailed description of the course content and objectives.','6419314d-4bd8-466a-907d-7f340a525c70','course/1cf5e11748539351717.jpg','CS101','5',1,'{\"end-date\": \"2025-06-30T00:00:00.000Z\", \"start-date\": \"2025-04-23T00:00:00.000Z\"}','12 weeks','500','Students will learn fundamental programming concepts.','Regular quizzes, assignments, and a final project.','English','2025-05-29 17:22:32','2025-05-29 17:22:32','upcoming','everyone','Biography','Online'),('449434d5-0799-467c-9e0d-ce71306bd3a0','Sample Course Title Update','sample-course-title-update','A detailed description of the course content and objectives.','6419314d-4bd8-466a-907d-7f340a525c70','course/c34acc1748540156635.jpg','CS101','5',1,'{\"end-date\": \"2025-06-30T00:00:00.000Z\", \"start-date\": \"2025-04-23T00:00:00.000Z\"}','12 weeks','500','Students will learn fundamental programming concepts.','Regular quizzes, assignments, and a final project.','English','2025-05-29 17:35:57','2025-05-29 17:35:57','upcoming','everyone','Biography','Online'),('635360c7-e428-4794-bc2f-f94f28bbdcc0','free','free','lagos','8120e644-7715-40a3-a99d-2f271b84f96e','course/0a5e9d1748471353151.png','11','1',1,'{\"end-date\": \"2025-06-07T00:00:00.000Z\", \"start-date\": \"2025-05-29T00:00:00.000Z\"}','1','111','lagos','lagos','hause','2025-05-28 22:29:13','2025-05-28 22:29:13','latest','lagos','lagos','lagos'),('7bf7f6c9-e9f7-4409-b47b-4080c2e15a84','Sample Course Title update','sample-course-title-update','A detailed description of the course content and objectives. update','c5c3eb5f-c5b9-489b-bd5e-ed83d20ba4f1','course/a12ad61746284703895.jpeg','CS101','5',1,'{\"end-date\": \"2025-06-30T00:00:00.000Z\", \"start-date\": \"2025-04-23T00:00:00.000Z\"}','12 weeks','500','Students will learn fundamental programming concepts.','Regular quizzes, assignments, and a final project.','English','2025-05-03 15:05:03','2025-05-28 06:40:51','upcoming',NULL,NULL,NULL),('7c44711f-2a50-43da-be93-6a4c289df22c','Sample Course Title Update','sample-course-title-update','A detailed description of the course content and objectives.','6419314d-4bd8-466a-907d-7f340a525c70','course/112fde1748539793377.jpg','CS101','5',1,'{\"end-date\": \"2025-06-30T00:00:00.000Z\", \"start-date\": \"2025-04-23T00:00:00.000Z\"}','12 weeks','500','Students will learn fundamental programming concepts.','Regular quizzes, assignments, and a final project.','English','2025-05-29 17:29:54','2025-05-29 17:29:54','upcoming','everyone','Biography','Online'),('82f7da2f-2b0f-4be1-925d-df22a9a2d149','Sample Course Title Update','sample-course-title-update','A detailed description of the course content and objectives.','6419314d-4bd8-466a-907d-7f340a525c70','course/44ec721748539544426.jpg','CS101','5',1,'{\"end-date\": \"2025-06-30T00:00:00.000Z\", \"start-date\": \"2025-04-23T00:00:00.000Z\"}','12 weeks','500','Students will learn fundamental programming concepts.','Regular quizzes, assignments, and a final project.','English','2025-05-29 17:25:44','2025-05-29 17:25:44','upcoming','everyone','Biography','Online'),('89406686-84e5-4588-a8b3-35e528a0911c','Data Analysis Course','data-analysis-course','Nice course','3bef1f33-ba2e-476c-b593-57a60116319d','course/6e2aa71747690049004.png','123','34',1,'{\"end-date\": \"2025-05-24T00:00:00.000Z\", \"start-date\": \"2025-05-20T00:00:00.000Z\"}','4hours','23000','Nice course','Nice course','English','2025-05-19 21:27:29','2025-05-24 21:09:20','upcoming',NULL,NULL,NULL),('896306ad-e1aa-45ea-b298-0edf66a0d6ad','Maxime autem similiq','maxime-autem-similiq','Eius qui incididunt ','49232961-5342-42ee-b049-04dc39a13d01','course/603c8f1748201442977.jpeg','Adipisicing nisi est','Iste dolore aliqua ',0,'{\"end-date\": \"1980-03-04T00:00:00.000Z\", \"start-date\": \"1992-04-11T00:00:00.000Z\"}','Itaque quidem culpa','Libero occaecat duci','Sed minim laborum ni','Modi amet adipisici','Eos nisi doloremque ','2025-05-25 19:30:42','2025-05-25 19:30:42','upcoming',NULL,NULL,NULL),('a5c27ec1-5c89-4fe2-b9f0-8de1ec9004d7','Sample Course Title Update','sample-course-title-update','A detailed description of the course content and objectives.','6419314d-4bd8-466a-907d-7f340a525c70','course/880a381748540124284.jpg','CS101','5',1,'{\"end-date\": \"2025-06-30T00:00:00.000Z\", \"start-date\": \"2025-04-23T00:00:00.000Z\"}','12 weeks','500','Students will learn fundamental programming concepts.','Regular quizzes, assignments, and a final project.','English','2025-05-29 17:35:25','2025-05-29 17:35:25','upcoming','everyone','Biography','Online'),('dee5bd4f-d735-4068-9a3b-0169bed83e67','test','test','test','6419314d-4bd8-466a-907d-7f340a525c70','course/bdc2151748045791611.jpg','test','3',0,'{\"end-date\": \"2025-05-24T00:00:00.000Z\", \"start-date\": \"2025-05-02T00:00:00.000Z\"}','test','test','test','test','test','2025-05-24 00:16:31','2025-05-24 00:16:31','upcoming',NULL,NULL,NULL),('e582b648-dd4d-43c5-84e7-705c9d35ab55','Sample Course Title Update','sample-course-title-update','A detailed description of the course content and objectives.','c0475d99-29ef-4f7b-9b80-17bafdf3cbda','course/b915a81748536341439.jpg','CS101','5',1,'{\"end-date\": \"2025-06-30T00:00:00.000Z\", \"start-date\": \"2025-04-23T00:00:00.000Z\"}','12 weeks','500','Students will learn fundamental programming concepts.','Regular quizzes, assignments, and a final project.','English','2025-05-29 16:32:21','2025-05-29 16:32:21','upcoming','everyone','Biography','Online'),('e9a41440-ce3b-4020-a19e-01f31739c02b','Trade Facilitation & Customs Documentation','trade-facilitation-and-customs-documentation','Africa’s trade environment is rapidly evolving, with initiatives like the AfCFTA and increasing intra-African collaboration offering new opportunities for economic transformation. This course walks participants through the basic principles of trade, the roles of various regional bodies (e.g., ECOWAS, SADC, EAC), and how they contribute to Africa’s broader trade goals. Whether you’re a policy actor, entrepreneur, development worker, or student, this course provides a solid base to understand and participate in Africa’s trade systems.','6419314d-4bd8-466a-907d-7f340a525c70','course/4629b31748531851493.png','TR-235','3',1,'{\"end-date\": \"2025-06-08T00:00:00.000Z\", \"start-date\": \"2025-05-30T00:00:00.000Z\"}','2 Months','50000','Explain the structure of African trade systems and key players.\r\nCompare the different regional economic communities (RECs) and their impact on trade.\r\nDescribe how trade policies affect development and integration.\r\nAnalyze the objectives and structure of the African Continental Free Trade Area (AfCFTA).\r\nRecognize the importance of trade in promoting inclusive and sustainable development in Africa.','Knowledge Checks/Quizzes: Multiple-choice and short-answer questions.\r\nMini Case Study Review: Analyze a real-world trade scenario within Africa.\r\nParticipation: Contributions in group discussions or forums.\r\nFinal Reflection: Write-up or video summarizing key takeaways.','EN','2025-05-29 15:17:31','2025-05-29 15:17:31','popular','Everyone ','Africa’s trade environment is rapidly evolving, with initiatives like the AfCFTA and increasing intra-African collaboration offering new opportunities for economic transformation. This course walks participants through the basic principles of trade, the roles of various regional bodies (e.g., ECOWAS, SADC, EAC), and how they contribute to Africa’s broader trade goals. Whether you’re a policy actor, entrepreneur, development worker, or student, this course provides a solid base to understand and participate in Africa’s trade systems.','Virtual');
/*!40000 ALTER TABLE `Courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EventTypes`
--

DROP TABLE IF EXISTS `EventTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EventTypes` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EventTypes`
--

LOCK TABLES `EventTypes` WRITE;
/*!40000 ALTER TABLE `EventTypes` DISABLE KEYS */;
INSERT INTO `EventTypes` VALUES ('1a047c97-e65f-4bb9-b1e3-166ca5bcaa31','tech expo','tech expo','2025-05-27 21:18:46','2025-05-27 21:18:46'),('4f0d7145-aa22-47ce-bd4d-3c530fd655dc','Standard Event...','Standard EventStandard EventStandard EventStandard EventStandard EventStandard EventStandard EventStandard EventStandard Event','2025-05-16 12:13:34','2025-05-27 21:08:32'),('f41f033b-2261-46fe-affd-9e97d04256cb','Premium-Gold Event','Premium EventPremium EventPremium EventPremium EventPremium EventPremium Event','2025-05-16 12:12:19','2025-05-18 19:04:35');
/*!40000 ALTER TABLE `EventTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Events`
--

DROP TABLE IF EXISTS `Events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Events` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `event_type_id` varchar(255) DEFAULT NULL,
  `topic` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Events`
--

LOCK TABLES `Events` WRITE;
/*!40000 ALTER TABLE `Events` DISABLE KEYS */;
INSERT INTO `Events` VALUES ('06cd7d21-d17d-436f-9ae9-238a774ca458','Board Meeting','2025-05-24 00:00:00','Eko Atlantic ','f41f033b-2261-46fe-affd-9e97d04256cb','Eko AtlanticEko AtlanticEko AtlanticEko AtlanticEko Atlantic','<p>Eko AtlanticEko AtlanticEko AtlanticEko AtlanticEko Atlantic</p>','event/fa0ff11747417261677.jpg','board-meeting','2025-05-16 17:41:01','2025-05-24 00:27:03'),('52cb4760-43d1-4575-99c5-a4848a8de0c1','Nee test','2025-05-31 00:00:00','Iyanapaja, Lagos state','1a047c97-e65f-4bb9-b1e3-166ca5bcaa31','Eko AtlanticEko AtlanticEko AtlanticEko AtlanticEko Atlantic','<p>Eko AtlanticEko AtlanticEko AtlanticEko AtlanticEko Atlantic</p>','event/4d0d021748414585300.png','nee-test','2025-05-28 06:43:05','2025-05-28 06:43:05'),('81457cfb-181e-46b2-bbab-a1e5d0b28f5f','Quiz Competition','2025-05-16 00:00:00','zoom','4f0d7145-aa22-47ce-bd4d-3c530fd655dc','This is a great experience','This is a great experience','event/abe3ed1747414702820.png','quiz-competition','2025-05-16 16:58:22','2025-05-19 22:28:37');
/*!40000 ALTER TABLE `Events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FAQs`
--

DROP TABLE IF EXISTS `FAQs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FAQs` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `question` text,
  `answer` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FAQs`
--

LOCK TABLES `FAQs` WRITE;
/*!40000 ALTER TABLE `FAQs` DISABLE KEYS */;
INSERT INTO `FAQs` VALUES ('c92656a2-7fa5-4f16-86bd-26480b8cf2bd','What is the policy Update?','You can return any unused item within 30 days of purchase for a full refund Update.','2025-05-17 00:21:49','2025-05-19 11:40:56');
/*!40000 ALTER TABLE `FAQs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HeroSections`
--

DROP TABLE IF EXISTS `HeroSections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HeroSections` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` text,
  `caption` text,
  `cta1_title` varchar(255) DEFAULT NULL,
  `cta1_link` varchar(255) DEFAULT NULL,
  `cta2_title` varchar(255) DEFAULT NULL,
  `cta2_link` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HeroSections`
--

LOCK TABLES `HeroSections` WRITE;
/*!40000 ALTER TABLE `HeroSections` DISABLE KEYS */;
INSERT INTO `HeroSections` VALUES ('2d18f09e-2794-4346-9e9e-84616f14008c','Driving Cross-Continental Prosperity...','NCECC is the first chamber representing a regional European bloc in partnership with Nigeria, offering unmatched access to business and policy environments on both continents.','Become a member','https://become-a-member','Maxime sit voluptate','https://www.goda.org.au','hero/61283a1748450786207.jpg','2025-05-22 14:07:05','2025-05-29 00:45:23'),('4b5de5aa-31b8-449a-ae68-8b57a8a1354f','Empowering Africa Through Trade, Growth & Development','We foster innovation, research, and training to drive Africa\'s trade agenda','Join us today','https://rtl-website-ui.vercel.app/','Partner with us','https://rtl-website-ui.vercel.app/','hero/e7b35c1748450838089.jpg','2025-05-23 18:09:57','2025-05-28 21:45:39'),('ad9829fa-2687-4eba-8654-5f1fdac0fe85','Empowering Africa Through Trade, Growth & Development','We foster innovation, research, and training to drive Africa\'s trade agenda','Partner with us','https://new.com','Explore Programmes','https://new.com','hero/2168da1748023896744.jpg','2025-05-14 23:02:55','2025-05-28 21:45:11');
/*!40000 ALTER TABLE `HeroSections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Histories`
--

DROP TABLE IF EXISTS `Histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Histories` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `date` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Histories`
--

LOCK TABLES `Histories` WRITE;
/*!40000 ALTER TABLE `Histories` DISABLE KEYS */;
INSERT INTO `Histories` VALUES ('b976b196-839c-4f9c-abb0-907364eb0bbc','Luxembourg launches Luxembourg Hydrogen Valley','Luxembourg launches Luxembourg Hydrogen Valley (LuxHyVal) to produce green hydrogen in Bascharage. Former Max Planck Institute Luxembourg transitions into the University as the Luxembourg Centre for European Law (LCEL). Launch of new Master in Digital and Public History','2024-01-29 00:00:00','history/b1dff41748510191508.png','2025-05-29 09:16:31','2025-05-29 09:17:14'),('d9171ce4-d392-4e3d-92b7-44ccf5bc2b25','Former Max Planck Institute Luxembourg ','Former Max Planck Institute Luxembourg transitions into the University as the Luxembourg Centre for European Law (LCEL). Launch of new Master in Digital and Public History','2019-12-30 00:00:00','history/82d45c1748510270148.png','2025-05-29 09:17:50','2025-05-29 09:17:50'),('ffefcee4-380f-44a4-902b-30f381df9d6d','Former Max Planck Institute Luxembourg transitions','The project involves 17 partners from 7 countries, coordinated by the University. Former Max Planck Institute Luxembourg transitions into the University as the Luxembourg Centre for European Law (LCEL). ','2015-12-29 00:00:00','history/2639351748510127283.png','2025-05-15 10:42:13','2025-05-29 09:17:03');
/*!40000 ALTER TABLE `Histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Legals`
--

DROP TABLE IF EXISTS `Legals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Legals` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `keyword` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Legals`
--

LOCK TABLES `Legals` WRITE;
/*!40000 ALTER TABLE `Legals` DISABLE KEYS */;
/*!40000 ALTER TABLE `Legals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `News`
--

DROP TABLE IF EXISTS `News`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `News` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `content` text,
  `category_id` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `News`
--

LOCK TABLES `News` WRITE;
/*!40000 ALTER TABLE `News` DISABLE KEYS */;
INSERT INTO `News` VALUES ('1ad69d94-b916-4854-9dde-fc387052fc2e','RTI Launches New Trade Compliance Course','rti-launches-new-trade-compliance-course','<p>The Regulatory Trade Institute (RTI) has introduced a new <strong>Professional Diploma in International Trade Compliance</strong> to help professionals upskill for the evolving global trade environment.</p>','62da562f-9fd2-44b3-abcc-b2745912a53c','news/e7ab621748467393934.png','2025-05-24 21:26:12','2025-05-28 21:27:20'),('53ee4dc1-a1e3-4058-a5e5-176f84acba2f','New Digital Learning Tools Revolutionize Classrooms','new-digital-learning-tools-revolutionize-classrooms','<div>\r\n<div>Schools adopt innovative digital tools to enhance student engagement and learning outcomes. <span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">Schools adopt innovative digital tools to enhance student engagement and learning outcomes. </span><span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">Schools adopt innovative digital tools to enhance student engagement and learning outcomes.</span></div>\r\n<div>&nbsp;</div>\r\n</div>\r\n<div>Recent advancements in edtech have led to a wave of digital learning tools that provide personalized lessons, real-time feedback, and immersive experiences in classrooms globally. Recent advancements in edtech <em>have led to a wave of digital learning tools that provide personalized lessons, real-time feedback, and immersive experiences</em> in classrooms globally.</div>','e35b525c-6aeb-4987-915b-c2c0c5edfd69','news/c646521748495120470.jpg','2025-05-29 05:05:20','2025-05-29 05:05:20'),('74c9b959-0e5e-42c7-97c4-63ce3c3b3350','Government Announces New Education Reform Plans','government-announces-new-education-reform-plans','<div>The government unveiled a comprehensive education reform package focused on modernizing curricula, investing in teacher training, and expanding access to digital learning resources across schools.</div>\r\n<div>&nbsp;</div>\r\n<div>The government unveiled a comprehensive education reform package focused on modernizing curricula, investing in teacher training, and expanding access to digital learning resources across schools. <span style=\"font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\">The government unveiled a comprehensive education reform package focused on modernizing curricula, investing in teacher training, and expanding access to digital learning resources across schools.</span></div>','62da562f-9fd2-44b3-abcc-b2745912a53c','news/5831641748495034882.png','2025-05-29 05:03:54','2025-05-29 05:03:54'),('77e3afb3-b7ed-477b-b4ce-cea8574c777c','Professional Diploma in International Trade','professional-diploma-in-international-trade',' It\'s aimed at professionals working in or enter','62da562f-9fd2-44b3-abcc-b2745912a53c','news/ae250c1748450051493.jpg','2025-05-24 21:29:54','2025-05-28 17:02:36'),('f1fddee5-dd35-4e39-b7a7-7746a1d75896','Upcoming Webinar on Global Supply Chain Trends','upcoming-webinar-on-global-supply-chain-trends','<p>Join RTI experts for a free webinar on the <em>emerging trends in supply chain and customs regulation</em> around the world. Registration is open to all professionals.</p>','383846a1-f015-4ace-815d-29f8655611cf','news/819fb31748451447270.png','2025-05-28 16:57:27','2025-05-28 21:26:48');
/*!40000 ALTER TABLE `News` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NewsCategories`
--

DROP TABLE IF EXISTS `NewsCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NewsCategories` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NewsCategories`
--

LOCK TABLES `NewsCategories` WRITE;
/*!40000 ALTER TABLE `NewsCategories` DISABLE KEYS */;
INSERT INTO `NewsCategories` VALUES ('33170d02-efdd-4c30-94bd-a195f880a63c','Football....','football','happenings on te pitch','2025-05-24 21:36:46','2025-05-27 23:08:31'),('383846a1-f015-4ace-815d-29f8655611cf','Politics Today','politics-today','Politics News','2025-05-15 19:47:54','2025-05-24 21:36:15'),('62da562f-9fd2-44b3-abcc-b2745912a53c','Local','local','No description provided','2025-05-15 19:47:04','2025-05-18 19:05:40'),('8c92c3f6-bfb7-4c31-a617-f5db058f31db','gym','gym','guym sakjjvwn','2025-05-27 23:12:28','2025-05-27 23:12:28'),('e35b525c-6aeb-4987-915b-c2c0c5edfd69','International','international','International','2025-05-15 19:48:44','2025-05-15 22:04:24'),('fd718307-d71e-4875-be0d-681d97659740','Kayefia','kayefia','Kayefia','2025-05-27 23:16:57','2025-05-27 23:16:57');
/*!40000 ALTER TABLE `NewsCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NewsLetters`
--

DROP TABLE IF EXISTS `NewsLetters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NewsLetters` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NewsLetters`
--

LOCK TABLES `NewsLetters` WRITE;
/*!40000 ALTER TABLE `NewsLetters` DISABLE KEYS */;
INSERT INTO `NewsLetters` VALUES ('5dda6f3c-f7fa-4639-be49-27f592630c22','Test 1','test1@gmail.com','2025-05-24 23:09:19','2025-05-24 23:09:19'),('647b9eed-ad4a-4a14-9ffc-2e03b5ff4149','test3','test3@gmail.com','2025-05-24 23:09:53','2025-05-24 23:09:53'),('9b28345d-866e-4718-a58b-48e9cb60c555','test2','test2@test.com','2025-05-24 23:09:36','2025-05-24 23:09:36'),('a172ec5b-fbfa-4eeb-84cb-220ba1a785de','Test','test@test.com','2025-05-24 23:09:01','2025-05-24 23:09:01'),('ab886440-d2cf-491d-b69c-e976d082aa60','Lateef Olalekan','olaokunolalekan@gmail.com','2025-05-16 23:39:28','2025-05-16 23:39:28'),('fe7e57f5-596d-4796-abc5-eb27e4198983','test6','test6@test.com','2025-05-24 23:10:08','2025-05-24 23:10:08');
/*!40000 ALTER TABLE `NewsLetters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OurPartners`
--

DROP TABLE IF EXISTS `OurPartners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OurPartners` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OurPartners`
--

LOCK TABLES `OurPartners` WRITE;
/*!40000 ALTER TABLE `OurPartners` DISABLE KEYS */;
INSERT INTO `OurPartners` VALUES ('1734eea4-98eb-4ce1-b3b1-8d6bcd443da1','test','our_partner/17eaf71748451342913.jpg','2025-05-24 00:32:28','2025-05-28 16:55:42'),('62cf0359-6dbb-42ab-b0f8-8086af511253','EU  Africa','our_partner/511b011748451488957.jpg','2025-05-28 16:58:08','2025-05-28 16:58:08'),('775a882d-a1c3-4201-a1de-d8c9c69e1e72','chinese','our_partner/9c32811748451587598.jpg','2025-05-28 16:59:47','2025-05-28 16:59:47'),('a8e4c0de-d19d-4da8-bc0f-127fbd5f1564','Equinox Gate','our_partner/e46e661748451365963.jpg','2025-05-15 19:32:11','2025-05-28 16:56:05'),('b91c1447-15b0-45c7-830a-4a098b08e5c3','MIT','our_partner/b6e1631748451449720.jpg','2025-05-28 16:57:29','2025-05-28 16:57:29'),('ca9d5fa5-685d-44f2-ad62-5e190271746d','Lagos Governement','our_partner/65ad571748451417618.jpg','2025-05-28 16:56:57','2025-05-28 16:56:57'),('e01961f5-0168-44ec-8e6f-2764a67c2f3b','Stecs Coy','our_partner/7d10531748451376121.jpg','2025-05-15 18:33:00','2025-05-28 16:56:16'),('f37fe8e9-717d-433f-8543-aed940e824fe','Alternative Bank','our_partner/0977fd1748451386669.jpg','2025-05-15 18:34:07','2025-05-28 16:56:26');
/*!40000 ALTER TABLE `OurPartners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PartnershipImages`
--

DROP TABLE IF EXISTS `PartnershipImages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PartnershipImages` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `partnership_id` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PartnershipImages`
--

LOCK TABLES `PartnershipImages` WRITE;
/*!40000 ALTER TABLE `PartnershipImages` DISABLE KEYS */;
INSERT INTO `PartnershipImages` VALUES ('702da9fb-d0fb-4f80-89aa-d8cdd8c85cf3','0b01d799-8f1a-4930-9dc3-4b42f40a7aba','partnership/d249221747659192367.jpg','2025-05-19 12:53:12','2025-05-19 12:53:12'),('ac4d8f0a-6cf2-4ff4-bc17-3e061f386ab3','c600f08d-1feb-4090-9218-e7a0aa1a8dad','partnership/90f4521747655509815.jpg','2025-05-19 11:51:49','2025-05-19 11:51:49');
/*!40000 ALTER TABLE `PartnershipImages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Partnerships`
--

DROP TABLE IF EXISTS `Partnerships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Partnerships` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Partnerships`
--

LOCK TABLES `Partnerships` WRITE;
/*!40000 ALTER TABLE `Partnerships` DISABLE KEYS */;
INSERT INTO `Partnerships` VALUES ('0b01d799-8f1a-4930-9dc3-4b42f40a7aba','Fouani','Parnership with fouani co','2025-05-19 12:53:12','2025-05-29 00:53:58'),('c600f08d-1feb-4090-9218-e7a0aa1a8dad','Stecs Co','The government has announced a major policy shift that will impact millions across the country. This change, effective immediately, aims to address longstanding economic challenges and foster growth in key sectors.','2025-05-19 11:51:49','2025-05-19 12:28:14');
/*!40000 ALTER TABLE `Partnerships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PositionCategories`
--

DROP TABLE IF EXISTS `PositionCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PositionCategories` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PositionCategories`
--

LOCK TABLES `PositionCategories` WRITE;
/*!40000 ALTER TABLE `PositionCategories` DISABLE KEYS */;
INSERT INTO `PositionCategories` VALUES ('58e4292d-b65f-465d-b2c8-420d80497237','Golang Engineer','Go lang Engineer','2025-05-27 22:45:57','2025-05-27 22:45:57'),('721f6a35-6c56-4bdf-9e36-42d246db03fa','Fulltime position','Internship position','2025-05-17 05:45:46','2025-05-18 18:52:11'),('990a5b54-bac9-4a11-bbd0-6d48f57885ae','Maintenance Manager','manage and maintain','2025-05-17 06:05:43','2025-05-17 06:05:43');
/*!40000 ALTER TABLE `PositionCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Positions`
--

DROP TABLE IF EXISTS `Positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Positions` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `requirements` text,
  `location` text,
  `job_type` varchar(255) DEFAULT NULL,
  `position_category_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Positions`
--

LOCK TABLES `Positions` WRITE;
/*!40000 ALTER TABLE `Positions` DISABLE KEYS */;
INSERT INTO `Positions` VALUES ('7e984966-32c3-4097-82a5-105287e57523','Software Developer','software-developer','Responsible for designing, developing, and maintaining web applications.','Bachelor\'s degree in Computer Science or a related field, proficiency in JavaScript and PHP, 2+ years of experience in software development. test','Lagos, Nigeria','Part-time','721f6a35-6c56-4bdf-9e36-42d246db03fa','2025-05-17 06:10:02','2025-05-24 01:05:13'),('c69bcf2b-2fbc-4442-bc03-2be7098b245f','HVAC Technician','hvac-technician','good knowledge of VRV','good knowledge of VRV','Lagos','Full-time','721f6a35-6c56-4bdf-9e36-42d246db03fa','2025-05-17 20:04:13','2025-05-17 20:04:13');
/*!40000 ALTER TABLE `Positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Programmes`
--

DROP TABLE IF EXISTS `Programmes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Programmes` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Programmes`
--

LOCK TABLES `Programmes` WRITE;
/*!40000 ALTER TABLE `Programmes` DISABLE KEYS */;
INSERT INTO `Programmes` VALUES ('4f15f8f1-6b90-400e-b9d2-009dcca7b97f','Executive Trainings','executive-trainings','Executive Trainings','programme/9a05821748531501659.png','2025-05-29 15:11:41','2025-05-29 15:11:41'),('6419314d-4bd8-466a-907d-7f340a525c70','Trade-Related Short Courses','trade-related-short-courses','A scintillating programme','programme/dfd5131747579912958.png','2025-05-18 14:51:52','2025-05-29 15:11:07'),('c0475d99-29ef-4f7b-9b80-17bafdf3cbda','Certificate & Diploma Programs','certificate-and-diploma-programs','coming togehter','programme/040e0c1747689162029.jpg','2025-05-19 21:12:42','2025-05-29 15:11:23');
/*!40000 ALTER TABLE `Programmes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PublicationCategories`
--

DROP TABLE IF EXISTS `PublicationCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PublicationCategories` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` enum('category','type') DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PublicationCategories`
--

LOCK TABLES `PublicationCategories` WRITE;
/*!40000 ALTER TABLE `PublicationCategories` DISABLE KEYS */;
INSERT INTO `PublicationCategories` VALUES ('17776dcd-d0d6-42e7-90fd-b3af2cfbd062','Research Work....','type','research-work','Critical research work','2025-05-19 08:59:33','2025-05-27 21:51:07'),('421a6198-5b35-4c2d-80b8-8f18d0c0134a','Kayefi','type','kayefi','Kayefia','2025-05-27 23:20:13','2025-05-27 23:20:13'),('4a0dda71-c91a-49fa-9358-9a0868476666','Livestock','type','livestock','livestock','2025-05-28 07:29:07','2025-05-28 07:29:07'),('80240490-e6bb-4671-8daa-78df43e660a2','Kayefia','type','kayefia','Kayefia','2025-05-27 23:19:06','2025-05-27 23:19:06'),('884fa1b8-f6ea-492a-bd96-d037f9e29eaa','content...','type','content','content','2025-05-27 23:21:05','2025-05-27 23:22:05'),('c882b842-a6e2-4c54-b1b3-9acf8c9729fd','Publication 1','category','publication-1',NULL,'2025-05-29 17:21:06','2025-05-29 17:21:06');
/*!40000 ALTER TABLE `PublicationCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Publications`
--

DROP TABLE IF EXISTS `Publications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Publications` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text,
  `file` varchar(255) DEFAULT NULL,
  `category_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Publications`
--

LOCK TABLES `Publications` WRITE;
/*!40000 ALTER TABLE `Publications` DISABLE KEYS */;
INSERT INTO `Publications` VALUES ('8f6e9ba9-61d5-4806-92d8-9b5deef73f3a','Excellence of Reading','excellence-of-reading','publication/fdce001747646710983.png','<p>The government has announced a major policy shift that will impact millions across the country. This change, effective immediately, aims to address longstanding economic challenges and foster growth in key sectors.</p>','publication/cdb95f1747646710983.pdf','17776dcd-d0d6-42e7-90fd-b3af2cfbd062','2025-05-19 09:25:10','2025-05-27 22:04:43'),('bb6fbce4-abe3-44fa-9d3d-376d2241e342','HeadScarve','headscarve','publication/6e19de1748127036496.jpg','<p>The pretty head scarve</p>','publication/0aecea1748127036497.pdf','17776dcd-d0d6-42e7-90fd-b3af2cfbd062','2025-05-24 22:50:36','2025-05-24 22:50:36');
/*!40000 ALTER TABLE `Publications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20250420164534-create-hero-section.js'),('20250421044914-create-about-us.js'),('20250421064340-create-history.js'),('20250421074312-create-board-members-category.js'),('20250421074550-create-board-member.js'),('20250421145428-create-our-partner.js'),('20250421160953-create-news-category.js'),('20250421161119-create-news.js'),('20250421174036-create-testimonial.js'),('20250422081753-create-event-type.js'),('20250422082000-create-event.js'),('20250422103156-create-contact-form.js'),('20250422103309-create-contact-details.js'),('20250422113057-create-social-media.js'),('20250422113128-create-news-letter.js'),('20250422133257-create-faq.js'),('20250422142547-create-position-category.js'),('20250422142733-create-position.js'),('20250423060104-create-programme.js'),('20250423062328-create-course.js'),('20250423121430-create-publication-category.js'),('20250423121902-create-publication.js'),('20250426074547-create-admission-details.js'),('20250430163403-create-special-enquiry.js'),('20250430185814-create-admission-faq.js'),('20250501064415-create-staff.js'),('20250503125236-create-course-to-staff.js'),('20250503164714-create-partnership.js'),('20250503164807-create-partnership-image.js'),('20250503165140-create-collaboration.js'),('20250507083320-create-user.js'),('20250526071813-create-announcement.js'),('20250526083846-create-legal.js'),('20250527181749-add_column_to_courses_table.js'),('20250527183453-create-course-testimonials.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SocialMedia`
--

DROP TABLE IF EXISTS `SocialMedia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SocialMedia` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `link` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SocialMedia`
--

LOCK TABLES `SocialMedia` WRITE;
/*!40000 ALTER TABLE `SocialMedia` DISABLE KEYS */;
INSERT INTO `SocialMedia` VALUES ('8f8f2762-2bb8-4a34-8300-d621173d83b3','Facebook Account','https://facebook-update.com','2025-05-17 00:14:45','2025-05-18 18:55:13');
/*!40000 ALTER TABLE `SocialMedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SpecialEnquiries`
--

DROP TABLE IF EXISTS `SpecialEnquiries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SpecialEnquiries` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `content` text,
  `order_no` int DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SpecialEnquiries`
--

LOCK TABLES `SpecialEnquiries` WRITE;
/*!40000 ALTER TABLE `SpecialEnquiries` DISABLE KEYS */;
INSERT INTO `SpecialEnquiries` VALUES ('e23294cc-95de-4128-bb5a-997e85036e3a','Special Enquiry Services','special-enquiry','Our special enquiry services provide detailed research and analysis tailored to your specific needs. Whether you require in-depth market studies, policy evaluations, or case-specific investigations, our expert team is here to assist you.',1,1,'2025-05-19 09:54:44','2025-05-19 10:43:57');
/*!40000 ALTER TABLE `SpecialEnquiries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Staffs`
--

DROP TABLE IF EXISTS `Staffs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Staffs` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `field` text,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Staffs`
--

LOCK TABLES `Staffs` WRITE;
/*!40000 ALTER TABLE `Staffs` DISABLE KEYS */;
INSERT INTO `Staffs` VALUES ('02c68954-7ecc-4284-91b2-081107280cee','Dr. John Dart','dr-john-dart','Senior Lecturer','Field of engineering','staff/e2d8971747699177654.jpg','2025-05-03 15:03:16','2025-05-27 22:57:06'),('60853100-ab1f-4a25-b986-f84445e664e2','Kola Adetunji e','kola-adetunji-e','Staff','Engineering','staff/fd1e8e1747699366334.jpg','2025-05-20 00:02:46','2025-05-28 06:46:45'),('dc6b96ab-d0f0-47a1-be25-b227519e3bee','Keji Lade','keji-lade','MB','Data','staff/63e60f1747609025000.jpg','2025-05-18 22:57:05','2025-05-18 22:57:05');
/*!40000 ALTER TABLE `Staffs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Testimonies`
--

DROP TABLE IF EXISTS `Testimonies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Testimonies` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `testimony` text,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Testimonies`
--

LOCK TABLES `Testimonies` WRITE;
/*!40000 ALTER TABLE `Testimonies` DISABLE KEYS */;
INSERT INTO `Testimonies` VALUES ('4e6c0574-0d94-407f-a7a3-ebf2401d52eb','Tola Adenike Akinde...','A good exp','testimony/ec96101748126332003.jpg','2025-05-24 22:10:16','2025-05-27 21:36:57'),('be7080f6-5555-41d0-84e5-1ebfe7e5f12f','Hilary Clinton','Welocme','testimony/baf1801748124700860.jpg','2025-05-24 22:11:40','2025-05-24 22:11:40'),('c3e63707-764f-42bf-8cf6-2361fc9d59dc','James Bond','fabulous','testimony/421e971748124677057.jpg','2025-05-24 22:11:17','2025-05-24 22:11:17'),('d31d0e9b-328c-45e0-b9fc-2e87bd413667','Titilola Omolade','This is a great experience','testimony/a3ecc21747393752410.png','2025-05-16 11:09:12','2025-05-19 23:09:21'),('d4b5c723-d774-4372-8835-674724f57d9b','Kola Adewuyi','excellent','testimony/8dea631748124655623.jpg','2025-05-24 22:10:55','2025-05-24 22:10:55'),('e4941fb8-3584-4007-9ed8-271292903913','test updated','test updated','testimony/1ffd8f1748046848126.jpg','2025-05-24 00:34:08','2025-05-24 00:35:15');
/*!40000 ALTER TABLE `Testimonies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `otp_expires_at` datetime DEFAULT NULL,
  `otp_verified_at` datetime DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('17b22c85-82aa-43b4-8d46-b4da01a512bb','James Daniel','niel200k@gmail.com','$2b$10$90P0/0r6b6RjXic3zyCv3OHRpN7jhQbi1N/6o0OtqSYptx28KDGK2','253560','2025-05-25 10:04:23',NULL,1,'2025-05-07 12:47:21','2025-05-25 09:54:25'),('9296decc-4199-4522-bb21-78f459f48991','growhack','olaokunolalekan@gmail.com','$2b$10$Tgo.efoDmYgiJsjC8cIEte0xxgcycKDdWmPF3sKZ0cPK3rebeFIfe',NULL,NULL,NULL,1,'2025-05-13 17:52:21','2025-05-20 18:41:23'),('b0972f61-a8d4-42d4-9b7b-497c81a274f4','NIEL','niel2264@gmail.com','$2b$10$LkJuZiKxhPQvGgiFS4N0curyCVu0ytIyAD.nbMCko7xb8y2gnq7yK',NULL,NULL,NULL,1,'2025-05-28 08:45:10','2025-05-28 08:45:10');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-29 18:42:48
