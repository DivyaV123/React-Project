
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const courseUnMapApi = createApi({
    reducerPath: 'courseUnMapApi',
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
        courseUnMap: builder.mutation({
            query: ({ bodyData, courseId }) => ({
                url: API_ENDPOINTS.COURSE_UN_MAP(courseId),
                method: 'PATCH',
                body: bodyData
            })
        })
    })
});

export const { useCourseUnMapMutation } = courseUnMapApi;
