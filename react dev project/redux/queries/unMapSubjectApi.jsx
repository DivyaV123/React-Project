import { getBaseUrl ,API_ENDPOINTS} from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const unMapSubjectApi = createApi({
    reducerPath: 'unMapSubjectApi',
   
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
        unMapsubjectMapping: builder.mutation({
            query: ({payload,courseId}) => ({
                url: API_ENDPOINTS.UN_MAP_SUBJECT(courseId),
                method: 'DELETE',
                body: payload
            }),
            invalidatesTags : ["unMapSubjectApi"]
        }),
    }),
});

export const { useUnMapsubjectMappingMutation } = unMapSubjectApi;
