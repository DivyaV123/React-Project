import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getWebsiteUrl,API_ENDPOINTS } from '@/api/apiService';
export const onlineCoursesApi = createApi({
    reducerPath: 'onlineCoursesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getWebsiteUrl() }),
    endpoints: (builder) => ({
        getAllOnlineCourses: builder.query({
            query: (mode="online") => API_ENDPOINTS.GET_ONLINE_COURSES(mode),
        }),
    })
});

export const { useGetAllOnlineCoursesQuery } = onlineCoursesApi;  