import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (info) => ({
        url: "/order/create",
        method: "POST",
        body: info,
      }),
    }),
   

  }),
});   

export const {usePlaceOrderMutation } = cartApi;
