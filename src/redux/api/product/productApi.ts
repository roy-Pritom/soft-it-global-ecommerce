import { TagTypes } from "@/types/tagType";
import { baseApi } from "../baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (args) => {
        return {
          url: "/product",
          method: "GET",
          params: args,
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
    getManFashion: builder.query({
      query: () => ({
        url: "/product/manFashion",
        method: "GET",
      }),
      providesTags: [TagTypes.product],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useGetNewProductQuery,
  useGetTopProductQuery,
  useGetDiscountProductQuery,
  useGetManFashionQuery,
} = productApi;
