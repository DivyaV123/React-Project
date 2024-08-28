import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addTrainerApi = createApi({
    reducerPath: 'addTrainer',

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
        addTrainer: builder.mutation({
            query: (payload) => ({
                url: API_ENDPOINTS.ADD_TRAINERS,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ["addTrainer"]
        }),
    }),
});

export const { useAddTrainerMutation } = addTrainerApi;
