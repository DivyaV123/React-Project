
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const courseWeightageEditApi = createApi({
    reducerPath: 'courseWeightageEditApi',
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
        courseWeightageEdit: builder.mutation({
            query: ({ bodyData, categoryId, subCategoryId, courseId }) => ({
                url: API_ENDPOINTS.COURSE_WEIGHTAGE_ADDER(categoryId, subCategoryId, courseId),
                method: 'PATCH',
                body: bodyData
            })
        })
    })
});

export const { useCourseWeightageEditMutation } = courseWeightageEditApi;

