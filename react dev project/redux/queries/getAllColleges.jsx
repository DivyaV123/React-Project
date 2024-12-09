import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const collegesApi = createApi({
    reducerPath: 'collegesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllColleges: builder.query({
            query: ({id,district_id,state_id,name}) => API_ENDPOINTS.GET_COLLEGES(id,district_id,state_id,name),
        }),
    }),
});

export const { useGetAllCollegesQuery } = collegesApi;
