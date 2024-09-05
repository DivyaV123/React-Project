
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const trainerDeleteApi = createApi({
    reducerPath: 'trainerDeleteApi',
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
        trainerDelete: builder.mutation({
            query: ({ trainerId }) => ({
                url: API_ENDPOINTS.DELETE_TRAINER(trainerId),
                method: 'DELETE',
            })
        })
    })
});

export const { useTrainerDeleteMutation } = trainerDeleteApi;
