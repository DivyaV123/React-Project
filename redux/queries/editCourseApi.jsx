
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const CourseEditAPI = createApi({
    reducerPath: 'CourseEditAPI',
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
        courseEditData: builder.mutation({
            query: ({ bodyData }) => {
                const formData = new FormData();
                formData.append('courseContent', bodyData.courseContent);
                bodyData.icon != null && formData.append('icon', bodyData.icon);
                bodyData.cardImage != null && formData.append('image', bodyData.cardImage);
                bodyData.pageImage != null && formData.append('homePageImage', bodyData.pageImage);

                return {
                    url: API_ENDPOINTS.EDITCOURSE_WITHFILE,
                    method: 'PUT',
                    body: formData,
                };
            }
        })
    })
});

export const { useCourseEditDataMutation } = CourseEditAPI;
