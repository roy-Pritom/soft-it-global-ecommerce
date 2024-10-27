import { TagTypes } from "@/types/tagType";
import { baseApi } from "../baseApi";

export const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBanner: builder.query({
      query: () => {
        return {
          url: "/banner",
          method: "GET",
        };
      },
      providesTags: [TagTypes.banner],
    }),
  }),
});

export const { useGetAllBannerQuery } = bannerApi;
