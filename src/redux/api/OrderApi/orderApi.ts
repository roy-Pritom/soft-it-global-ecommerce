/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data: any) => {
        return {
          url: "/order/create",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
