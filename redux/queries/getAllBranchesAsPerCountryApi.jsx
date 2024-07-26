import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS ,getBaseUrl} from '@/api/apiService';

export const branchesAsPerCountryApi = createApi({
    reducerPath: 'branchesAsPerCountryApi',
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
        getAllBranchesAsPerCountry: builder.query({
            query: () => API_ENDPOINTS.ALL_Branch_LIST,
        }),
    }),
});

export const { useGetAllBranchesAsPerCountryQuery } = branchesAsPerCountryApi;
