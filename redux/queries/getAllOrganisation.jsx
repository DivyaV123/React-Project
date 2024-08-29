import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const organisationApi = createApi({
    reducerPath: ' organisationApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllOrganisation: builder.query({
            query: (id) => API_ENDPOINTS.GET_ORGANISATION(id),
        }),
    }),
});

export const { useGetAllOrganisationQuery } = organisationApi;
