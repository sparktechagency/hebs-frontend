import { baseApi } from "../../api/baseApi";

const surveyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (info) => ({
        url: "/survey/create",
        method: "POST",
        body: info,
      }),
    }),
   

  }),
});   

export const { } = surveyApi;
