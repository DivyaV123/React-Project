import { getBaseUrl ,API_ENDPOINTS} from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const subjectAdder = createApi({
    reducerPath: 'subjectAdder',
   
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
        addSubject: builder.mutation({
            query: (state) => ({
                url: API_ENDPOINTS.SUBJECT_ADDER,
                method: 'POST',
                body: state
            }),
            invalidatesTags : ["subjectAdder"]
        }),
    }),
});

export const { useAddSubjectMutation } = subjectAdder;
