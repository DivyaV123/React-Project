import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';

export const statesApi = createApi({
    reducerPath: 'statesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }),
    endpoints: (builder) => ({
        getAllStates: builder.query({
            query: () => API_ENDPOINTS.GET_STATES,
        }),
    }),
});

export const { useGetAllStatesQuery } = statesApi;
