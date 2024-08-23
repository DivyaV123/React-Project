import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';

export const branchAdderApi = createApi({
    reducerPath: 'branchAdderApi',
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
        branchAdder: builder.mutation({
            query: ({ bodyData }) => {
                const formData = new FormData();
                formData.append('branch', bodyData.branch);
                formData.append('branchImage', bodyData.branchImage);

                // Append each file in branchGallery array to the FormData
                bodyData.branchGallery.forEach((file, index) => {
                    formData.append(`branchGallery`, file);
                });

                return {
                    url: API_ENDPOINTS.BRANCH_ADDER,
                    method: 'POST',
                    body: formData,
                };
            },
        }),
    }),
});

export const { useBranchAdderMutation } = branchAdderApi;
