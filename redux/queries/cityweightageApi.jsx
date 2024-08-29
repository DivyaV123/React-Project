
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const cityWeightage = createApi({
    reducerPath: 'cityWeightage',
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
        cityWeightage: builder.mutation({
            query: ({countryId,cityId, weightage, organisation}) => ({
                url: API_ENDPOINTS.CITY_WEIGHTAGE(countryId,cityId, weightage, organisation),
                method: 'PATCH',
                // body: bodyData
            })
        })
    })
});

export const { useCityWeightageMutation } = cityWeightage;

