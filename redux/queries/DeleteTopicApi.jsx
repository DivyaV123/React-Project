
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const DeleteTopicApi = createApi({
    reducerPath: 'deleteTopicApi',
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
        topicdelete: builder.mutation({
            query: ({ topicId }) => ({
                url: API_ENDPOINTS.DELETE_TOPIC(topicId),
                method: 'DELETE',
            })
        })
    })
});

export const { useTopicdeleteMutation } = DeleteTopicApi;
