
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const courseEditerApi = createApi({
    reducerPath: 'courseEditerApi',
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
        courseEditor: builder.mutation({
            query: ({ bodyData, courseId, subcourseId }) => ({
                url: API_ENDPOINTS.GET_COURSE_ID_AND_SUBCOURSE_ID(courseId, subcourseId),
                method: 'PATCH',
                body: bodyData
            })
        })
    })
});

export const { useCourseEditorMutation } = courseEditerApi;
