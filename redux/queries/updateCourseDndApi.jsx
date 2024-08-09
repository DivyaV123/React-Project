
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const updateCourseDnd = createApi({
    reducerPath: 'updateCourseDnd',
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
        courseWeightageDnd: builder.mutation({
            query: ({  categoryId,subCategoryId,courseId,organisation,weightage }) => ({
                url: API_ENDPOINTS.COURSE_WEIGHTAGE_DND(categoryId,subCategoryId,courseId,organisation,weightage),
                method: 'PATCH',
                // body: bodyData
            })
        })
    })
});

export const { useCourseWeightageDndMutation } = updateCourseDnd;

