import { TagTypes } from "@/types/tagType";
import { baseApi } from "../baseApi";

// Define a service using a base URL and expected endpoints
export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => {
        return {
          url: "/product",
          method: "GET",
        };
      },
      providesTags: [TagTypes.product],
    }),
    getSingleProduct: builder.query({
      query: (productId: string) => {
        return {
          url: `/product/${productId}`,
          method: "GET",
        };
      },
      providesTags: [TagTypes.product],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductQuery, useGetSingleProductQuery } = productApi;
