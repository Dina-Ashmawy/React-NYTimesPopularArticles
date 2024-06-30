import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL, API_KEY } from "../constants";

export const NyTimesApi = createApi({
  reducerPath: "nyTimesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getMostViewed: builder.query({
      query: (period: number) => `viewed/${period}.json?api-key=${API_KEY}`,
      transformResponse: (response: any) => response.results,
    }),
  }),
});

export const { useGetMostViewedQuery } = NyTimesApi;
