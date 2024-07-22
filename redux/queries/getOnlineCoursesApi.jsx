import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';
export const onlineCoursesApi = createApi({
    reducerPath: 'onlineCoursesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        getAllOnlineCourses: builder.query({
            query: () => API_ENDPOINTS.GET_ONLINE_COURSES,
        }),
    })
});

export const { useGetAllOnlineCoursesQuery } = onlineCoursesApi;  