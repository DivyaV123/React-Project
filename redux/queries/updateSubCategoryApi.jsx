import { getBaseUrl ,API_ENDPOINTS} from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const editSubCategory = createApi({
    reducerPath: 'editSubCategory',
   
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
        updateSubCategory: builder.mutation({
            query: ({payload}) => ({
                url: API_ENDPOINTS.UPDATE_SUBCATEGORY(),
                method: 'POST',
                body: payload
            }),
            invalidatesTags : ["editSubCategory"]
        }),
    }),
});

export const { useUpdateSubCategoryMutation } = editSubCategory;
