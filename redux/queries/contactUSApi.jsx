import { PROD_URL ,PROD2_URL} from '@/lib/RouteConstants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactUsApi = createApi({
    reducerPath: 'contactUsApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        postContact: builder.mutation({
            query: (state) => ({
                url: 'api/v1/feedback',
                method: 'POST',
                body: state
            }),
            invalidatesTags : ["contactUsApi"]
        }),
    }),
});

export const { usePostContactMutation } = contactUsApi;
