import { baseApi } from "../../api/baseApi";

const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSubscription: builder.mutation({
      query: (info) => ({
        url: "/subscription-purchase/create",
        method: "POST",
        body: info,
      }),
    }),
    specefiqSubscription: builder.query({
      query: (userId) => ({
        url: `subscription-purchase/retrieve/user/${userId}`,
        method: "GET",
        // body: info,
      }),
    }),


   

  }),
});   

export const {useCreateSubscriptionMutation,useSpecefiqSubscriptionQuery} = subscriptionApi;
