import { baseApi } from "../../api/baseApi";

const othersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => ({
        url: "/about-us/retrive",
        method: "GET",

      }),
    }),
   

  }),
});   

export const {useGetAboutQuery } = othersApi;
