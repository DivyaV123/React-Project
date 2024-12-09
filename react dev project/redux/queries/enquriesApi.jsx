import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';

export const enquriesApi = createApi({
    reducerPath: 'enquriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        enquries: builder.mutation({
            query: (state) => ({
                url: API_ENDPOINTS.ENQUIRE,
                method: 'POST',
                body: state
            }),
            invalidatesTags: ["enquriesApi"]
        }),
    }),
});

export const { useEnquriesMutation } = enquriesApi;
