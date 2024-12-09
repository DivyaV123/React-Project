
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const categoryEditApi = createApi({
    reducerPath: 'categoryEditApi',
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
        CategoryEditData: builder.mutation({
            query: ({ bodyData }) => {
                const formData = new FormData();
                formData.append('id', bodyData.id);
                formData.append('title', bodyData.title);
                bodyData.icon != null && formData.append('icon', bodyData.icon);
                bodyData.alternativeIcon != null && formData.append('alternativeIcon', bodyData.alternativeIcon);
                return {
                    url: API_ENDPOINTS.EDIT_CATEGORY,
                    method: 'PATCH',
                    body: formData,
                };
            }
        })
    })
});

export const { useCategoryEditDataMutation } = categoryEditApi;
