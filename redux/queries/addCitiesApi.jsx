import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';

export const AddCitiesApi = createApi({
    reducerPath: 'AddCitiesApi',
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
        citiesAdder: builder.mutation({
            query: ({ bodyData }) => {
                const formData = new FormData();
                formData.append('cityName', bodyData.cityName);
                formData.append('cityIcon', bodyData.cityIcon);
                formData.append('cityImage', bodyData.cityImage);
                formData.append('state', bodyData.stateName);
                formData.append('country', bodyData.countryName);

                return {
                    url: API_ENDPOINTS.ADD_CITY,
                    method: 'POST',
                    body: formData,
                };
            }
        })
    })
});

export const { useCitiesAdderMutation } = AddCitiesApi;
