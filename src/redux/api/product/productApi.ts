import { TagTypes } from "@/types/tagType";
import { baseApi } from "../baseApi";

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
    getTopProduct: builder.query({
      query: () => {
        return {
          url: `/product/topProduct`,
          method: "GET",
        };
      },
      providesTags: [TagTypes.product],
    }),
    getNewProduct: builder.query({
      query: () => {
        return {
          url: `/product/newProduct`,
          method: "GET",
        };
      },
      providesTags: [TagTypes.product],
    }),
    getDiscountProduct: builder.query({
      query: () => {
        return {
          url: `/product/discountProduct`,
          method: "GET",
        };
      },
      providesTags: [TagTypes.product],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useGetNewProductQuery,
  useGetTopProductQuery,
  useGetDiscountProductQuery,
} = productApi;
