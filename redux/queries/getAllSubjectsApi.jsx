import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';
export const allSubjectApi = createApi({
    reducerPath: 'allSubjectApi',
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
        getAllSubjects: builder.query({
            query: () => `api/v1/subjects/getall`,
        }),
    })
});

export const { useGetAllSubjectsQuery } = allSubjectApi;  