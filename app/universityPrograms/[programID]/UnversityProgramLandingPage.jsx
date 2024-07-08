'use client'
import CourseContent from '@/app/courses/CourseContent'

import CoursesFaq from '@/app/courses/CoursesFaq'
import HiringPartnersHome from '@/app/courses/HiringPartnersHome'
import StudentsPlacedHome from '@/app/courses/StudentsPlacedHome'
import UpComingBranches from '@/app/courses/UpComingBranches'
import WebLayout from '@/components/commonComponents/webLayout/WebLayout'
import React from 'react'
import ProgramDescription from '@/app/universityPrograms/ProgramDescription'
import CoveredSkills from '../CoveredSkills'
import UniversityCertificate from '../UniversityCertificate'
import FacultyDetails from '../FacultyDetails'
import CareerSupport from '../CareerSupport'
import ProgramFees from '../ProgramFees'
import ToolsCovered from '../ToolsCovered'
import ApplicationProcess from '../ApplicationProcess'
import EligibilityCriteria from '../EligibilityCriteria'

const UnversityProgramLandingPage = () => {
  const courseDetails ={
    "statusCode": 200,
    "status": "OK",
    "data": {
        "courseId": 102,
        "courseName": "Software Testing Master Course with Java Selenium",
        "mode": [
            "OFFLINECLASSES"
        ],
        "courseSummary": "Master software testing with in-depth Java Selenium training for automated testing.",
        "courseAbout": "Covers all aspects of software testing with Java Selenium, including test automation frameworks.Real-world projects and exercises to build practical skills in automated testing.Learn from experienced professionals with extensive industry knowledge and expertise in Java Selenium.",
        "courseHighlight": "Who this course is for:This Course is designed for any undergraduates or job seekers and laterals to enhance their technical knowledge with BE/ BTech, BSc, BCA, MCA, MTech/ ME, MSc and other technical graduations.Manual testers, Non-programming aware testers interested in learning Automation.Any Software engineer who are interested in Mobile Technologies.Freshers/Graduates/ Software Testers.;Why take this course:This course is blended with IT industry experience where even a fresher can start working on project in IT industry easily.This package gives desired knowledge on testing which is the entry level criteria for any interview. This package gives confidence to a fresher to start working on a testing project from the day of joining.;What you will learn:In this Course you will understand software testing from basics to advance level.You will understand how to test any application from the scratch.You will also understand how agile works.Software testing course is also designed for automating any web application or project from scratch with in-depth knowledge in Java & Selenium tool.You will understand the complete life cycle of software testing with 2 projects on manual, Database and automation.Your performance will increase by activities like presentations, Assignments, Mock Interviews & mock tests which will run regularly.You need NOT have java coding experience to start this course. Even non Programming candidates can follow this course comfortably.All Installation setup including Java knowledge is taken care as part of course.100% JOB ASSISTANCE after completion of course to make your Profile reach to Hundreds of Recruiters in our network",
        "faqs": [
            {
                "faqId": 403,
                "question": "What is the duration of the Software Testing Master Course with Java Selenium?",
                "answer": "The course typically spans 10-12 weeks, depending on the intensity and pace of study.",
                "faqType": "COURSE",
                "organizationType": null,
                "createdDateAndTime": "2024-06-20T17:48:45.200166",
                "updatedDateAndTime": "2024-06-20T17:48:45.200166"
            },
            {
                "faqId": 404,
                "question": "Are there any prerequisites for enrolling in this course?",
                "answer": "A basic understanding of programming concepts and software development is recommended, but not mandatory.",
                "faqType": "COURSE",
                "organizationType": null,
                "createdDateAndTime": "2024-06-20T17:48:45.230174",
                "updatedDateAndTime": "2024-06-20T17:48:45.230174"
            },
            {
                "faqId": 405,
                "question": "Will I receive a certificate upon completion of the course?",
                "answer": "Yes, participants who successfully complete the course will receive a certificate of completion.",
                "faqType": "COURSE",
                "organizationType": null,
                "createdDateAndTime": "2024-06-20T17:48:45.233174",
                "updatedDateAndTime": "2024-06-20T17:48:45.233174"
            },
            {
                "faqId": 406,
                "question": "How is the course delivered?",
                "answer": " The course is delivered through a combination of online lectures, interactive sessions, and practical exercises.",
                "faqType": "COURSE",
                "organizationType": null,
                "createdDateAndTime": "2024-06-20T17:48:45.240176",
                "updatedDateAndTime": "2024-06-20T17:48:45.240176"
            },
            {
                "faqId": 407,
                "question": "Can I ask questions and interact with instructors during the course?",
                "answer": "Yes, participants can ask questions and interact with instructors through discussion forums, live Q&A sessions, and one-on-one mentoring.",
                "faqType": "COURSE",
                "organizationType": null,
                "createdDateAndTime": "2024-06-20T17:48:45.241177",
                "updatedDateAndTime": "2024-06-20T17:48:45.241177"
            },
            {
                "faqId": 408,
                "question": "What will I be able to do after completing this course?",
                "answer": "Upon completing the course, you will be able to design and implement automated test scripts using Java Selenium, create robust test frameworks, and effectively perform software testing in various environments.",
                "faqType": "COURSE",
                "organizationType": null,
                "createdDateAndTime": "2024-06-20T17:48:45.242177",
                "updatedDateAndTime": "2024-06-20T17:48:45.242177"
            }
        ],
        "branchType": [
            "QSP"
        ],
        "courseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Software%20Testing%20Master%20Course%20with%20Java%20Selenium/2024-06-24T12%3A27%3A46.191505300_Software%20Testing%20Master%20Course%20with%20Java%20Selenium-image.png",
        "branches": [
            {
                "branchId": 58,
                "city": "Ahmedabad",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Ahmedabad/2024-06-21T14%3A36%3A04.680863_Ahmedabad.png",
                "branchCount": 1
            },
            {
                "branchId": 48,
                "city": "Tirupati",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Tirupati/2024-06-24T12%3A39%3A51.714752600_Tirupati.png",
                "branchCount": 1
            },
            {
                "branchId": 52,
                "city": "Delhi",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Delhi/2024-06-21T14%3A34%3A37.077492800_New%20Delhi.png",
                "branchCount": 1
            },
            {
                "branchId": 101,
                "city": "Bengaluru",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Bengaluru/2024-06-21T14%3A18%3A55.683464800_Bengaluru.png",
                "branchCount": 5
            },
            {
                "branchId": 53,
                "city": "Bhubaneswar",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Bhubaneswar/2024-06-21T14%3A35%3A01.110579900_Bhubaneswar.png",
                "branchCount": 1
            },
            {
                "branchId": 51,
                "city": "Chandigarh",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Chandigarh/2024-06-21T14%3A33%3A52.626532900_Chandigarh.png",
                "branchCount": 1
            },
            {
                "branchId": 56,
                "city": "Kolkata",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Kolkata/2024-06-21T14%3A35%3A37.767769900_Kolkata.png",
                "branchCount": 1
            },
            {
                "branchId": 81,
                "city": "Mumbai",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Mumbai/2024-06-21T14%3A31%3A09.708546800_Mumbai.png",
                "branchCount": 3
            },
            {
                "branchId": 86,
                "city": "Hyderabad",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Hyderabad/2024-06-21T14%3A31%3A43.200422300_Hyderabad.png",
                "branchCount": 3
            },
            {
                "branchId": 70,
                "city": "Chennai",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Chennai/2024-06-21T14%3A20%3A48.786389200_Chennai.png",
                "branchCount": 3
            },
            {
                "branchId": 61,
                "city": "Kochi",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Kochi/2024-06-24T12%3A40%3A58.490226600_Kochi.png",
                "branchCount": 1
            },
            {
                "branchId": 49,
                "city": "Noida",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Noida/2024-06-21T14%3A32%3A17.091152900_Noida.png",
                "branchCount": 1
            },
            {
                "branchId": 76,
                "city": "Pune",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Pune/2024-06-21T14%3A30%3A33.132014400_Pune.png",
                "branchCount": 3
            },
            {
                "branchId": 50,
                "city": "Gurugram",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Gurugram/2024-06-21T14%3A32%3A43.849002600_Gurugram.png",
                "branchCount": 1
            },
            {
                "branchId": 63,
                "city": "Mysore",
                "cityImageUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CITY/IMAGE/Mysore/2024-06-24T12%3A39%3A17.720774_Mysore.png",
                "branchCount": 1
            }
        ],
        "onlineBatches": null,
        "subjects": [
            {
                "subjectId": 66,
                "subjectTitle": "Software Testing Master Course with Java Selenium-Subject",
                "subjectDescrption": "Software Testing Master Course with Java Selenium",
                "chapters": [
                    {
                        "chapterId": 510,
                        "chapterTitle": "Manual testing",
                        "chapterDescription": "",
                        "topics": [
                            {
                                "topicId": 1456,
                                "topicTitle": " ISTQB Foundation",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.320243",
                                "updatedDateAndTime": "2024-06-20T17:51:19.320243"
                            },
                            {
                                "topicId": 1457,
                                "topicTitle": "Introduction to Mobile Application Testing",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 600,
                                        "subTopicTitle": " MSDLC",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.321244",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.321244"
                                    },
                                    {
                                        "subTopicId": 601,
                                        "subTopicTitle": "Types of Mobile Applications",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.321244",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.321244"
                                    },
                                    {
                                        "subTopicId": 602,
                                        "subTopicTitle": "Mobile Emulators/Simulator",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.321244",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.321244"
                                    },
                                    {
                                        "subTopicId": 603,
                                        "subTopicTitle": "Introduction to ADB Commands",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.322244",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.322244"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.320243",
                                "updatedDateAndTime": "2024-06-20T17:51:19.320243"
                            },
                            {
                                "topicId": 1447,
                                "topicTitle": "Test Case",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 575,
                                        "subTopicTitle": "Introduction to Test Case",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30624",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30624"
                                    },
                                    {
                                        "subTopicId": 576,
                                        "subTopicTitle": " Test Case Design Techniques",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30624",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30624"
                                    },
                                    {
                                        "subTopicId": 577,
                                        "subTopicTitle": " Test Case Format",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30624",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30624"
                                    },
                                    {
                                        "subTopicId": 578,
                                        "subTopicTitle": "Functional Test Case",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.307242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.307242"
                                    },
                                    {
                                        "subTopicId": 579,
                                        "subTopicTitle": "Integration Test Case",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.307242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.307242"
                                    },
                                    {
                                        "subTopicId": 580,
                                        "subTopicTitle": "System Test Case",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.308242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.308242"
                                    },
                                    {
                                        "subTopicId": 581,
                                        "subTopicTitle": "Procedure to Write and Execute Test Case",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.308242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.308242"
                                    },
                                    {
                                        "subTopicId": 582,
                                        "subTopicTitle": "Test case Review Process",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.308242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.308242"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.30524",
                                "updatedDateAndTime": "2024-06-20T17:51:19.30524"
                            },
                            {
                                "topicId": 1448,
                                "topicTitle": "Software Test Life Cycle",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 583,
                                        "subTopicTitle": " Traceability Matrix",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30924",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30924"
                                    },
                                    {
                                        "subTopicId": 584,
                                        "subTopicTitle": "Test Execution Reports",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30924",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.310241"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.30924",
                                "updatedDateAndTime": "2024-06-20T17:51:19.30924"
                            },
                            {
                                "topicId": 1441,
                                "topicTitle": "Software Development Life Cycle",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 551,
                                        "subTopicTitle": "Waterfall Model",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.289236",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.289236"
                                    },
                                    {
                                        "subTopicId": 552,
                                        "subTopicTitle": "Spiral Model",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.291237",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.291237"
                                    },
                                    {
                                        "subTopicId": 553,
                                        "subTopicTitle": "Prototype Model",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.292237",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.292237"
                                    },
                                    {
                                        "subTopicId": 554,
                                        "subTopicTitle": "V & V Model",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.293237",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.293237"
                                    },
                                    {
                                        "subTopicId": 555,
                                        "subTopicTitle": "Hybrid Model",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.294237",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.294237"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.287236",
                                "updatedDateAndTime": "2024-06-20T17:51:19.287236"
                            },
                            {
                                "topicId": 1442,
                                "topicTitle": "White Box Testing",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 556,
                                        "subTopicTitle": "Path Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.295238",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.295238"
                                    },
                                    {
                                        "subTopicId": 557,
                                        "subTopicTitle": "Loop Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.296238",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.296238"
                                    },
                                    {
                                        "subTopicId": 558,
                                        "subTopicTitle": "Condition Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.296238",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.296238"
                                    },
                                    {
                                        "subTopicId": 559,
                                        "subTopicTitle": "White box Testing from Memory Point of View",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.296238",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.296238"
                                    },
                                    {
                                        "subTopicId": 560,
                                        "subTopicTitle": "White box Testing from Performance Point of View",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.297238",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.297238"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.294237",
                                "updatedDateAndTime": "2024-06-20T17:51:19.294237"
                            },
                            {
                                "topicId": 1443,
                                "topicTitle": "Grey Box Testing",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.297238",
                                "updatedDateAndTime": "2024-06-20T17:51:19.297238"
                            },
                            {
                                "topicId": 1444,
                                "topicTitle": "Black Box Testing",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 561,
                                        "subTopicTitle": "Functionality Testing/Component Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.298238",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.298238"
                                    },
                                    {
                                        "subTopicId": 562,
                                        "subTopicTitle": "Integration Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.29924",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.29924"
                                    },
                                    {
                                        "subTopicId": 563,
                                        "subTopicTitle": " System Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.29924",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.29924"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.298238",
                                "updatedDateAndTime": "2024-06-20T17:51:19.298238"
                            },
                            {
                                "topicId": 1445,
                                "topicTitle": "Acceptance Testing",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 564,
                                        "subTopicTitle": "Alpha Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.300238",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.300238"
                                    },
                                    {
                                        "subTopicId": 565,
                                        "subTopicTitle": "Beta Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.301239",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.301239"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.300238",
                                "updatedDateAndTime": "2024-06-20T17:51:19.300238"
                            },
                            {
                                "topicId": 1446,
                                "topicTitle": "Smoke Testing/Sanity Testing/Dry Run",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 566,
                                        "subTopicTitle": "Adhoc Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.301239",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.301239"
                                    },
                                    {
                                        "subTopicId": 567,
                                        "subTopicTitle": " Exploratory Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.302239",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.302239"
                                    },
                                    {
                                        "subTopicId": 568,
                                        "subTopicTitle": " Compatibility Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.302239",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.302239"
                                    },
                                    {
                                        "subTopicId": 569,
                                        "subTopicTitle": "Performance Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30324",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30324"
                                    },
                                    {
                                        "subTopicId": 570,
                                        "subTopicTitle": " Reliability Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30324",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30324"
                                    },
                                    {
                                        "subTopicId": 571,
                                        "subTopicTitle": "Usability Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30324",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30324"
                                    },
                                    {
                                        "subTopicId": 572,
                                        "subTopicTitle": "Accessibility Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30424",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30424"
                                    },
                                    {
                                        "subTopicId": 573,
                                        "subTopicTitle": "Globalization Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30424",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30424"
                                    },
                                    {
                                        "subTopicId": 574,
                                        "subTopicTitle": "Regression Testing",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.30524",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.30524"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.301239",
                                "updatedDateAndTime": "2024-06-20T17:51:19.301239"
                            },
                            {
                                "topicId": 1449,
                                "topicTitle": "Test Management Tool",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 585,
                                        "subTopicTitle": "QC",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.310241",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.310241"
                                    },
                                    {
                                        "subTopicId": 586,
                                        "subTopicTitle": "ALM",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.311242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.311242"
                                    },
                                    {
                                        "subTopicId": 587,
                                        "subTopicTitle": "Jira",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.311242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.311242"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.310241",
                                "updatedDateAndTime": "2024-06-20T17:51:19.310241"
                            },
                            {
                                "topicId": 1450,
                                "topicTitle": "Test Plan",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 588,
                                        "subTopicTitle": "Sections of Test Plan",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.312242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.312242"
                                    },
                                    {
                                        "subTopicId": 589,
                                        "subTopicTitle": "Test Metrics",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.312242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.312242"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.311242",
                                "updatedDateAndTime": "2024-06-20T17:51:19.311242"
                            },
                            {
                                "topicId": 1451,
                                "topicTitle": " Defect Tracking",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 590,
                                        "subTopicTitle": " Introduction to Defects",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.313242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.313242"
                                    },
                                    {
                                        "subTopicId": 591,
                                        "subTopicTitle": "Defect Life Cycle",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.314242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.314242"
                                    },
                                    {
                                        "subTopicId": 592,
                                        "subTopicTitle": "Status of Defects",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.314242",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.314242"
                                    },
                                    {
                                        "subTopicId": 593,
                                        "subTopicTitle": "Severity of a defect",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.315243",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.315243"
                                    },
                                    {
                                        "subTopicId": 594,
                                        "subTopicTitle": "Priority of a defect",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.315243",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.315243"
                                    },
                                    {
                                        "subTopicId": 595,
                                        "subTopicTitle": "Defect Report/Incident Report",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.316243",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.316243"
                                    },
                                    {
                                        "subTopicId": 596,
                                        "subTopicTitle": "Defect Tracking Tools",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.316243",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.316243"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.313242",
                                "updatedDateAndTime": "2024-06-20T17:51:19.313242"
                            },
                            {
                                "topicId": 1452,
                                "topicTitle": "Static Testing",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.316243",
                                "updatedDateAndTime": "2024-06-20T17:51:19.316243"
                            },
                            {
                                "topicId": 1453,
                                "topicTitle": "Dynamic Testing",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.317244",
                                "updatedDateAndTime": "2024-06-20T17:51:19.317244"
                            },
                            {
                                "topicId": 1454,
                                "topicTitle": "Quality Assurance and Quality Control",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.317244",
                                "updatedDateAndTime": "2024-06-20T17:51:19.317244"
                            },
                            {
                                "topicId": 1455,
                                "topicTitle": "Projects",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 597,
                                        "subTopicTitle": "Web Application",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.318243",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.318243"
                                    },
                                    {
                                        "subTopicId": 598,
                                        "subTopicTitle": "Mobile Application",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.319243",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.319243"
                                    },
                                    {
                                        "subTopicId": 599,
                                        "subTopicTitle": "Compatibility Testing Project",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.319243",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.319243"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.318243",
                                "updatedDateAndTime": "2024-06-20T17:51:19.318243"
                            }
                        ],
                        "chapterPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/CHAPTER/%231+Part2_+Different+Types+of+Programming+Languages.mp4",
                        "chapterPreviewDuration": 7.34,
                        "createdDateAndTime": "2024-06-20T17:51:19.286235",
                        "updatedDateAndTime": "2024-06-20T17:51:19.286235"
                    },
                    {
                        "chapterId": 511,
                        "chapterTitle": "Database",
                        "chapterDescription": "",
                        "topics": [
                            {
                                "topicId": 1471,
                                "topicTitle": "Transaction Control Language (TCL)",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 656,
                                        "subTopicTitle": "Commit",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.350252",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.350252"
                                    },
                                    {
                                        "subTopicId": 657,
                                        "subTopicTitle": "Save point",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.351252",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.351252"
                                    },
                                    {
                                        "subTopicId": 658,
                                        "subTopicTitle": "Rollback ",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.351252",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.351252"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.350252",
                                "updatedDateAndTime": "2024-06-20T17:51:19.350252"
                            },
                            {
                                "topicId": 1458,
                                "topicTitle": "Introduction",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 604,
                                        "subTopicTitle": "What Is Database?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.323244",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.323244"
                                    },
                                    {
                                        "subTopicId": 605,
                                        "subTopicTitle": "What is Database Management System (DBMS)?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.324245",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.324245"
                                    },
                                    {
                                        "subTopicId": 606,
                                        "subTopicTitle": "What is Relational Model?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.324245",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.324245"
                                    },
                                    {
                                        "subTopicId": 607,
                                        "subTopicTitle": "Introduction to RDBMS",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.325245",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.325245"
                                    },
                                    {
                                        "subTopicId": 608,
                                        "subTopicTitle": "Brief on EF CODD",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.325245",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.325245"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.323244",
                                "updatedDateAndTime": "2024-06-20T17:51:19.323244"
                            },
                            {
                                "topicId": 1459,
                                "topicTitle": " Datatypes and Constraints",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 609,
                                        "subTopicTitle": " What are Datatypes?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.326246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.326246"
                                    },
                                    {
                                        "subTopicId": 610,
                                        "subTopicTitle": "  Types and Examples",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.326246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.326246"
                                    },
                                    {
                                        "subTopicId": 611,
                                        "subTopicTitle": " How to use",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.327246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.327246"
                                    },
                                    {
                                        "subTopicId": 612,
                                        "subTopicTitle": "What are Constraints?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.327246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.327246"
                                    },
                                    {
                                        "subTopicId": 613,
                                        "subTopicTitle": "Types and Examples",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.327246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.327246"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.326246",
                                "updatedDateAndTime": "2024-06-20T17:51:19.326246"
                            },
                            {
                                "topicId": 1460,
                                "topicTitle": "Statements in SQL",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 614,
                                        "subTopicTitle": "Data Definition Language (DDL)",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.329246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.329246"
                                    },
                                    {
                                        "subTopicId": 615,
                                        "subTopicTitle": "Data Manipulation Language (DML)",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.329246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.329246"
                                    },
                                    {
                                        "subTopicId": 616,
                                        "subTopicTitle": "Transaction Control Language (TCL)",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.329246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.329246"
                                    },
                                    {
                                        "subTopicId": 617,
                                        "subTopicTitle": "Data Control Language (DCL)",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.330246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.330246"
                                    },
                                    {
                                        "subTopicId": 618,
                                        "subTopicTitle": "Data Query Language (DQL)",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.330246",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.330246"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.328245",
                                "updatedDateAndTime": "2024-06-20T17:51:19.328245"
                            },
                            {
                                "topicId": 1461,
                                "topicTitle": "Software installation",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 619,
                                        "subTopicTitle": "Installing and set up of software",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.331247",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.331247"
                                    },
                                    {
                                        "subTopicId": 620,
                                        "subTopicTitle": "Working on Oracle 10g",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.331247",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.331247"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.331247",
                                "updatedDateAndTime": "2024-06-20T17:51:19.331247"
                            },
                            {
                                "topicId": 1462,
                                "topicTitle": "Data Query Language (DQL)",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 621,
                                        "subTopicTitle": "Select",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.332247",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.332247"
                                    },
                                    {
                                        "subTopicId": 622,
                                        "subTopicTitle": "From",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.332247",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.332247"
                                    },
                                    {
                                        "subTopicId": 623,
                                        "subTopicTitle": "Where",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.333247",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.333247"
                                    },
                                    {
                                        "subTopicId": 624,
                                        "subTopicTitle": "Group By",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.333247",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.333247"
                                    },
                                    {
                                        "subTopicId": 625,
                                        "subTopicTitle": "Having",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.334247",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.334247"
                                    },
                                    {
                                        "subTopicId": 626,
                                        "subTopicTitle": "Order By",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.334247",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.334247"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.332247",
                                "updatedDateAndTime": "2024-06-20T17:51:19.332247"
                            },
                            {
                                "topicId": 1463,
                                "topicTitle": "Operators",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 627,
                                        "subTopicTitle": "Types and Examples",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.335251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.335251"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.334247",
                                "updatedDateAndTime": "2024-06-20T17:51:19.334247"
                            },
                            {
                                "topicId": 1464,
                                "topicTitle": " Functions in SQL",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 628,
                                        "subTopicTitle": "Single Row Functions",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.336249",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.336249"
                                    },
                                    {
                                        "subTopicId": 629,
                                        "subTopicTitle": "Multi Row Functions",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.336249",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.336249"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.335251",
                                "updatedDateAndTime": "2024-06-20T17:51:19.335251"
                            },
                            {
                                "topicId": 1465,
                                "topicTitle": " Sub Query",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 630,
                                        "subTopicTitle": "Introduction to Sub Query",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.337248",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.337248"
                                    },
                                    {
                                        "subTopicId": 631,
                                        "subTopicTitle": "Working of Sub Query",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.337248",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.337248"
                                    },
                                    {
                                        "subTopicId": 632,
                                        "subTopicTitle": " Query Writing and Execution",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.338249",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.338249"
                                    },
                                    {
                                        "subTopicId": 633,
                                        "subTopicTitle": "Types of Sub Query",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.338249",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.338249"
                                    },
                                    {
                                        "subTopicId": 634,
                                        "subTopicTitle": "Nested Sub Query",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.339249",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.339249"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.337248",
                                "updatedDateAndTime": "2024-06-20T17:51:19.337248"
                            },
                            {
                                "topicId": 1466,
                                "topicTitle": " Pseudo Columns",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 635,
                                        "subTopicTitle": " Introduction on Pseudo Columns",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.339249",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.339249"
                                    },
                                    {
                                        "subTopicId": 636,
                                        "subTopicTitle": "ROWID",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.340249",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.340249"
                                    },
                                    {
                                        "subTopicId": 637,
                                        "subTopicTitle": "ROWNUM",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.340249",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.340249"
                                    },
                                    {
                                        "subTopicId": 638,
                                        "subTopicTitle": "Types of Sub Query",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.341251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.341251"
                                    },
                                    {
                                        "subTopicId": 639,
                                        "subTopicTitle": " Working and Usage",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.341251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.341251"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.339249",
                                "updatedDateAndTime": "2024-06-20T17:51:19.339249"
                            },
                            {
                                "topicId": 1467,
                                "topicTitle": "Joins",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 640,
                                        "subTopicTitle": "What Is Join?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.34225",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.34225"
                                    },
                                    {
                                        "subTopicId": 641,
                                        "subTopicTitle": "Types of Joins",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.34225",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.34225"
                                    },
                                    {
                                        "subTopicId": 642,
                                        "subTopicTitle": "Cartesian Join",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.34325",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.34325"
                                    },
                                    {
                                        "subTopicId": 643,
                                        "subTopicTitle": "Inner Join",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.34325",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.34325"
                                    },
                                    {
                                        "subTopicId": 644,
                                        "subTopicTitle": "Outer Join",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.344251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.344251"
                                    },
                                    {
                                        "subTopicId": 645,
                                        "subTopicTitle": "Self-Join",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.344251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.344251"
                                    },
                                    {
                                        "subTopicId": 646,
                                        "subTopicTitle": "Queries and Examples",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.345252",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.345252"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.341251",
                                "updatedDateAndTime": "2024-06-20T17:51:19.341251"
                            },
                            {
                                "topicId": 1468,
                                "topicTitle": "Co- Related Sub Query",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 647,
                                        "subTopicTitle": "Working and Examples",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.346251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.346251"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.345252",
                                "updatedDateAndTime": "2024-06-20T17:51:19.345252"
                            },
                            {
                                "topicId": 1469,
                                "topicTitle": "Data Definition Language (DDL)",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 648,
                                        "subTopicTitle": "Create",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.347251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.347251"
                                    },
                                    {
                                        "subTopicId": 649,
                                        "subTopicTitle": "Rename",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.347251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.347251"
                                    },
                                    {
                                        "subTopicId": 650,
                                        "subTopicTitle": "Alter",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.347251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.347251"
                                    },
                                    {
                                        "subTopicId": 651,
                                        "subTopicTitle": "Truncate",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.348253",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.348253"
                                    },
                                    {
                                        "subTopicId": 652,
                                        "subTopicTitle": "Drop",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.348253",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.348253"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.346251",
                                "updatedDateAndTime": "2024-06-20T17:51:19.346251"
                            },
                            {
                                "topicId": 1470,
                                "topicTitle": "Data Manipulation Language (DML)",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 653,
                                        "subTopicTitle": "Insert",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.349251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.349251"
                                    },
                                    {
                                        "subTopicId": 654,
                                        "subTopicTitle": "Update",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.349251",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.349251"
                                    },
                                    {
                                        "subTopicId": 655,
                                        "subTopicTitle": "Delete",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.350252",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.350252"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.348253",
                                "updatedDateAndTime": "2024-06-20T17:51:19.348253"
                            },
                            {
                                "topicId": 1472,
                                "topicTitle": "Data Control Language (DCL)",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 659,
                                        "subTopicTitle": "Grant",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.352252",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.352252"
                                    },
                                    {
                                        "subTopicId": 660,
                                        "subTopicTitle": "Revoke",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.352252",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.352252"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.351252",
                                "updatedDateAndTime": "2024-06-20T17:51:19.351252"
                            },
                            {
                                "topicId": 1474,
                                "topicTitle": "E R Diagrams",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 664,
                                        "subTopicTitle": "Introduction to ERD",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.355253",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.355253"
                                    },
                                    {
                                        "subTopicId": 665,
                                        "subTopicTitle": "Examples",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.355253",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.355253"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.354253",
                                "updatedDateAndTime": "2024-06-20T17:51:19.354253"
                            },
                            {
                                "topicId": 1473,
                                "topicTitle": "Normalization",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 661,
                                        "subTopicTitle": " Introduction to Normalization",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.353254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.353254"
                                    },
                                    {
                                        "subTopicId": 662,
                                        "subTopicTitle": "Types of Normal Forms",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.354253",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.354253"
                                    },
                                    {
                                        "subTopicId": 663,
                                        "subTopicTitle": "Examples ",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.354253",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.354253"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.353254",
                                "updatedDateAndTime": "2024-06-20T17:51:19.353254"
                            }
                        ],
                        "chapterPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/CHAPTER/%231+Part2_+Different+Types+of+Programming+Languages.mp4",
                        "chapterPreviewDuration": 7.34,
                        "createdDateAndTime": "2024-06-20T17:51:19.322244",
                        "updatedDateAndTime": "2024-06-20T17:51:19.322244"
                    },
                    {
                        "chapterId": 512,
                        "chapterTitle": "Core Java",
                        "chapterDescription": "",
                        "topics": [
                            {
                                "topicId": 1475,
                                "topicTitle": "Introduction to programming",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 666,
                                        "subTopicTitle": "Introduction to java",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.357254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.357254"
                                    },
                                    {
                                        "subTopicId": 667,
                                        "subTopicTitle": "JDK installation",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.357254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.357254"
                                    },
                                    {
                                        "subTopicId": 668,
                                        "subTopicTitle": "Keywords, Identifiers, variables",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.357254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.357254"
                                    },
                                    {
                                        "subTopicId": 669,
                                        "subTopicTitle": "Operators",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.358253",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.358253"
                                    },
                                    {
                                        "subTopicId": 670,
                                        "subTopicTitle": "Method/Functions",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.358253",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.358253"
                                    },
                                    {
                                        "subTopicId": 671,
                                        "subTopicTitle": "Flow Control Statements",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.358253",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.358253"
                                    },
                                    {
                                        "subTopicId": 672,
                                        "subTopicTitle": "Arrays",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.359254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.359254"
                                    },
                                    {
                                        "subTopicId": 673,
                                        "subTopicTitle": "Strings",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.359254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.359254"
                                    },
                                    {
                                        "subTopicId": 674,
                                        "subTopicTitle": "Interactive programs in java using Scanner",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.360254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.360254"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.356253",
                                "updatedDateAndTime": "2024-06-20T17:51:19.356253"
                            },
                            {
                                "topicId": 1476,
                                "topicTitle": "Object Oriented Programming System",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 675,
                                        "subTopicTitle": "Classes and Objects",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.360254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.360254"
                                    },
                                    {
                                        "subTopicId": 676,
                                        "subTopicTitle": "Object creation",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.361254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.361254"
                                    },
                                    {
                                        "subTopicId": 677,
                                        "subTopicTitle": "Reference variable",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.361254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.361254"
                                    },
                                    {
                                        "subTopicId": 678,
                                        "subTopicTitle": " Global and local variables",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.361254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.361254"
                                    },
                                    {
                                        "subTopicId": 679,
                                        "subTopicTitle": "Constructors",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.362254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.362254"
                                    },
                                    {
                                        "subTopicId": 680,
                                        "subTopicTitle": "Aggregation",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.362254",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.362254"
                                    },
                                    {
                                        "subTopicId": 681,
                                        "subTopicTitle": "Composition",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.363255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.363255"
                                    },
                                    {
                                        "subTopicId": 682,
                                        "subTopicTitle": "Inheritance ",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.363255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.363255"
                                    },
                                    {
                                        "subTopicId": 683,
                                        "subTopicTitle": "Method Overloading",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.363255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.363255"
                                    },
                                    {
                                        "subTopicId": 684,
                                        "subTopicTitle": "Method Overriding",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.364255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.364255"
                                    },
                                    {
                                        "subTopicId": 685,
                                        "subTopicTitle": "Abstract classes",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.364255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.364255"
                                    },
                                    {
                                        "subTopicId": 686,
                                        "subTopicTitle": "Interfaces",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.364255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.364255"
                                    },
                                    {
                                        "subTopicId": 687,
                                        "subTopicTitle": "Typecasting",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.365256",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.365256"
                                    },
                                    {
                                        "subTopicId": 688,
                                        "subTopicTitle": "JVM architecture",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.365256",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.365256"
                                    },
                                    {
                                        "subTopicId": 689,
                                        "subTopicTitle": "Polymorphism",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.366255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.366255"
                                    },
                                    {
                                        "subTopicId": 690,
                                        "subTopicTitle": "Abstraction",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.366255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.366255"
                                    },
                                    {
                                        "subTopicId": 691,
                                        "subTopicTitle": "Java packages",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.366255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.366255"
                                    },
                                    {
                                        "subTopicId": 692,
                                        "subTopicTitle": "Access Specifies",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.367255",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.367255"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.360254",
                                "updatedDateAndTime": "2024-06-20T17:51:19.360254"
                            },
                            {
                                "topicId": 1477,
                                "topicTitle": "Java Built-in packages and API",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 697,
                                        "subTopicTitle": " Threads and multithreading",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.369256",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.369256"
                                    },
                                    {
                                        "subTopicId": 698,
                                        "subTopicTitle": "Wrapper Classes",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.370258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.370258"
                                    },
                                    {
                                        "subTopicId": 699,
                                        "subTopicTitle": "Data Structures",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.370258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.370258"
                                    },
                                    {
                                        "subTopicId": 700,
                                        "subTopicTitle": "Java Collection Framework ",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.370258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.370258"
                                    },
                                    {
                                        "subTopicId": 701,
                                        "subTopicTitle": "File Handling",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.371258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.371258"
                                    },
                                    {
                                        "subTopicId": 702,
                                        "subTopicTitle": "Serialization",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.371258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.371258"
                                    },
                                    {
                                        "subTopicId": 703,
                                        "subTopicTitle": "Garbage Collector",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.371258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.371258"
                                    },
                                    {
                                        "subTopicId": 704,
                                        "subTopicTitle": "Encapsulation",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.372258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.372258"
                                    },
                                    {
                                        "subTopicId": 693,
                                        "subTopicTitle": " Overview of java API",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.368256",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.368256"
                                    },
                                    {
                                        "subTopicId": 694,
                                        "subTopicTitle": "Object class",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.368256",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.368256"
                                    },
                                    {
                                        "subTopicId": 695,
                                        "subTopicTitle": "String, String Buffer and String Builder",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.368256",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.368256"
                                    },
                                    {
                                        "subTopicId": 696,
                                        "subTopicTitle": "Exception Handling",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.369256",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.369256"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.367255",
                                "updatedDateAndTime": "2024-06-20T17:51:19.367255"
                            }
                        ],
                        "chapterPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/CHAPTER/%231+Part2_+Different+Types+of+Programming+Languages.mp4",
                        "chapterPreviewDuration": 7.34,
                        "createdDateAndTime": "2024-06-20T17:51:19.356253",
                        "updatedDateAndTime": "2024-06-20T17:51:19.356253"
                    },
                    {
                        "chapterId": 513,
                        "chapterTitle": "Selenium",
                        "chapterDescription": "",
                        "topics": [
                            {
                                "topicId": 1484,
                                "topicTitle": "WebDriver abstract methods",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.37926",
                                "updatedDateAndTime": "2024-06-20T17:51:19.37926"
                            },
                            {
                                "topicId": 1478,
                                "topicTitle": "Automation Testing",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 705,
                                        "subTopicTitle": "What is Automation Testing?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.373258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.373258"
                                    },
                                    {
                                        "subTopicId": 706,
                                        "subTopicTitle": "When we Switch to Automation Testing?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.374258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.374258"
                                    },
                                    {
                                        "subTopicId": 707,
                                        "subTopicTitle": "Why Automation testing?/Advantages",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.374258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.374258"
                                    },
                                    {
                                        "subTopicId": 708,
                                        "subTopicTitle": "Disadvantages",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.374258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.374258"
                                    },
                                    {
                                        "subTopicId": 709,
                                        "subTopicTitle": "Automation Testing Tools",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.375258",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.375258"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.373258",
                                "updatedDateAndTime": "2024-06-20T17:51:19.373258"
                            },
                            {
                                "topicId": 1479,
                                "topicTitle": "Selenium",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 710,
                                        "subTopicTitle": "What is Selenium",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.376259",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.376259"
                                    },
                                    {
                                        "subTopicId": 711,
                                        "subTopicTitle": " Why Selenium? / Advantages",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.376259",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.376259"
                                    },
                                    {
                                        "subTopicId": 712,
                                        "subTopicTitle": "What are its versions?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.376259",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.376259"
                                    },
                                    {
                                        "subTopicId": 713,
                                        "subTopicTitle": "What all OS, Browsers, and Programming Languages it Support?",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.377259",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.377259"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.375258",
                                "updatedDateAndTime": "2024-06-20T17:51:19.375258"
                            },
                            {
                                "topicId": 1480,
                                "topicTitle": "Java-Selenium Architecture",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.377259",
                                "updatedDateAndTime": "2024-06-20T17:51:19.377259"
                            },
                            {
                                "topicId": 1481,
                                "topicTitle": "WebDriver Architecture",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.378259",
                                "updatedDateAndTime": "2024-06-20T17:51:19.378259"
                            },
                            {
                                "topicId": 1482,
                                "topicTitle": "Basic Selenium Program to Open and close Browser",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.378259",
                                "updatedDateAndTime": "2024-06-20T17:51:19.378259"
                            },
                            {
                                "topicId": 1483,
                                "topicTitle": "Runtime Polymorphism Program in Selenium",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.378259",
                                "updatedDateAndTime": "2024-06-20T17:51:19.378259"
                            },
                            {
                                "topicId": 1485,
                                "topicTitle": "Locators",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.37926",
                                "updatedDateAndTime": "2024-06-20T17:51:19.37926"
                            },
                            {
                                "topicId": 1486,
                                "topicTitle": "Xpath, its Types and cases",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 714,
                                        "subTopicTitle": "Handling Multiple Elements",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.380259",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.380259"
                                    },
                                    {
                                        "subTopicId": 715,
                                        "subTopicTitle": "Handling Synchronisation issue by using implicitlyWait and Explicitly Wait",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.380259",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.380259"
                                    },
                                    {
                                        "subTopicId": 716,
                                        "subTopicTitle": "Handling Dropdown (static and dynamic)",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38126",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38126"
                                    },
                                    {
                                        "subTopicId": 717,
                                        "subTopicTitle": " Handling Keyboard and Mouse Actions",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38126",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38126"
                                    },
                                    {
                                        "subTopicId": 718,
                                        "subTopicTitle": " Taking Screenshot",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38126",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38126"
                                    },
                                    {
                                        "subTopicId": 719,
                                        "subTopicTitle": " Handling Disabled Element",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38226",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38226"
                                    },
                                    {
                                        "subTopicId": 720,
                                        "subTopicTitle": "  Performing Scroll down Action",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38226",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38226"
                                    },
                                    {
                                        "subTopicId": 721,
                                        "subTopicTitle": "WebElement Interface Methods",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38226",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38226"
                                    },
                                    {
                                        "subTopicId": 722,
                                        "subTopicTitle": " Handling Popups (web-based and Window-based)",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38326",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38326"
                                    },
                                    {
                                        "subTopicId": 723,
                                        "subTopicTitle": " Handling Frames",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38326",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38326"
                                    },
                                    {
                                        "subTopicId": 724,
                                        "subTopicTitle": "Handling New Windows/New Tabs",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38326",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38326"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.37926",
                                "updatedDateAndTime": "2024-06-20T17:51:19.37926"
                            },
                            {
                                "topicId": 1487,
                                "topicTitle": "Automation Framework",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 725,
                                        "subTopicTitle": "Stages and Types of Framework",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.38426",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.38426"
                                    },
                                    {
                                        "subTopicId": 726,
                                        "subTopicTitle": "Explanation of Hybrid Framework with a combination of Data-Driven, Key-Word Driven, Method-Driven",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.385261",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.385261"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.38426",
                                "updatedDateAndTime": "2024-06-20T17:51:19.38426"
                            },
                            {
                                "topicId": 1488,
                                "topicTitle": "TestNG",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 727,
                                        "subTopicTitle": "Fetching TestNG Report",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.385261",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.385261"
                                    },
                                    {
                                        "subTopicId": 728,
                                        "subTopicTitle": "Batch Execution",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.386261",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.386261"
                                    },
                                    {
                                        "subTopicId": 729,
                                        "subTopicTitle": "TestNG Flags and Annotations",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.386261",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.386261"
                                    },
                                    {
                                        "subTopicId": 730,
                                        "subTopicTitle": "Assertion",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.387261",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.387261"
                                    },
                                    {
                                        "subTopicId": 731,
                                        "subTopicTitle": "Grouping Execution",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.387261",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.387261"
                                    },
                                    {
                                        "subTopicId": 732,
                                        "subTopicTitle": "Data Parameterisation",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.387261",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.387261"
                                    },
                                    {
                                        "subTopicId": 733,
                                        "subTopicTitle": "Data driven through DataProvider",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.388261",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.388261"
                                    },
                                    {
                                        "subTopicId": 734,
                                        "subTopicTitle": "Parallel Execution",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.388261",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.388261"
                                    },
                                    {
                                        "subTopicId": 735,
                                        "subTopicTitle": "Distributed Parallel Execution",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.389263",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.389263"
                                    },
                                    {
                                        "subTopicId": 736,
                                        "subTopicTitle": " Cross Browser Parallel Execution",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.389263",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.389263"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.385261",
                                "updatedDateAndTime": "2024-06-20T17:51:19.385261"
                            },
                            {
                                "topicId": 1489,
                                "topicTitle": "Modular Frameworks",
                                "topicDescription": "",
                                "subTopics": [],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.390263",
                                "updatedDateAndTime": "2024-06-20T17:51:19.390263"
                            },
                            {
                                "topicId": 1490,
                                "topicTitle": "Hybrid Framework",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 737,
                                        "subTopicTitle": "Hybrid Framework Architecture",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.390263",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.390263"
                                    },
                                    {
                                        "subTopicId": 738,
                                        "subTopicTitle": "Introduction to Maven, GitHub and Jenkins",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.391262",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.391262"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.390263",
                                "updatedDateAndTime": "2024-06-20T17:51:19.390263"
                            },
                            {
                                "topicId": 1491,
                                "topicTitle": "Agile methodology",
                                "topicDescription": "",
                                "subTopics": [
                                    {
                                        "subTopicId": 739,
                                        "subTopicTitle": "Agile Scrum",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.392263",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.392263"
                                    },
                                    {
                                        "subTopicId": 740,
                                        "subTopicTitle": "Agile Kanban",
                                        "subTopicDescription": "",
                                        "subTopicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/SUBTOPIC/%233JDK+INSTALLATION.mp4",
                                        "subTopicPreviewDuration": 5.14,
                                        "createdDateAndTime": "2024-06-20T17:51:19.392263",
                                        "updatedDateAndTime": "2024-06-20T17:51:19.392263"
                                    }
                                ],
                                "topicPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/TOPIC/%232+Part3_+Why+java+is+a+platform-independent+or+architecture+neutral+language_.mp4",
                                "topicPreviewDuration": 9.42,
                                "createdDateAndTime": "2024-06-20T17:51:19.391262",
                                "updatedDateAndTime": "2024-06-20T17:51:19.391262"
                            }
                        ],
                        "chapterPreviewUrl": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/VIDEO/CHAPTER/%231+Part2_+Different+Types+of+Programming+Languages.mp4",
                        "chapterPreviewDuration": 7.34,
                        "createdDateAndTime": "2024-06-20T17:51:19.372258",
                        "updatedDateAndTime": "2024-06-20T17:51:19.372258"
                    }
                ],
                "createdDateAndTime": "2024-06-20T17:51:19.284235",
                "updatedDateAndTime": "2024-06-20T17:51:19.284235"
            }
        ]
    }
}
  return (
    <WebLayout page='unversityProgram' courseDetails={courseDetails.data}>
      <ProgramDescription courseDetails={courseDetails.data} />
      
      <CourseContent courseDetails={courseDetails} />
      <CoveredSkills/>
      <ToolsCovered/>
      <UniversityCertificate/>
      <FacultyDetails/>
      <CareerSupport/>
      <ProgramFees/>
      <ApplicationProcess/>
      <EligibilityCriteria/>
      <CoursesFaq courseDetails={courseDetails.data} />
    </WebLayout>
  )
}

export default UnversityProgramLandingPage