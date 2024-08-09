
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const updateSubCategoryDnd = createApi({
    reducerPath: 'updateSubCategoryDnd',
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
        subCategoryWeightageDnd: builder.mutation({
            query: ({  categoryId,subCategoryId,weightage,organisation }) => ({
                url: API_ENDPOINTS.SUBCATEGORY_WEIGHTAGE_DND(categoryId,subCategoryId,weightage,organisation),
                method: 'PATCH',
                // body: bodyData
            })
        })
    })
});

export const { useSubCategoryWeightageDndMutation } = updateSubCategoryDnd;

