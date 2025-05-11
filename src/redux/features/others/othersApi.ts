import { baseApi } from "../../api/baseApi";

const othersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => ({
        url: "/about-us/retrive",
        method: "GET",

      }),
    }),
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: "/privacy-policy/retrive",
        method: "GET",

      }),
    }),
    getTerms: builder.query({
      query: () => ({
        url: "/terms-condition/retrive",
        method: "GET",

      }),
    }),
    getContact: builder.query({
      query: () => ({
        url: "/contact-us/retrive",
        method: "GET",

      }),
    }),
   

  }),
});   

export const {useGetAboutQuery,useGetContactQuery,useGetPrivacyPolicyQuery,useGetTermsQuery } = othersApi;
