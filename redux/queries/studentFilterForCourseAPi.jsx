import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';
export const studentFilteredForCourse = createApi({
  reducerPath: 'studentFilteredForCourse',
  baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }), 
  endpoints: (builder) => ({
    stuCourseFilter: builder.query({
      query: ({organisationID}) => API_ENDPOINTS.STUDENT_FILTER_FOR_COURSE(organisationID),     
    }),
  }),
});

export const { useStuCourseFilterQuery } = studentFilteredForCourse;

