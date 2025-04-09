// import { BookApiResponse } from "@/types/global.type";
// import { TBook, TResponseRedux } from "@/types/global.type";
import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: "/book/retrieve",
        method: "GET",
      }),
    }),


  }),
});

export const {useGetAllBooksQuery } = bookApi;
