
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const courseDeleteApi = createApi({
    reducerPath: 'courseDeleteApi',
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
        CourseDelete: builder.mutation({
            query: ({ courseId }) => ({
                url: API_ENDPOINTS.DELETE_COURSE(courseId),
                method: 'DELETE',
            })
        })
    })
});

export const { useCourseDeleteMutation } = courseDeleteApi;
