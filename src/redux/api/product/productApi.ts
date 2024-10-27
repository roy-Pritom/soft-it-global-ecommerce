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
    getWomanProductFromDB: builder.query({
      query: () => ({
        url: "/product/womanFashion",
        method: "GET",
      }),
      providesTags: [TagTypes.product],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useGetWomanProductFromDBQuery,
} = productApi;
