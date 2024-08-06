import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';
export const AllCoursesApi = createApi({
    reducerPath: 'AllCoursesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() ,
      prepareHeaders: (headers) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
    }),
    endpoints: (builder) => ({
        getAllCourses: builder.query({
            query: () => API_ENDPOINTS.GET_ALL_FOR_ADMIN_PORTAL,
        }),
    })
});

export const { useGetAllCoursesQuery } = AllCoursesApi;  