import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const statesApi = createApi({
    reducerPath: 'statesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllStates: builder.query({
            query: (name) => API_ENDPOINTS.GET_STATES(name),
        }),
    }),
});

export const { useGetAllStatesQuery } = statesApi;
