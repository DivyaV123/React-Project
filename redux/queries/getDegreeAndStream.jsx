import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const degreeAndStreamApi = createApi({
    reducerPath: 'degreeAndStreamApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllDegreeAndStream: builder.query({
            query: (type_name,id,name,qualification_type_id) => API_ENDPOINTS.GET_DEGREE(type_name,id,name,qualification_type_id),
        }),
    }),
});

export const { useGetAllDegreeAndStreamQuery } = degreeAndStreamApi;
