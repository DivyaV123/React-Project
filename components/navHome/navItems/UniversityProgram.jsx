
"use client";
import React, { useState } from "react";
import "./navitems.scss";
import { TUTION_PATH } from "@/lib/RouteConstants";
import Link from "next/link";
import { truncateText } from "@/lib/utils";
const UniversityProgram = () => {
  const courseResponse ={
    "statusCode": 200,
    "status": "OK",
    "data": [
        {
            "courseId": 1,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software%20Architecture/2024-06-13T12%3A47%3A39.596244600_softwareArchitecture.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software+Architecture/software_architecture+-white.svg",
            "title": "Software Architecture",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 48,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/System+Design+for+Architects/2024-06-14T18%3A41%3A00.343505800_System+design+for+architect.svg",
                    "title": "System Design for Architects",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/System%20Design%20for%20Architects/2024-06-18T14%3A50%3A52.135980700_System%20design%20for%20architects_image.png",
                    "description": " Learn system design fundamentals for effective architectural design.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/System%20Design%20for%20Architects/2024-06-18T14%3A50%3A52.367174700_System%20design%20for%20architects_homepage_image.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 45,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/UI%20Design%20for%20Architects/2024-06-18T12%3A21%3A20.233485100_ui%20design%20for%20architects.svg",
                    "title": "UI Design for Architects",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/UI%20Design%20for%20Architects/2024-06-18T12%3A27%3A09.208151600_UI%20design%20for%20architects_image.png",
                    "description": "Learn UI design essentials for enhanced architectural visualization and presentation.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/UI%20Design%20for%20Architects/2024-06-18T12%3A27%3A09.514777600_UI%20design%20for%20architects_homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 57,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Advance+System+Design+for+Senior+Architects/2024-06-14T18%3A35%3A01.674633900_Advance+System+design+for+senior+architect.svg",
                    "title": "Advance System Design For Senior Architects",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20System%20Design%20For%20Senior%20Architects/2024-06-18T15%3A04%3A28.486703300_Advance%20System%20Design%20for%20Senior%20Architects_image.png",
                    "description": "Enhance design skills through advanced system planning and integration techniques.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20System%20Design%20For%20Senior%20Architects/2024-06-18T15%3A04%3A28.694332_System%20Design%20For%20senior%20architects_homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 72,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cloud%20Platform/Infra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure/2024-06-18T15%3A53%3A08.024930600_Cloud%20PlatformInfra%20Architect%20-AWS%2C%20GCP%20%26%20Azure.svg",
                    "title": "Cloud Platform/Infra Architect - AWS, GCP & Azure",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure/2024-06-18T15%3A47%3A29.263251400_Cloud%20PlatformInfra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure-image.png",
                    "description": "Master cloud architecture on AWS, GCP, and Azure for scalable solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure/2024-06-18T15%3A47%3A29.634990900_Cloud%20PlatformInfra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 62,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cloud++Solution+Architect+-+AWS/2024-06-14T19%3A32%3A58.652393800_Cloud++Solution+Architect+-+AWS.svg",
                    "title": "Cloud Platform/Infra Architect - AWS",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20AWS/2024-06-18T15%3A08%3A47.601349100_Cloud%20PlatformInfra%20Architect%20-%20AWS-image.png",
                    "description": "Master AWS cloud architecture for scalable, secure, and efficient solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20AWS/2024-06-18T15%3A08%3A47.779000100_Cloud%20PlatformInfra%20Architect%20-%20AWS-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 68,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cloud+Solution++Architect+-+Azure/2024-06-14T19%3A35%3A20.183298200_Cloud+Solution++Architect+-+Azure.png",
                    "title": "Cloud Platform/Infra Architect - Azure",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20Azure/2024-06-18T15%3A17%3A33.178139900_Cloud%20PlatformInfra%20Architect%20-%20Azure-image.png",
                    "description": "Master Azure cloud architecture for scalable, secure, and efficient solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20Azure/2024-06-18T15%3A17%3A33.366395600_Cloud%20PlatformInfra%20Architect%20-%20Azure-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 71,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cloud+Solution+Architect+-+GCP/2024-06-14T19%3A34%3A04.328271400_Cloud+Solution+Architect+-+GCP.svg",
                    "title": "Cloud Platform/Infra Architect - GCP",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20GCP/2024-06-18T15%3A42%3A43.863973800_Cloud%20PlatformInfra%20Architect%20-%20GCP-image.png",
                    "description": "Master GCP cloud architecture for scalable, secure, and efficient solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20GCP/2024-06-18T15%3A42%3A44.103297200_Cloud%20PlatformInfra%20Architect%20-%20GCP-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 67,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Advance+Devops+Course+for+Architects/2024-06-14T19%3A36%3A37.552340900_Advance+Devops+Course+for+Architects.svg",
                    "title": "Advance Devops Course for Architects",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20Devops%20Course%20for%20Architects/2024-06-18T15%3A15%3A08.207214300_Advance%20Devops%20Course%20for%20Architects-image.png",
                    "description": "Comprehensive DevOps training tailored for aspiring software architects.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20Devops%20Course%20for%20Architects/2024-06-18T15%3A15%3A08.479533200_Advance%20Devops%20Course%20for%20Architects-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 66,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Advance+Data+Structure/2024-06-14T19%3A38%3A21.229020400_Advance+Data+Structure.svg",
                    "title": "Advance Data Structure",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20Data%20Structure/2024-06-18T15%3A11%3A57.842787500_Advance%20Data%20Structure-image.png",
                    "description": " Explore advanced data structures for optimized algorithm design and efficiency",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20Data%20Structure/2024-06-18T15%3A11%3A58.102461700_Advance%20Data%20Structure-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 75,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cyber%20Security%20Architecture%20%26%20Design/2024-06-22T13%3A41%3A19.306823500_Cyber%20Security%20Architecture%20%26%20Design.svg",
                    "title": "Cyber Security Architecture & Design",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cyber%20Security%20Architecture%20%26%20Design/2024-06-20T09%3A16%3A36.586696600_Cyber%20Security%20Architecture%20%26%20Design-image.png",
                    "description": "Master cyber security architecture and design for robust, secure systems.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cyber%20Security%20Architecture%20%26%20Design/2024-06-20T09%3A16%3A36.860767400_Cyber%20Security%20Architecture%20%26%20Design-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
        {
            "courseId": 2,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software+Development/2024-06-05T11%3A30%3A30.821485400_SoftwareDevelopment.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software+Development/software_development-white.svg",
            "title": "Software Development",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 107,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Java+Full+Stack/2024-05-27T12%3A50%3A49.194180900_4_Java+Full+Stack.svg",
                    "title": "Java Full Stack",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Java+Full+Stack/2024-06-22T13%3A28%3A18.550182400_java+full+stack+image.png",
                    "description": "Master the full spectrum of web development with comprehensive training in both front-end and back-end technologies, leveraging Java, Spring Framework, modern JavaScript frameworks to build scalable and efficient applications.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Java+Full+Stack/2024-06-22T13%3A28%3A20.778559800_java+full+stack+home+page+image.png",
                    "modes": [
                        "OFFLINECLASSES"
                    ]
                },
                {
                    "courseResponseId": 110,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Python+Full+Stack/2024-06-14T19%3A45%3A26.964961600_python+full+stack.svg",
                    "title": "Python Full Stack",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Python%20Full%20Stack/2024-06-26T12%3A45%3A09.348866600_Python%20Full%20Stack-image.png",
                    "description": "Learn to build dynamic web applications using Python and Django.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Python%20Full%20Stack/2024-06-26T12%3A45%3A10.436741800_Python%20Full%20Stack-homepage.png",
                    "modes": [
                        "OFFLINECLASSES"
                    ]
                },
                {
                    "courseResponseId": 64,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Data%20Science%20with%20Python/2024-06-18T14%3A40%3A01.547209100_Data%20Science%20with%20Python.svg",
                    "title": "Data Science with Python",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20with%20Python/2024-06-18T16%3A58%3A07.524724700_Data%20Science%20with%20Python-image.png",
                    "description": " Learn practical data science skills using Python for real-world analysis.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20with%20Python/2024-06-18T16%3A58%3A07.793227700_Data%20Science%20with%20Python-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 109,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/MERN+Stack/2024-05-27T12%3A51%3A17.761358900_6_MERN+Stack.svg",
                    "title": "MERN Full Stack",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/MERN%20Full%20Stack/2024-06-24T15%3A28%3A53.857589300_Mern%20stack%20-%20image.png",
                    "description": "Master the full spectrum of web development with comprehensive training in both front-end technologies, leveraging JavaScript, React Library, modern TypeScript and frameworks like express js with node to build scalable and efficient applications.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/MERN%20Full%20Stack/2024-06-24T15%3A28%3A54.280740500_Mern%20Stack_HomePage.png",
                    "modes": [
                        "OFFLINECLASSES"
                    ]
                },
                {
                    "courseResponseId": 108,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/MEAN+Stack/2024-05-27T12%3A51%3A40.379500300_7_MEAN+Stack.svg",
                    "title": "MEAN Full Stack",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/MEAN%20Full%20Stack/2024-06-24T15%3A28%3A11.427802_MeanStack_Image.png",
                    "description": "Master the full spectrum of web development with comprehensive training in both front-end technologies, leveraging JavaScript, Angular Library, modern TypeScript and frameworks like express js with node to build scalable and efficient applications",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/MEAN%20Full%20Stack/2024-06-24T15%3A28%3A11.806942_MeanStack_HomePage.png",
                    "modes": [
                        "OFFLINECLASSES"
                    ]
                },
                {
                    "courseResponseId": 69,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Data+Structure+%26+Algorithm/2024-06-18T14%3A29%3A45.039262400_data+structure+-icon.svg",
                    "title": "Data Structure & Algorithm",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Structure%20%26%20Algorithm/2024-06-18T16%3A34%3A42.340371600_Data%20Structure%20%26%20Algorithm-image.png",
                    "description": " Master essential data structures and algorithms for efficient problem-solving skills.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Structure%20%26%20Algorithm/2024-06-18T16%3A34%3A42.591750400_Data%20Structure%20%26%20Algorithm-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 106,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Advanced%20React%20JS%20/2024-06-24T15%3A24%3A47.338930400_Advanced%20React%20JS_icon.svg",
                    "title": "Advanced React JS ",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advanced%20React%20JS%20/2024-06-24T15%3A32%3A07.466797900_Advanced%20React_image.png",
                    "description": " Our React JS course covers the fundamentals of React, including components, state, and props, and advanced topics like hooks, context, and routing.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advanced%20React%20JS%20/2024-06-24T15%3A32%3A07.801929_Advanced%20React_homePage.png",
                    "modes": [
                        "OFFLINECLASSES"
                    ]
                },
                {
                    "courseResponseId": 105,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Angular/2024-06-24T15%3A25%3A18.792644400_angular_icon.svg",
                    "title": "Angular",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Angular/2024-06-24T15%3A33%3A18.936178700_Advanced%20Angular-image.png",
                    "description": "The Angular course provides a comprehensive introduction to building dynamic web applications using the Angular framework. It covers core concepts like data binding, directives, controllers, and services",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Angular/2024-06-24T15%3A33%3A19.395339700_Advanced%20Angular_homePage.png",
                    "modes": [
                        "OFFLINECLASSES"
                    ]
                },
                {
                    "courseResponseId": 66,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Advance+Data+Structure/2024-06-14T19%3A38%3A21.229020400_Advance+Data+Structure.svg",
                    "title": "Advance Data Structure",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20Data%20Structure/2024-06-18T15%3A11%3A57.842787500_Advance%20Data%20Structure-image.png",
                    "description": " Explore advanced data structures for optimized algorithm design and efficiency",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20Data%20Structure/2024-06-18T15%3A11%3A58.102461700_Advance%20Data%20Structure-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 48,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/System+Design+for+Architects/2024-06-14T18%3A41%3A00.343505800_System+design+for+architect.svg",
                    "title": "System Design for Architects",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/System%20Design%20for%20Architects/2024-06-18T14%3A50%3A52.135980700_System%20design%20for%20architects_image.png",
                    "description": " Learn system design fundamentals for effective architectural design.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/System%20Design%20for%20Architects/2024-06-18T14%3A50%3A52.367174700_System%20design%20for%20architects_homepage_image.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 45,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/UI%20Design%20for%20Architects/2024-06-18T12%3A21%3A20.233485100_ui%20design%20for%20architects.svg",
                    "title": "UI Design for Architects",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/UI%20Design%20for%20Architects/2024-06-18T12%3A27%3A09.208151600_UI%20design%20for%20architects_image.png",
                    "description": "Learn UI design essentials for enhanced architectural visualization and presentation.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/UI%20Design%20for%20Architects/2024-06-18T12%3A27%3A09.514777600_UI%20design%20for%20architects_homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
        {
            "courseId": 3,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software%20Testing/2024-06-13T12%3A50%3A08.645801400_Softwaretesting.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Software+Testing/Software_testing-white.svg",
            "title": "Software Testing",
            "subCourse": [
                {
                    "subCourseId": 1,
                    "icon": null,
                    "title": "Software Testing Master Course",
                    "subCourseResponse": [
                        {
                            "subCourseResponseId": 101,
                            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Data%20Science%20with%20Python/2024-06-18T14%3A40%3A01.547209100_Data%20Science%20with%20Python.svg",
                            "title": "Software Testing Master Course with Python Selenium",
                            "description": "Master software testing with in-depth Python Selenium training for automated testing.",
                            "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Software%20Testing%20Master%20Course%20with%20Python%20Selenium/2024-06-24T12%3A28%3A16.097773600_Software%20Testing%20Master%20Course%20with%20Python%20Selenium-homepage.png",
                            "modes": [
                                "OFFLINECLASSES"
                            ]
                        },
                        {
                            "subCourseResponseId": 102,
                            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Java+Full+Stack/2024-05-27T12%3A50%3A49.194180900_4_Java+Full+Stack.svg",
                            "title": "Software Testing Master Course with Java Selenium",
                            "description": "Master software testing with in-depth Java Selenium training for automated testing.",
                            "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Software%20Testing%20Master%20Course%20with%20Java%20Selenium/2024-06-24T12%3A27%3A46.491110_Software%20Testing%20Master%20Course%20with%20Java%20Selenium-homepage.png",
                            "modes": [
                                "OFFLINECLASSES"
                            ]
                        }
                    ]
                },
                {
                    "subCourseId": 3,
                    "icon": null,
                    "title": "Advance Test Automation - SDET",
                    "subCourseResponse": [
                        {
                            "subCourseResponseId": 96,
                            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Java+Full+Stack/2024-05-27T12%3A50%3A49.194180900_4_Java+Full+Stack.svg",
                            "title": "Advanced Java Selenium Automation",
                            "description": "Master advanced Selenium techniques with Java for robust and scalable test automation.",
                            "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advanced%20Java%20Selenium%20Automation/2024-06-24T12%3A27%3A03.665673800_Advanced%20Java%20Selenium%20Automation-homepage.png",
                            "modes": [
                                "OFFLINECLASSES"
                            ]
                        }
                    ]
                },
                {
                    "subCourseId": 2,
                    "icon": null,
                    "title": "Automation With  Selenium",
                    "subCourseResponse": []
                },
                {
                    "subCourseId": 8,
                    "icon": null,
                    "title": "Manual Testing ",
                    "subCourseResponse": []
                },
                {
                    "subCourseId": 4,
                    "icon": null,
                    "title": "Automation Architect",
                    "subCourseResponse": []
                },
                {
                    "subCourseId": 5,
                    "icon": null,
                    "title": "WebSerivce / API Testing",
                    "subCourseResponse": [
                        {
                            "subCourseResponseId": 100,
                            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/API/Web%20Services%20Automation%20Testing/2024-06-22T13%3A37%3A48.271745400_APIWeb%20Services%20Automation%20Testing.svg",
                            "title": "API/Web Services Automation Testing",
                            "description": "Learn to automate API/Web Services testing for robust and efficient software validation",
                            "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/API/Web%20Services%20Automation%20Testing/2024-06-24T12%3A26%3A17.546756100_APIWeb%20Services%20Automation%20Testing-homepage.png",
                            "modes": [
                                "OFFLINECLASSES"
                            ]
                        }
                    ]
                },
                {
                    "subCourseId": 9,
                    "icon": null,
                    "title": "Performance Testing",
                    "subCourseResponse": []
                },
                {
                    "subCourseId": 6,
                    "icon": null,
                    "title": "Mobile App Testing",
                    "subCourseResponse": []
                },
                {
                    "subCourseId": 7,
                    "icon": null,
                    "title": "Security Testing",
                    "subCourseResponse": []
                },
                {
                    "subCourseId": 10,
                    "icon": null,
                    "title": "Specialized Testing",
                    "subCourseResponse": []
                },
                {
                    "subCourseId": 11,
                    "icon": null,
                    "title": "Domain Specific",
                    "subCourseResponse": []
                },
                {
                    "subCourseId": 12,
                    "icon": null,
                    "title": "ISTQB Certification",
                    "subCourseResponse": []
                }
            ],
            "courseResponse": []
        }, 
        {
            "courseId": 4,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Devops/2024-06-14T18%3A07%3A09.805790800_Devops.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Devops/devops-white.svg",
            "title": "Devops",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 44,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Devops%20Master%20Course%20/2024-06-18T14%3A34%3A42.633441_Devops%20Master%20Course.svg",
                    "title": "Devops Master Course ",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Devops%20Master%20Course%20/2024-06-18T16%3A39%3A57.193744_Devops%20Master%20Course-image.png",
                    "description": "Empower with Devops mastery for seamless project integration and delivery.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Devops%20Master%20Course%20/2024-06-18T16%3A39%3A57.473491100_Devops%20Master%20Course-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 67,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Advance+Devops+Course+for+Architects/2024-06-14T19%3A36%3A37.552340900_Advance+Devops+Course+for+Architects.svg",
                    "title": "Advance Devops Course for Architects",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20Devops%20Course%20for%20Architects/2024-06-18T15%3A15%3A08.207214300_Advance%20Devops%20Course%20for%20Architects-image.png",
                    "description": "Comprehensive DevOps training tailored for aspiring software architects.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Advance%20Devops%20Course%20for%20Architects/2024-06-18T15%3A15%3A08.479533200_Advance%20Devops%20Course%20for%20Architects-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
        {
            "courseId": 5,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Cyber%20Security/2024-06-14T18%3A07%3A42.700348700_cyber%20security.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Cyber+Security/cyber_security-white.svg",
            "title": "Cyber Security",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 74,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cyber%20Security%20Master%20Course/2024-06-22T13%3A39%3A43.789087700_Cyber%20Security%20Master%20Course.svg",
                    "title": "Cyber Security Master Course",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cyber%20Security%20Master%20Course/2024-06-20T09%3A15%3A48.492281600_Cyber%20Security%20Master%20Course-image.png",
                    "description": "Comprehensive course covering essential cyber security concepts, techniques, and practices",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cyber%20Security%20Master%20Course/2024-06-20T09%3A15%3A48.851374600_Cyber%20Security%20Master%20Course-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 75,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cyber%20Security%20Architecture%20%26%20Design/2024-06-22T13%3A41%3A19.306823500_Cyber%20Security%20Architecture%20%26%20Design.svg",
                    "title": "Cyber Security Architecture & Design",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cyber%20Security%20Architecture%20%26%20Design/2024-06-20T09%3A16%3A36.586696600_Cyber%20Security%20Architecture%20%26%20Design-image.png",
                    "description": "Master cyber security architecture and design for robust, secure systems.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cyber%20Security%20Architecture%20%26%20Design/2024-06-20T09%3A16%3A36.860767400_Cyber%20Security%20Architecture%20%26%20Design-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
        {
            "courseId": 8,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/AI%20/%20ML/2024-06-14T18%3A08%3A49.418893_AI-ML.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/AI+/+ML/AI_ML-white.svg",
            "title": "AI / ML",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 50,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/AI/ML%20Master%20Course/2024-06-18T14%3A44%3A49.420728_AIML%20Master%20Course.svg",
                    "title": "AI/ML Master Course",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/AI/ML%20Master%20Course/2024-06-18T17%3A00%3A41.867121_AIML%20Master%20Course-image.png",
                    "description": "Advance your mastery in AI and ML technologies for complex solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/AI/ML%20Master%20Course/2024-06-18T17%3A00%3A42.126292200_AIML%20Master%20Course-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 49,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/AI/ML%20with%20Python%20Course/2024-06-18T14%3A44%3A13.709485800_AIML%20with%20Python%20Course.svg",
                    "title": "AI/ML with Python Course",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/AI/ML%20with%20Python%20Course/2024-06-18T17%3A01%3A40.841061200_AIML%20with%20Python%20Course-image.png",
                    "description": "Master AI and ML techniques using Python to build intelligent systems.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/AI/ML%20with%20Python%20Course/2024-06-18T17%3A01%3A41.078707100_AIML%20with%20Python%20Course-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 47,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/AI/ML%20with%20Neural%20Networks%20and%20Deep%20Learning%20Course/2024-06-18T14%3A42%3A22.041556200_AIML%20with%20Neural%20Networks%20and%20Deep%20Learning%20Course.svg",
                    "title": "AI/ML with Neural Networks and Deep Learning Course",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/AI/ML%20with%20Neural%20Networks%20and%20Deep%20Learning%20Course/2024-06-18T16%3A59%3A47.954106700_AIML%20with%20Neural%20Networks%20and%20Deep%20Learning%20Course-image.png",
                    "description": "Master neural networks and deep learning frameworks for AI solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/AI/ML%20with%20Neural%20Networks%20and%20Deep%20Learning%20Course/2024-06-18T16%3A59%3A48.272882500_AIML%20with%20Neural%20Networks%20and%20Deep%20Learning%20Course-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
        {
            "courseId": 7,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Data%20Science%20/2024-06-14T18%3A08%3A31.583781700_Data%20Science.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Data+Science+/Data_Science-white.svg",
            "title": "Data Science ",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 70,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Data%20Science%20Master%20Course/2024-06-18T17%3A08%3A48.810046100_Data%20Science%20Master%20Course.svg",
                    "title": "Data Science Master Course",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20Master%20Course/2024-06-18T17%3A03%3A10.506417800_Data%20Science%20Master%20Course-image.png",
                    "description": "Master advanced data science techniques and tools with Python.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20Master%20Course/2024-06-18T17%3A03%3A10.769702700_Data%20Science%20Master%20Course-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 64,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Data%20Science%20with%20Python/2024-06-18T14%3A40%3A01.547209100_Data%20Science%20with%20Python.svg",
                    "title": "Data Science with Python",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20with%20Python/2024-06-18T16%3A58%3A07.524724700_Data%20Science%20with%20Python-image.png",
                    "description": " Learn practical data science skills using Python for real-world analysis.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20with%20Python/2024-06-18T16%3A58%3A07.793227700_Data%20Science%20with%20Python-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 63,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Data%20Science%20with%20Data%20Analytics/2024-06-18T14%3A38%3A28.882829800_Data%20Science%20with%20Data%20Analytics.svg",
                    "title": "Data Science with Data Analytics",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20with%20Data%20Analytics/2024-06-18T17%3A04%3A32.246585100_Data%20Science%20with%20Data%20Analytics-image.png",
                    "description": " Master data analytics techniques within the data science field.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20with%20Data%20Analytics/2024-06-18T17%3A04%3A32.610081800_Data%20Science%20with%20Data%20Analytics-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 61,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Data%20Science%20with%20Neural%20Networks%20and%20Deep%20Learning/2024-06-18T14%3A37%3A22.620829900_Data%20Science%20with%20Neural%20Networks%20and%20Deep%20Learning.svg",
                    "title": "Data Science with Neural Networks and Deep Learning",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20with%20Neural%20Networks%20and%20Deep%20Learning/2024-06-18T16%3A47%3A25.723944100_Data%20Science%20with%20Neural%20Networks%20and%20Deep%20Learning-image.png",
                    "description": " Harness neural networks and deep learning for cutting-edge data science.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Data%20Science%20with%20Neural%20Networks%20and%20Deep%20Learning/2024-06-18T16%3A47%3A25.961413_Data%20Science%20with%20Neural%20Networks%20and%20Deep%20Learning-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
        {
            "courseId": 6,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Cloud%20Computing/2024-06-14T18%3A08%3A11.196257100_Cloud%20Computing.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Cloud+Computing/cloud_computing-white.svg",
            "title": "Cloud Computing",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 65,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cloud%20Computing%20Master%20Course/2024-06-18T14%3A46%3A40.967392200_Cloud%20Computing%20Master%20Course.svg",
                    "title": "Cloud Computing Master Course",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Computing%20Master%20Course/2024-06-18T16%3A43%3A36.401916200_Cloud%20Computing%20Master%20Course-image.png",
                    "description": " Comprehensive mastery of cloud computing fundamentals, architectures, and advanced applications.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Computing%20Master%20Course/2024-06-18T16%3A43%3A36.673013600_Cloud%20Computing%20Master%20Course-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 72,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cloud%20Platform/Infra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure/2024-06-18T15%3A53%3A08.024930600_Cloud%20PlatformInfra%20Architect%20-AWS%2C%20GCP%20%26%20Azure.svg",
                    "title": "Cloud Platform/Infra Architect - AWS, GCP & Azure",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure/2024-06-18T15%3A47%3A29.263251400_Cloud%20PlatformInfra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure-image.png",
                    "description": "Master cloud architecture on AWS, GCP, and Azure for scalable solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure/2024-06-18T15%3A47%3A29.634990900_Cloud%20PlatformInfra%20Architect%20-%20AWS%2C%20GCP%20%26%20Azure-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 62,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cloud++Solution+Architect+-+AWS/2024-06-14T19%3A32%3A58.652393800_Cloud++Solution+Architect+-+AWS.svg",
                    "title": "Cloud Platform/Infra Architect - AWS",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20AWS/2024-06-18T15%3A08%3A47.601349100_Cloud%20PlatformInfra%20Architect%20-%20AWS-image.png",
                    "description": "Master AWS cloud architecture for scalable, secure, and efficient solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20AWS/2024-06-18T15%3A08%3A47.779000100_Cloud%20PlatformInfra%20Architect%20-%20AWS-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 68,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cloud+Solution++Architect+-+Azure/2024-06-14T19%3A35%3A20.183298200_Cloud+Solution++Architect+-+Azure.png",
                    "title": "Cloud Platform/Infra Architect - Azure",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20Azure/2024-06-18T15%3A17%3A33.178139900_Cloud%20PlatformInfra%20Architect%20-%20Azure-image.png",
                    "description": "Master Azure cloud architecture for scalable, secure, and efficient solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20Azure/2024-06-18T15%3A17%3A33.366395600_Cloud%20PlatformInfra%20Architect%20-%20Azure-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 71,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Cloud+Solution+Architect+-+GCP/2024-06-14T19%3A34%3A04.328271400_Cloud+Solution+Architect+-+GCP.svg",
                    "title": "Cloud Platform/Infra Architect - GCP",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20GCP/2024-06-18T15%3A42%3A43.863973800_Cloud%20PlatformInfra%20Architect%20-%20GCP-image.png",
                    "description": "Master GCP cloud architecture for scalable, secure, and efficient solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Cloud%20Platform/Infra%20Architect%20-%20GCP/2024-06-18T15%3A42%3A44.103297200_Cloud%20PlatformInfra%20Architect%20-%20GCP-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
        {
            "courseId": 9,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Project%20Mangement/2024-06-14T18%3A09%3A10.865619800_Project%20Management.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Project+Mangement/Project_Management-white.svg",
            "title": "Project Mangement",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 89,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Project%20Management%20Master%20Course%20-%20PMP/2024-06-22T13%3A46%3A50.768848200_Project%20Management%20Master%20Course%20-%20PMP.svg",
                    "title": "Project Management Master Course - PMP",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Project%20Management%20Master%20Course%20-%20PMP/2024-06-20T09%3A19%3A50.010626800_Project%20Management%20Master%20Course%20-%20PMP-image.png",
                    "description": " Master cyber security architecture and design for robust, secure systems.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Project%20Management%20Master%20Course%20-%20PMP/2024-06-20T09%3A19%3A50.349714600_Project%20Management%20Master%20Course%20-%20PMP-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 77,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Project%20Management%20using%20Jira/2024-06-22T13%3A44%3A14.866783600_Project%20Management%20using%20Jira.svg",
                    "title": "Project Management using Jira",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Project%20Management%20using%20Jira/2024-06-20T09%3A17%3A29.969476900_Project%20Management%20using%20Jira-image.png",
                    "description": "Master project management with Jira for efficient team collaboration and productivity.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Project%20Management%20using%20Jira/2024-06-20T09%3A17%3A30.150524_Project%20Management%20using%20Jira-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 78,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Project%20Management%20using%20Zoho/2024-06-22T13%3A45%3A05.489966600_Project%20Management%20using%20Zoho.svg",
                    "title": "Project Management using Zoho",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Project%20Management%20using%20Zoho/2024-06-20T09%3A18%3A17.354711200_Project%20Management%20using%20Zoho-image.png",
                    "description": "Efficient project management using Zoho tools for enhanced team collaboration.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Project%20Management%20using%20Zoho/2024-06-20T09%3A18%3A17.537756400_Project%20Management%20using%20Zoho-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 79,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Project%20Management%20using%20Asana/2024-06-22T13%3A45%3A48.956464100_Project%20Management%20using%20Asana.svg",
                    "title": "Project Management using Asana",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Project%20Management%20using%20Asana/2024-06-20T09%3A19%3A03.190540900_Project%20Management%20using%20Asana-image.png",
                    "description": "Efficient project management with Asana for streamlined team collaboration and productivity.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Project%20Management%20using%20Asana/2024-06-20T09%3A19%3A03.387591500_Project%20Management%20using%20Asana-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
        {
            "courseId": 10,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Agile%20%26%20Scurm/2024-06-14T18%3A09%3A29.476196300_Agile.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Agile+%26+Scurm/Agile_And_Scrum-white.svg",
            "title": "Agile & Scurm",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 80,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Certified%20Scrum%20Master/2024-06-22T13%3A49%3A34.561864_Certified%20Scrum%20Master.svg",
                    "title": "Certified Scrum Master",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Certified%20Scrum%20Master/2024-06-20T09%3A20%3A46.917317_Certified%20Scrum%20Master-image.png",
                    "description": "Master Scrum principles and practices to lead agile teams effectively.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Certified%20Scrum%20Master/2024-06-20T09%3A20%3A47.227397200_Certified%20Scrum%20Master-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 81,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Certified%20Product%20Owner/2024-06-22T13%3A50%3A54.183662200_Certified%20Product%20Owner.svg",
                    "title": "Certified Product Owner",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Certified%20Product%20Owner/2024-06-20T09%3A21%3A23.211686200_Certified%20Product%20Owner-image.png",
                    "description": " Master product ownership to drive project success and deliver customer value.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Certified%20Product%20Owner/2024-06-20T09%3A21%3A23.493758600_Certified%20Product%20Owner-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 82,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Certified%20Product%20SAFe%20Agile/2024-06-22T13%3A51%3A29.811677300_Certified%20Product%20SAFe%20Agile.svg",
                    "title": "Certified Product SAFe Agile",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Certified%20Product%20SAFe%20Agile/2024-06-20T09%3A21%3A55.590043900_Certified%20Product%20SAFe%20Agile-homepage.png",
                    "description": " Master product ownership to drive project success and deliver customer value.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Certified%20Product%20SAFe%20Agile/2024-06-20T09%3A21%3A55.341980100_Certified%20Product%20SAFe%20Agile-image.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
      
        {
            "courseId": 12,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Aboard%20Studies/2024-06-14T18%3A10%3A08.811199200_Abroad%20Studies.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Aboard+Studies/Abroad_Studies-white.svg",
            "title": "Aboard Studies",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 87,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/GRE/2024-06-24T15%3A45%3A31.274435200_GRE_icon.svg",
                    "title": "GRE",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/GRE/2024-06-20T10%3A33%3A45.228309400_GRE-image.png",
                    "description": "Prepare comprehensively for the Graduate Record Examination (GRE) for graduate school admissions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/GRE/2024-06-20T10%3A33%3A45.492377600_GRE-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 91,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/GMAT/2024-06-24T15%3A47%3A01.495256900_GMAT.svg",
                    "title": "GMAT",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/GMAT/2024-06-20T10%3A35%3A32.223929200_GMAT-image.png",
                    "description": "Comprehensive preparation for GMAT exam to achieve your desired score.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/GMAT/2024-06-20T10%3A35%3A32.505002100_GMAT-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 88,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IELTS/2024-06-24T15%3A46%3A07.576836900_IELTS.svg",
                    "title": "IELTS",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/IELTS/2024-06-20T10%3A34%3A28.396453900_IELTS-image.png",
                    "description": "Comprehensive preparation for the IELTS exam to achieve your desired band score.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/IELTS/2024-06-20T10%3A34%3A28.715535500_IELTS-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 90,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/TOEFL/2024-06-24T15%3A46%3A37.312804600_TOEFL.svg",
                    "title": "TOEFL",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/TOEFL/2024-06-20T10%3A35%3A01.607026500_TOEFL-image.png",
                    "description": "Comprehensive preparation for TOEFL exam to achieve your desired score.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/TOEFL/2024-06-20T10%3A35%3A01.908103800_TOEFL-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
        {
            "courseId": 11,
            "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Support/2024-06-14T18%3A09%3A43.484132800_Support.svg",
            "alternativeIcon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/CATEGORY/Support/Support-white.svg",
            "title": "Support",
            "subCourse": [],
            "courseResponse": [
                {
                    "courseResponseId": 85,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Networking%20Support/2024-06-24T16%3A08%3A36.356523300_Networking%20Support_icon.svg",
                    "title": "Networking Support",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Networking%20Support/2024-06-20T10%3A19%3A45.072258400_Networking%20Support-image.png",
                    "description": " Learn essential skills for configuring and troubleshooting computer networks effectively.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Networking%20Support/2024-06-20T10%3A19%3A45.340327700_Networking%20Support-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 83,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Technical%20Support/2024-06-24T15%3A49%3A13.734195200_Technical%20Support.svg",
                    "title": "Technical Support",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Technical%20Support/2024-06-20T09%3A22%3A41.736956300_Technical%20Support-image.png",
                    "description": "Master technical support skills to troubleshoot and resolve customer issues efficiently.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Technical%20Support/2024-06-20T09%3A22%3A42.106052_Technical%20Support-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 84,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/Desktop/Laptop%20Support/2024-06-24T15%3A49%3A37.852959400_DesktopLaptop%20Support_icon.svg",
                    "title": "Desktop/Laptop Support",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Desktop/Laptop%20Support/2024-06-20T10%3A17%3A04.547821100_DesktopLaptop%20Support-image.png",
                    "description": "Essential skills for providing effective desktop support and troubleshooting solutions.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/Desktop/Laptop%20Support/2024-06-20T10%3A17%3A04.827892900_DesktopLaptop%20Support-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                },
                {
                    "courseResponseId": 86,
                    "icon": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IT%20Admin/2024-06-24T16%3A08%3A57.105670300_IT%20Admin_icon.svg",
                    "title": "IT Admin",
                    "image_url": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/IT%20Admin/2024-06-20T10%3A23%3A11.122448800_IT%20Admin-image.png",
                    "description": "Essential skills for managing and maintaining IT infrastructure and operations.",
                    "homePageCourseImage": "https://qspiderwebsite.s3.ap-south-1.amazonaws.com/COURSE/IMAGE/IT%20Admin/2024-06-20T10%3A23%3A11.429527800_IT%20Admin-homepage.png",
                    "modes": [
                        "SELFPACED",
                        "EXPERIENTIALLEARNING"
                    ]
                }
            ]
        },
    ]
}
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const getAllCourses = courseResponse?.data
  const subCourse = getAllCourses?.[hoveredIndex]?.subCourse?.length > 0 && getAllCourses?.[hoveredIndex]?.subCourse
  const subCourseContent = subCourse?.[hoveredItemIndex]?.subCourseResponse?.length > 0 && subCourse?.[hoveredItemIndex]?.subCourseResponse
  const finalContent = getAllCourses?.[hoveredIndex]?.courseResponse?.length > 0 ? getAllCourses?.[hoveredIndex]?.courseResponse?.filter(ele => ele) : subCourseContent
  return (
    <div className="flex w-[81.09vw]  lg:h-[500px] 3xl:h-[660px] overflow-auto myscrollbar ">
      <div className="menuSidebar pt-2  xl:w-[18.75vw] 2xl:w-[14.75vw]  3xl:w-[11.75vw] ">
        {getAllCourses?.map((courseItem, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            className={`flex ${hoveredIndex === index ? 'menuItem' : 'menuItemdisable'}  pl-4 pr-2 items-center`}
          >
            <img src={courseItem.icon} />
            <div className="flex justify-between grow">
              <button className="p-2 text-sm">{courseItem.title}</button>
              <img src="/arrowIconDark.svg" className={`${hoveredIndex === index ? 'visible' : 'invisible'} w-4`} />
            </div>
          </div>
        ))}
      </div>
      <div className="xl:w-[62.34vw] 2xl:w-[66.34vw] 3xl:w-[70.34vw] flex ">
        {hoveredIndex !== null && getAllCourses?.[hoveredIndex]?.subCourse?.length > 0 && (
          <div className="xl:w-[20.31vw] 2xl:w-[18.5vw]  3xl:w-[13.6vw]  pt-2 menuSidebar">
            {getAllCourses?.[hoveredIndex]?.subCourse?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`flex justify-between grow pl-2 ${hoveredItemIndex === itemIndex ? 'menuItem' : 'menuItemdisable'} pr-2 items-center`}
                onMouseEnter={() => setHoveredItemIndex(itemIndex)}
                onMouseLeave={() => { }}
              >
                <img src={item?.icon} />
                <div className="flex justify-between grow">
                  <button className="p-2 text-sm">{item?.title}</button>
                  <img src="/arrowIconDark.svg" className={`${hoveredItemIndex === itemIndex ? 'visible' : 'invisible'} w-4`} />
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`${hoveredIndex !== null && subCourse
            ? "courselist"
            : "coursefull"
            }   flex flex-wrap py-[2.222vh] px-[1.25vw]  h-fit gap-[0.938rem] 2xl:gap-[0.706rem] 3xl:p-4 3xl:gap-[0.813]`}
        >
          {finalContent?.length > 0 &&
            finalContent?.map(
              (content, index) => (
                <Link className={`${hoveredIndex !== null && subCourse
                  ? "courseMedium"
                  : "universityInitial"
                  }   branchMenuCard bg-[#FFFFFF] w-[19.063vw] rounded-xl px-[1.389vh] py-[0.781vw]`} 
                  href={`/universityPrograms/${content?.courseResponseId ? content?.courseResponseId : content?.subCourseResponseId}`}>
                   <div
                  key={index}
                  className="w-full flex flex-col h-full justify-evenly"
                >
                  <div className="flex  gap-[1vh] flex-col items-start">
                    <img className="h-8 w-8" src={content?.icon} />
                    <h3 className="text-left  text-[0.938vw] font-bold items-center flex pt-1">
                      {content?.title ? content?.title : ""}
                    </h3>
                  </div>
                  {/* <div className="">
                    <article className=" text-[0.859vw] titleText pt-[1.667vh]">{truncateText(content?.description, 70)}</article>
                  </div> */}
                  <div className="flex justify-between relative top-[1vh] pb-[1vh]">
                <p className=" text-[0.938vw] ">12 Months</p>
                <p className=" text-[#12B347] text-[0.938vw] h-[3.378vh] w-[4.922vw] flex justify-center gap-[0.5vw] items-center bg-[#12B3471F]">  <span className=" h-[8px] w-[8px] bg-[#12B347] rounded-full"></span> Online</p>

                </div>
                </div>
                
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityProgram;
