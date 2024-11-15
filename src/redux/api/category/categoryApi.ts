import { TagTypes } from "@/types/tagType";
import { baseApi } from "../baseApi";

// Define a service using a base URL and expected endpoints
export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => {
        return {
          url: "/category",
          method: "GET",
        };
      },
      providesTags: [TagTypes.category],
    }),
    getAllProductByCategory: builder.query({
      query: (categoryId: string) => {
        console.log('pana;',categoryId)
        return {
          url: `/product?categoryId=${categoryId}`,
          method: "GET",
        };
      },
      providesTags: [TagTypes.category],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCategoryQuery, useGetAllProductByCategoryQuery } =
  categoryApi;
