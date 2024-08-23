
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const CityEditAPI = createApi({
    reducerPath: 'CityEditAPI',
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
        cityEditData: builder.mutation({
            query: ({ bodyData }) => {
                const formData = new FormData();
                bodyData.cityId != null && formData.append('cityId', bodyData.icon);
                bodyData.state != null && formData.append('state', bodyData.icon);
                bodyData.cityName != null && formData.append('cityName', bodyData.cardImage);
                bodyData.cityIcon != null && formData.append('cityIcon', bodyData.pageImage);
                bodyData.cityImage != null && formData.append('cityImage', bodyData.pageImage);
                return {
                    url: API_ENDPOINTS.Edit_CITY,
                    method: 'PATCH',
                    body: formData,
                };
            }
        })
    })
});

export const { useCityEditDataMutation } = CityEditAPI;
