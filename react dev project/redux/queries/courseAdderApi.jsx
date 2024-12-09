import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';

export const courseAdderApi = createApi({
    reducerPath: 'courseAdderApi',
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
        courseAdder: builder.mutation({
            query: ({ bodyData }) => {
                const formData = new FormData();
                formData.append('course', bodyData.course);
                formData.append('categoryId', bodyData.categoryId);
                bodyData.subCategoryId != "" && formData.append('subCategoryId', bodyData.subCategoryId);
                formData.append('icon', bodyData.icon);
                formData.append('image', bodyData.image);
                formData.append('homePageImage', bodyData.homePageImage);

                return {
                    url: API_ENDPOINTS.ADDCOURES_WITHFILE,
                    method: 'POST',
                    body: formData,
                };
            }
        })
    })
});

export const { useCourseAdderMutation } = courseAdderApi;
