import { getBaseUrl ,API_ENDPOINTS} from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mapSubjectApi = createApi({
    reducerPath: 'mapSubjectApi',
   
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
        subjectMapping: builder.mutation({
            query: ({payload,courseId}) => ({
                url: API_ENDPOINTS.MAP_SUBJECT(courseId),
                method: 'PATCH',
                body: payload
            }),
            invalidatesTags : ["mapSubjectApi"]
        }),
    }),
});

export const { useSubjectMappingMutation } = mapSubjectApi;
