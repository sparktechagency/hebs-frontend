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


   

  }),
});   

export const {useCreateSubscriptionMutation} = subscriptionApi;
