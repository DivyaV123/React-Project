import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';

export const LoginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (bodyData) => ({
                url: API_ENDPOINTS.LOGIN,
                method: 'POST',
                body: bodyData,
            }),
        }),
    }),
});

export const { useLoginMutation } = LoginApi;
