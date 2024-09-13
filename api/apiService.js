export const getBaseUrl = () => process.env.NEXT_PUBLIC_PROD2_URL;
export const getPlacementUrl = () => process.env.NEXT_PUBLIC_PROD_URL;
export const getStatisticsUrl = () => process.env.NEXT_PUBLIC_PLACEMENT_URL;
export const getWebsiteUrl = () => process.env.NEXT_PUBLIC_QSPIDERS_URL;
export const getEnrollUrl = () => process.env.NEXT_PUBLIC_GOLANG_ENROLL_URL;
export const API_ENDPOINTS = {
  LOGIN: 'api/v1/users/login',
  GET_ALL_CATEGORIES: '/backend/api/v1/categories/getAllCategories',
  GET_ALL_BRANCHES:(domain)=> `/backend/api/v1/branches/getAllBranches?organization=${domain}`,
  ENROLL_NOW:"add-website-enquiry",
  ENQUIRE: 'api/v1/enquiry',
  FEEDBACK: 'api/v1/feedback',
  GET_CATEGORY_IN_COURSE_FORM: 'api/v1/categories/getCategory',
  VIEW_ALL_COURSES: 'api/v1/branches/viewAll',
  FIND_ALL_CATEGORIES: 'backend/api/v1/categories/findAllCategories',
  GET_COURSE_ID_AND_SUBCOURSE_ID: (courseId, subcourseId) => `api/v1/courses?categoryId=${courseId}${subcourseId}`,
  ADDCOURES_WITHFILE: `api/v1/courses/saveCourse`,
  EDITCOURSE_WITHFILE: `api/v1/courses/updateCourse`,
  EDITBRANCH_WITHFILE: "api/v1/branches/updateFileAndData",
  DELETE_COURSE: (courseId) => `api/v1/courses?courseId=${courseId}`,
  DELETE_CHAPTER: (chapterId) => `/api/v1/chapters?chapterId=${chapterId}`,
  DELETE_TOPIC: (topicId) => `/api/v1/topics?topicId=${topicId}`,
  DELETE_SUBTOPIC: (subtopicId) => `/api/v1/subtopics?subTopicId=${subtopicId}`,
  DELETE_SUBJECT: (subjectId) => `api/v1/subjects?subjectId=${subjectId}`,
  COURSE_WEIGHTAGE_ADDER: (categoryId, subCategoryId, courseId) => `api/v1/weightage/courses?categoryId=${categoryId}${subCategoryId ? `&subCategoryId=${subCategoryId}` : ''}&courseId=${courseId}`,
  COURSE_WEIGHTAGE_EDIT: (categoryId, subCategoryId, courseId) => `api/v1/weightage/courses?categoryId=${categoryId}${subCategoryId ? `&subCategoryId=${subCategoryId}` : ''}&courseId=${courseId}`,
  BRANCH_ADDER: `api/v1/branches/uploadFileAndData`,
  GET_ALL_FAQ: (domain) => `backend/api/v1/faqs?organization=${domain}`,
  GET_BRANCH_BY_BRANCHID: (branchId) => `/api/v1/branches/getbyidform?branchId=${branchId}`,
  GET_BRANCH_BY_COURSE_ID_AND_BRANCH_ID: (courseId, branchId) => `/api/v1/branches/getbyid?branchId=${branchId}&courseId=${courseId}`,
  GET_ALL_COURSES_BY_COURSE_ID: (courseId) => `/api/v1/courses/getbyid?courseId=${courseId}`,
  GET_ONLINE_COURSES:(mode)=> `backend/api/v1/categories/getAllCategories?mode=${mode}`,
  GET_ALL_FOR_ADMIN_PORTAL: 'api/v1/courses/getall',
  //placements
  GET_STATES: (id) => `placementsstatelist/?id=${id ? id : ""}`,
  GET_COLLEGES: (id, district_id, state_id) => `placementcollegelist/?district_id=${district_id ? district_id : ""}&state_id=${state_id ? state_id : ""}&university_id=${id ? id : ""}`,
  GET_CITIES: (state_id) => `/placementscitylist/?id&state_id=${state_id ? state_id : ''}`,
  GET_UNIVERSITIES: (id) => `placementsuniversities/?id=${id ? id : ''}`,
  GET_ORGANISATION: (id) => `placementorganisationlist/?id=${id ? id : ""}`,
  GET_DEGREE: (type_name, id, name, qualification_type_id,per_page) => `placementsdegree/?type_name=${type_name ? type_name : ''}&id=${id ? id : ''}&name=${name ? name : ''}&qualification_type_id=${qualification_type_id ? qualification_type_id : ''}&per_page=${per_page ? per_page : ''}`,
  GET_STREAM: (type_id, id, degree_id,per_page) => `placementsstream/?type_id=${type_id ? type_id : ''}&id=${id ? id : ''}&name=${degree_id ? degree_id : ''}&per_page=${per_page ? per_page : ''}`,
  GET_BRANCH: (organization_id, id) => `/placementsbranchlist/?organization_id=${organization_id ? organization_id : ''}&id=${id ? id : ''}`,
  GET_COURSE_BY_ID: (courseId) => `api/v1/courses/getbyid?courseId=${courseId}`,
  COURSE_MAP_CATEGORY: (categoryId) => `/api/v1/categories/assigncourses?categoryId=${categoryId}`,
  CATEGORY_UNMAP: (categoryId) => `/api/v1/categories/removeCourseFromCategory?categoryId=${categoryId}`,
  SUBCATEGORY_UNMAP: (subCategoryId) => `/api/v1/subcategories/removeCourseFromSubCategory?subCategoryId=${subCategoryId}`,
  COURSE_MAP_SUBCATEGORY: (subCategoryId) => `/api/v1/subcategories/assigncourses?subCategoryId=${subCategoryId}`,
  COURSE_UN_MAP: (courseId) => `/api/v1/courses/unmapCategoryAndSubCategoryFromCourse?courseId=${courseId}`,
  GET_PASS_OUT_YEAR: 'candidate/passoutyear',
  GET_PLACEMENT_COUNTS: 'website_data_reportSummary/',
  GET_THROUGH_OUT_SIXTY: 'candidate/getThroughOutSixty',
  GET_IT_AND_NON_IT: (course) => `candidate/getCandidates/${course}`,
  GET_LESS_THAN_SIXTY: (pageNo, pageSize) => `candidate/lessThanSixty?pageNo=${pageNo}&pageSize=${pageSize}`,
  GET_PLACED_BETWEEN: (startDate, endDate, pageNo, pageSize) => `candidate/placedDate?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNo}&size=${pageSize}`,
  COUNSELLOR_FILTER: (pageNumber, pageSize, parameter) => `candidate/counsellor/filter?pageNumber=${pageNumber}&pageSize=${pageSize}${parameter ? `&parameter=${parameter}` : ''}`,
 
  PLACEMENT_LIST: (page, testimonial_id, joining_date_after, joining_date_before, degree_id, d_stream_id, masters_id, m_stream_id,highestyop,stud_org_id,stud_branch_id,verified_testimonial,less_than60,above_60,non_it,it,university,college,state,city) => `placementslist/?page=${page ? page : ""}&testimonial_id=${testimonial_id ? testimonial_id : ""}&joining_date_after=${joining_date_after ? joining_date_after : ""}&joining_date_before=${joining_date_before ? joining_date_before : ""}&degree_id=${degree_id ? degree_id : ""}&d_stream_id=${d_stream_id ? d_stream_id : ""}&masters_id=${masters_id ? masters_id : ""}&m_stream_id=${m_stream_id ? m_stream_id : ""}&highestyop=${highestyop ? highestyop : ""}&&stud_org_id=${stud_org_id ? stud_org_id :""}&stud_branch_id=${stud_branch_id ? stud_branch_id :""}&verified_testimonial=${verified_testimonial}&less_than60=${less_than60 ? less_than60 : ""}
  &above_60=${above_60 ? above_60 : ""}&non_it=${non_it ? non_it : ""}&it=${it ? it : ""}&university=${university ? university : ""}&college=${college ? college : ""}&state=${state ? state : ""}&city=${city ? city : ""}`,
  //Add Subject
  SUBJECT_ADDER: `api/v1/subjects`,
  MAP_SUBJECT: (courseId) => `api/v1/courses?courseId=${courseId}`,
  UN_MAP_SUBJECT: (courseId) => `api/v1/courses/removeSubjectsFromCourse?courseId=${courseId}`,
  // Branches as per country Select
  ALL_Branch_LIST: `api/v1/branches/getAllBranches/formfilter`,
  DELETE_BRANCH: (branchId) => `/api/v1/branches?branchId=${branchId}`,
  //Batch
  CREATE_BATCH: (branchId, courseId) => `/api/v1/batches?${branchId ? `branchId=${branchId}&` : ''}courseId=${courseId}`,
  GET_ALL_BRANCHES_ADMIN_CREATE_BATCH: (hostName) => `/api/v1/branches/getallbranches/batchform?hostName=${hostName}`,
  DELETE_BATCH: (batchId) => `/api/v1/batches?batchId=${batchId}`,
  EDIT_BATCH: (batchId) => `api/v1/batches/updatebatch?batchId=${batchId}`,
  //Admin Portal
  GET_ALL_CATEGORY: (organizationType) => `/api/v1/categories/getAllCategories?organization=${organizationType}`,
  CATEGORY_WEIGHTAGE_EDIT: (categoryId, weightage, organisation) => `/api/v1/weightage/categories?categoryId=${categoryId}&weightage=${weightage}&organisation=${organisation}`,
  COURSE_WEIGHTAGE_DND: (categoryId, subCategoryId, courseId, organisation, weightage) => `/api/v1/weightage/courses/form?categoryId=${categoryId}${subCategoryId ? `&subCategoryId=${subCategoryId}` : ''}&courseId=${courseId}&organisation=${organisation}&weightage=${weightage}`,
  //subcategoty
  SUBCATEGORY_WEIGHTAGE_DND: (categoryId, subCategoryId, organisation, weightage) => `api/v1/weightage/subCategories?categoryId=${categoryId}&subCategoryId=${subCategoryId}&organization=${organisation}&weightage=${weightage}`,
  CREATE_SUBCATEGORY: (categoryId) => `/api/v1/subcategories?categoryId=${categoryId}`,
  DELETE_SUBCATEGORY: (subCategoryId) => `api/v1/subcategories/deleteSubCategory?subCategoryId=${subCategoryId}`,
  UPDATE_SUBCATEGORY: () => `/api/v1/subcategories`,
  //Category
  ADD_CATEGORY: '/api/v1/categories/files',
  DELETE_CATEGORY: (categoryId) => `/api/v1/categories/deleteCategory?categoryId=${categoryId}`,
  EDIT_CATEGORY: 'api/v1/categories',
  //cities
  ADD_CITY: '/api/v1/cities',
  GET_ALL_CITIES: (organizationType) => `/api/v1/cities?organization=${organizationType}`,
  DELETE_CITY: (cityId) => `api/v1/cities?cityId=${cityId}`,
  GET_ALL_BATCHES: (organizationType) => `/api/v1/batches/getAll/form?organization=${organizationType}`,
  CITY_WEIGHTAGE: (countryId, cityId, weightage, organisation) => `/api/v1/weightage/city?countryId=${countryId}&cityId=${cityId}&weightage=${weightage}&organization=${organisation}`,
  //trainers
  GET_ALLTRAINERS: `api/v1/users/trainers/getall`,
  ADD_TRAINERS: `api/v1/users/saveTrainer`,
  DELETE_TRAINER: (trainerId) => `api/v1/users/deleteTrainer=${trainerId}`,

};