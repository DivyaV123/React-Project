import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), 
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => 'users',     
    }),
  }),
});

export const { useGetAllCoursesQuery } = courseApi;
