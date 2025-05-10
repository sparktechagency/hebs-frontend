import { baseApi } from "../../api/baseApi";

const surveyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createServey: builder.mutation({
      query: (info) => ({
        url: "/survey/create",
        method: "POST",
        body: info,
      }),
    }),
    getCollection: builder.query({
      query: () => ({
        url: "/collection/retrieve",
        method: "GET",
        // body: info,
      }),
    }),
    getSubscriptions: builder.query({
      query: () => ({
        url: "/subscription/retrieve",
        method: "GET",
        // body: info,
      }),
    }),
    getRecommendation: builder.query({
      query: (dob) => ({
        url: `/recommendation/retrieve/${dob}`,
        method: "GET",
        // body: info,
      }),
    }),

   

  }),
});   

export const {useCreateServeyMutation,useGetCollectionQuery,useGetSubscriptionsQuery,useGetRecommendationQuery } = surveyApi;
