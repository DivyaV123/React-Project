import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getEnrollUrl,API_ENDPOINTS } from '@/api/apiService';

export const enrollNowApi = createApi({
    reducerPath: 'enrollNowApi',
    baseQuery: fetchBaseQuery({ baseUrl: getEnrollUrl() }),
    endpoints: (builder) => ({
        enroll: builder.mutation({
            query: (state) => ({
                url: API_ENDPOINTS.ENROLL_NOW,
                method: 'POST',
                body: state
            }),
            invalidatesTags: ["enrollNowApi"]
        }),
    }),
});

export const { useEnrollMutation } = enrollNowApi;
