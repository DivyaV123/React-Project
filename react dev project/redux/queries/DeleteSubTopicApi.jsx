
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const DeleteSubTopicApi = createApi({
    reducerPath: 'DeleteSubTopicApi',
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
        subTopicdelete: builder.mutation({
            query: ({ subtopicId }) => ({
                url: API_ENDPOINTS.DELETE_SUBTOPIC(subtopicId),
                method: 'DELETE',
            })
        })
    })
});

export const { useSubTopicdeleteMutation } = DeleteSubTopicApi;
