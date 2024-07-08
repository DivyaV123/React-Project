import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';

export const YearOfPassoutApi = createApi({
    reducerPath: ' YearOfPassoutApi',
    baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }),
    endpoints: (builder) => ({
        getAllYearOfPassout: builder.query({
            query: () => API_ENDPOINTS.GET_PASS_OUT_YEAR,
        }),
    }),
});

export const { useGetAllYearOfPassoutQuery } = YearOfPassoutApi;
