// Need to use the React-specific entry point to import createApi
import { TagTypeList } from "@/types/tagType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.0.106:5000/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: TagTypeList,
});
