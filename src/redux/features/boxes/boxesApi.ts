import { baseApi } from "../../api/baseApi";

const boxesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBoxes: builder.query({
      query: () => ({
        url: "/box/retrieve",
        method: "GET",

      }),
    }),
   

  }),
});   

export const {useGetAllBoxesQuery } = boxesApi;
