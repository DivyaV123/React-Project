import { getBaseUrl ,API_ENDPOINTS} from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactUsApi = createApi({
    reducerPath: 'contactUsApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        postContact: builder.mutation({
            query: (state) => ({
                url: API_ENDPOINTS.FEEDBACK,
                method: 'POST',
                body: state
            }),
            invalidatesTags : ["contactUsApi"]
        }),
    }),
});

export const { usePostContactMutation } = contactUsApi;
