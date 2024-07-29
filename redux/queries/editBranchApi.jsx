
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const BranchEditAPI = createApi({
    reducerPath: 'BranchEditAPI',
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
        branchEditData: builder.mutation({
            query: ({ bodyData }) => {
                const formData = new FormData();
                formData.append('branch', bodyData.branch);
                bodyData?.mainImage != null && formData.append('imageGalary', bodyData.mainImage);
                bodyData?.branchGallery?.length > 0 && bodyData.branchGallery.forEach((file) => {
                    formData.append(`branchGallery`, file);
                });
                return {
                    url: API_ENDPOINTS.EDITBRANCH_WITHFILE,
                    method: 'PUT',
                    body: formData,
                };
            }
        })
    })
});

export const { useBranchEditDataMutation } = BranchEditAPI;
