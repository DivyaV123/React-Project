import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const LoginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (bodyData) => ({
                url: 'api/v1/users/login',
                method: 'POST',
                body: bodyData,
            }),
        }),
    }),
});

export const { useLoginMutation } = LoginApi;
