import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl, API_ENDPOINTS } from "@/api/apiService";
export const getAllTrainersApi = createApi({
    reducerPath: "getAllTrainersApi",
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl(),
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("authToken");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllTrainers: builder.query({
            query: () =>
                API_ENDPOINTS.GET_ALLTRAINERS,
        }),
    }),
});

export const { useGetAllTrainersQuery } = getAllTrainersApi;
