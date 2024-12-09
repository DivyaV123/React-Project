
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const subjectDeleteApi = createApi({
    reducerPath: 'subjectDeleteApi',
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl(),
        tagType:["subject"],
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
        invalidatesTags:["subject"]
    }),
    endpoints: (builder) => ({
      subjectDelete: builder.mutation({
            query: ({ subjectId }) => ({
                url: API_ENDPOINTS.DELETE_SUBJECT(subjectId),
                method: 'DELETE',
            }),
            invalidatesTags:[""]
        })
    })
});

export const { useSubjectDeleteMutation } = subjectDeleteApi;
