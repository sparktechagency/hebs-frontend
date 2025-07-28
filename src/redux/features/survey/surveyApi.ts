import { baseApi } from "../../api/baseApi";

const surveyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createServey: builder.mutation({
      query: (info) => ({
        url: "/survey/create",
        method: "POST",
        body: info,
      }),
        invalidatesTags: ['survey'],
    }),
    getCollection: builder.query({
      query: () => ({
        url: "/collection/retrieve",
        method: "GET",
        // body: info,
      }),
        providesTags: ["survey"],
    }),
    getSubscriptions: builder.query({
      query: () => ({
        url: "/subscription/retrieve",
        method: "GET",
        // body: info,
      }),
        providesTags: ["subscription"],
    }),
    getRecommendation: builder.query({
      query: (dob) => ({
        url: `/recommendation/retrieve/${dob}`,
        method: "GET",
        // body: info,
      }),
    }),
    getBilling: builder.query({
      query: (id) => ({
        url: `/billing/retrieve/${id}`,
        method: "GET",
        // body: info,
      }),
    }),
    getSpecServey: builder.query({
      query: (email) => ({
        url: `/survey/retrieve/${email}`,
        method: "GET",
        // body: info,
      }),
    }),

   

  }),
});   

export const {useCreateServeyMutation,useGetCollectionQuery,useGetSubscriptionsQuery,useGetRecommendationQuery,useGetBillingQuery,useGetSpecServeyQuery } = surveyApi;
