import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';
export const allSubjectApiAsPerID = createApi({
    reducerPath: 'allSubjectApiAsPerID',
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
        subjectAsPerID: builder.query({
            query: ({id}) => `api/v1/subjects?subjectId=${id}`,
        }),
    })
});

export const { useSubjectAsPerIDQuery } = allSubjectApiAsPerID;  