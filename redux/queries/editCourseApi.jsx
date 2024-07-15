
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const CourseEditAPI = createApi({
    reducerPath: 'CourseEditAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl(),
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        courseEditData: builder.mutation({
            query: ({ bodyData }) => ({
                url: API_ENDPOINTS.EDIT_COURSE,
                method: 'PUT',
                body: bodyData
            })
        })
    })
});

export const { useCourseEditDataMutation } = CourseEditAPI;
