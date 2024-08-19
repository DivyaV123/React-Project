
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const DeleteChapterApi = createApi({
    reducerPath: 'deleteChapterApi',
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
        Chapterdelete: builder.mutation({
            query: ({ chapterId }) => ({
                url: API_ENDPOINTS.DELETE_CHAPTER(chapterId),
                method: 'DELETE',
            })
        })
    })
});

export const { useChapterdeleteMutation } = DeleteChapterApi;
