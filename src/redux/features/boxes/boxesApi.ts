import { baseApi } from "../../api/baseApi";

const boxesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBoxes: builder.query({
      query: () => ({
        url: "/box/retrieve",
        method: "GET",

      }),
    }),
    getSpecefiqBoxes: builder.query({
      query: (id) => ({
        url: `/box/retrieve/category/${id}`,
        method: "GET",

      }),
    }),
   

  }),
});   

export const {useGetAllBoxesQuery ,useGetSpecefiqBoxesQuery} = boxesApi;
