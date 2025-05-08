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
    loginWithFacebook: builder.query({
      query: () => ({
        url: "/user/auth/facebook",
        method: "GET",  
        // body: userInfo,
      }),
    }),
    getSpecefiqUser: builder.query({
      query: (id) => ({
        url: `/user/retrive/${id}`,
        method: "GET",  
        // body: userInfo,
      }),
    }),
    updateSpecefiqUser: builder.mutation({
      query: ({id,userInfo}) => ({
        url: `/user/update/${id}`,
        method: "PATCH",  
        body: userInfo,
      }),
    }),


  }),
});   

export const { useLoginMutation,useSignUpMutation,useLazyLoginWithGoogleQuery,useLazyLoginWithFacebookQuery,useGetSpecefiqUserQuery,useUpdateSpecefiqUserMutation} = authApi;
