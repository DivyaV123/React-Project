export const getBaseUrl = () => process.env.NEXT_PUBLIC_PROD2_URL;
export const getPlacementUrl = () => process.env.NEXT_PUBLIC_PROD_URL;
export const API_ENDPOINTS = {
  LOGIN: 'api/v1/users/login',
  GET_ALL_CATEGORIES: 'api/v1/categories/getall',
  GET_ALL_BRANCHES: 'api/v1/branches/getAll',
  ENQUIRE: 'api/v1/enquiry',
  FEEDBACK: 'api/v1/feedback',
  GET_CATEGORY_IN_COURSE_FORM: 'api/v1/categories/getCategory',
  VIEW_ALL_COURSES: 'api/v1/courses/viewAll',
  FIND_ALL_CATEGORIES: 'api/v1/categories/findAllCategories',
  GET_COURSE_ID_AND_SUBCOURSE_ID: (courseId, subcourseId) => `api/v1/courses?categoryId=${courseId}${subcourseId}`,
  COURSE_WEIGHTAGE_ADDER: (categoryId, subCategoryId, courseId) => `api/v1/weightage/courses?categoryId=${categoryId}${subCategoryId ? `&subCategoryId=${subCategoryId}` : ''}&courseId=${courseId}`,
  COURSE_WEIGHTAGE_EDIT: (categoryId, subCategoryId, courseId) => `api/v1/weightage/courses?categoryId=${categoryId}${subCategoryId ? `&subCategoryId=${subCategoryId}` : ''}&courseId=${courseId}`,
  BRANCH_ADDER: `api/v1/branches`,
  GET_ALL_FAQ: (domain) => `api/v1/faqs?organization=${domain}`,
  GET_BRANCH_BY_COURSE_ID_AND_BRANCH_ID: (courseId, branchId) => `/api/v1/branches/getbyid?branchId=${branchId}&courseId=${courseId}`,
  GET_ALL_COURSES_BY_COURSE_ID: (courseId) => `/api/v1/courses/getbyid?courseId=${courseId}`,
  //placements
  GET_CITIES: 'candidate/cities',
  GET_STATES: 'candidate/states',
  GET_COLLEGES: `candidate/colleges`,
  GET_UNIVERSITIES: 'candidate/universities',
  GET_DEGREE: 'candidate/degreeStream',
  GET_BRANCH: 'candidate/branch',
  GET_COURSE_BY_ID: (courseId) => `api/v1/courses/getbyid?courseId=${courseId}`,
  GET_PASS_OUT_YEAR: 'candidate/passoutyear',
  GET_PLACEMENT_COUNTS: '/candidate/getCounts',
  GET_THROUGH_OUT_SIXTY: 'candidate/getThroughOutSixty',
  GET_IT_AND_NON_IT: (course) => `candidate/getCandidates/${course}`,
  GET_LESS_THAN_SIXTY: (pageNo, pageSize) => `candidate/lessThanSixty?pageNo=${pageNo}&pageSize=${pageSize}`,
  GET_PLACED_BETWEEN: (startDate, endDate, pageNo, pageSize) => `candidate/placedDate?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNo}&size=${pageSize}`,
  COUNSELLOR_FILTER: (pageNumber, pageSize, parameter) => `candidate/counsellor/filter?pageNumber=${pageNumber}&pageSize=${pageSize}${parameter ? `&parameter=${parameter}` : ''}`
};