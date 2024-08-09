import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';

export const AddCategoryApi = createApi({
    reducerPath: 'addCategoryApi',
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
        categoryAdder: builder.mutation({
            query: ({ bodyData }) => {
                const formData = new FormData();
                formData.append('title', bodyData.title);
                formData.append('icon', bodyData.icon);
                formData.append('alternativeIcon', bodyData.alternativeIcon);

                return {
                    url: API_ENDPOINTS.ADD_CATEGORY,
                    method: 'POST',
                    body: formData,
                };
            }
        })
    })
});

export const { useCategoryAdderMutation } = AddCategoryApi;
