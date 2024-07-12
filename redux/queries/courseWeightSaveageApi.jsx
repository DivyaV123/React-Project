
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const courseWeightageApi = createApi({
    reducerPath: 'courseWeightageApi',
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
        courseWeightage: builder.mutation({
            query: ({ bodyData, categoryId, subCategoryId, courseId }) => ({
                url: API_ENDPOINTS.COURSE_WEIGHTAGE_ADDER(categoryId, subCategoryId, courseId),
                method: 'POST',
                body: bodyData
            })
        })
    })
});

export const { useCourseWeightageMutation } = courseWeightageApi;

