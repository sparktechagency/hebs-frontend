import { TBook, TResponseRedux } from "@/types/global.type";
import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
        query: () => {
        
  
          return {
            url: "/book/retrieve",
            method: "GET",
            
          };
        },
        providesTags: ["books"],
        transformResponse: (response: TResponseRedux<TBook[]>) => {
          return {
            data: response.data,
          };
        },
      }),


  }),
});

export const {useGetAllBooksQuery } = bookApi;
