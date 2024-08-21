
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const cityDeleteApi = createApi({
    reducerPath: 'cityDeleteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl(),
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        CityDelete: builder.mutation({
            query: ({ cityId }) => ({
                url: API_ENDPOINTS.DELETE_CITY(cityId),
                method: 'DELETE',
            })
        })
    })
});

export const { useCityDeleteMutation } = cityDeleteApi;
