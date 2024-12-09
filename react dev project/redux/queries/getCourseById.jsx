import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';

export const getcourseByIdApi = createApi({
    reducerPath: 'getcourseByIdApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        getcourseById: builder.query({
            query: ({ courseId }) => API_ENDPOINTS.GET_COURSE_BY_ID(courseId),
        }),
    }),
});

export const { useGetcourseByIdQuery } = getcourseByIdApi;
