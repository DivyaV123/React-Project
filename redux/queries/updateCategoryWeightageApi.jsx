
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const updateCategoryWeightage = createApi({
    reducerPath: 'updateCategoryWeightage',
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
        categoryWeightageEdit: builder.mutation({
            query: ({  categoryId,weightage,organisation }) => ({
                url: API_ENDPOINTS.CATEGORY_WEIGHTAGE_EDIT(categoryId,weightage,organisation),
                method: 'PATCH',
                // body: bodyData
            })
        })
    })
});

export const { useCategoryWeightageEditMutation } = updateCategoryWeightage;

