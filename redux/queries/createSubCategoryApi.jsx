import { getBaseUrl ,API_ENDPOINTS} from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createSubCategory = createApi({
    reducerPath: 'createSubCategory',
   
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
        createSubCategory: builder.mutation({
            query: ({payload,categoryId}) => ({
                url: API_ENDPOINTS.CREATE_SUBCATEGORY(categoryId),
                method: 'POST',
                body: payload
            }),
            invalidatesTags : ["createSubCategory"]
        }),
    }),
});

export const { useCreateSubCategoryMutation } = createSubCategory;
