import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS ,getBaseUrl} from '@/api/apiService';

export const branchOptions = createApi({
    reducerPath: 'branchOptions',
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
        getAllBranchOptions: builder.query({
            query: ({hostName}) => API_ENDPOINTS.GET_ALL_BRANCHES_ADMIN_CREATE_BATCH(hostName),
        }),
    }),
});

export const { useGetAllBranchOptionsQuery } = branchOptions;
