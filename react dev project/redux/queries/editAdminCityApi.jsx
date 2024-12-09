import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';

export const editAdminCitiesApi = createApi({
    reducerPath: 'editAdminCitiesApi',
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
        citiesEdit: builder.mutation({
            query: ({ bodyData }) => {
                const formData = new FormData();
                formData.append('cityName', bodyData.cityName);
                formData.append('state', bodyData.state);
                formData.append('cityId', bodyData.cityId);
                
                bodyData.cityIcon != null && formData.append('cityIcon', bodyData.cityIcon);
                bodyData.cityImage != null && formData.append('cityImage', bodyData.cityImage);

                return {
                    url: API_ENDPOINTS.ADD_CITY,
                    method: 'PATCH',
                    body: formData,
                };
            }
        })
    })
});

export const { useCitiesEditMutation } = editAdminCitiesApi;
