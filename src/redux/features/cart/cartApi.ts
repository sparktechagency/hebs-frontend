import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (info) => ({
        url: "/order/create",
        method: "POST",
        body: info,
      }),
       invalidatesTags: ['order'],
    }),
    placeBoxOrder: builder.mutation({
      query: ({info,data}) => ({
        url: `/order/order-checkout?purpose=${data}`,
        method: "POST",
        body: info,
      }),
       invalidatesTags: ['order'],
    }),
    placeCartOrder: builder.mutation({
      query: (info) => ({
        url: `/order/order-checkout`,
        method: "POST",
        body: info,
      }),
       invalidatesTags: ['order'],
    }),
    shippingInfo: builder.mutation({
      query: (info) => ({
        url: "/order/get-shipping-rates",
        method: "POST",
        body: info,
      }),
       invalidatesTags: ['order'],
    }),
   

  }),
});   

export const {usePlaceOrderMutation,useShippingInfoMutation,usePlaceCartOrderMutation,usePlaceBoxOrderMutation } = cartApi;
