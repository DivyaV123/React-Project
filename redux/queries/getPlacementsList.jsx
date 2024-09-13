import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const placementListApi = createApi({
    reducerPath: 'placementListApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllPlacementList: builder.query({
            query: ({page=1,testimonial_id,joining_date_after,joining_date_before, degree_id, d_stream_id, masters_id, m_stream_id,highestyop,stud_org_id,stud_branch_id,verified_testimonial=true,less_than60,above_60,non_it,it,university,college,state,city}) => API_ENDPOINTS.PLACEMENT_LIST(page,testimonial_id,joining_date_after,joining_date_before, degree_id, d_stream_id, masters_id, m_stream_id,highestyop,stud_org_id,stud_branch_id,verified_testimonial,less_than60,above_60,non_it,it,university,college,state,city),
            keepUnusedDataFor: 0
        }),
    }),
});

export const { useGetAllPlacementListQuery } = placementListApi;
