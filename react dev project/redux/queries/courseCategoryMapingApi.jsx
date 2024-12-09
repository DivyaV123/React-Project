
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const courseCategoryMapApi = createApi({
    reducerPath: 'courseCategoryMapApi',
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
        courseCategoryMap: builder.mutation({
            query: ({ bodyData, categoryId }) => ({
                url: API_ENDPOINTS.COURSE_MAP_CATEGORY(categoryId),
                method: 'PATCH',
                body: bodyData
            })
        })
    })
});

export const { useCourseCategoryMapMutation } = courseCategoryMapApi;
