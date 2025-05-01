import { baseApi } from "../../api/baseApi";

const surveyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/user/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
   

  }),
});   

export const { } = surveyApi;
