
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const courseSubCategoryMapApi = createApi({
    reducerPath: 'courseSubCategoryMapApi',
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
        courseSubCategoryMap: builder.mutation({
            query: ({ bodyData, subCategoryId }) => ({
                url: API_ENDPOINTS.COURSE_MAP_SUBCATEGORY(subCategoryId),
                method: 'PATCH',
                body: bodyData
            })
        })
    })
});

export const { useCourseSubCategoryMapMutation } = courseSubCategoryMapApi;
