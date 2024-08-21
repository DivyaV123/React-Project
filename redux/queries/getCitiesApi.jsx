import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl, API_ENDPOINTS } from "@/api/apiService";
export const citiesForAdminApi = createApi({
  reducerPath: "citiesForAdminApi",
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
    getAllCitiesForForm: builder.query({
      query: ({ organizationType }) =>
        API_ENDPOINTS.GET_ALL_CITIES(organizationType),
    }),
  }),
});

export const { useGetAllCitiesForFormQuery } = citiesForAdminApi;
