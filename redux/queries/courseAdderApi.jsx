import { PROD2_URL } from '@/lib/RouteConstants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseAdderApi = createApi({
    reducerPath: 'courseAdderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: PROD2_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        courseAdder: builder.mutation({
            query: ({ bodyData, courseId, subcourseId }) => ({
                url: `api/v1/courses?categoryId=${courseId}${subcourseId}`,
                method: 'POST',
                body: bodyData
            })
        })
    })
});

export const { useCourseAdderMutation } = courseAdderApi;
