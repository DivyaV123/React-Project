import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const placementListApi = createApi({
    reducerPath: 'placementListApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllPlacementList: builder.query({
            query: (page=1,testimonial_id) => API_ENDPOINTS.PLACEMENT_LIST(page,testimonial_id),
            keepUnusedDataFor: 0
        }),
    }),
});

export const { useGetAllPlacementListQuery } = placementListApi;
