import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/user/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/user/create",
        method: "POST",
        body: userInfo,
      }),
    }),
    loginWithGoogle: builder.query({
      query: () => ({
        url: "/user/auth/google",
        method: "GET",  
        // body: userInfo,
      }),
    }),


  }),
});   

export const { useLoginMutation,useSignUpMutation,useLazyLoginWithGoogleQuery} = authApi;
