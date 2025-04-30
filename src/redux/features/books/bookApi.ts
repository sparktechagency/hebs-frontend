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
    getSingleBooks: builder.query({
      query: (id) => ({
        url: `/book/retrieve/${id}`,
        method: "GET",
      }),
    }),
    getAllFavouritesBooks: builder.query({
      query: (id) => ({
        url: `/favorite-book/retrieve/user/${id}`,
        method: "GET",
      }),
    }),
    favouriteBooks: builder.mutation({
      query: ({userId,bookId}) => ({
        url: `/favorite-book/add/new/${userId}`,
        method: "POST",
        body: bookId,
      }),
    }),
    getCategories: builder.query({
      query: () => ({
        url: `/category/retrieve`,
        method: "GET",
      }),
    }),
    getGrade: builder.query({
      query: () => ({
        url: `/grade/retrieve`,
        method: "GET",
      }),
    }),
    getCollection: builder.query({
      query: () => ({
        url: `/collection/retrieve`,
        method: "GET",
      }),
    }),

  }),
});

export const {useGetAllBooksQuery,useGetSingleBooksQuery ,useGetAllFavouritesBooksQuery,useFavouriteBooksMutation,useGetCategoriesQuery,useGetGradeQuery,useGetCollectionQuery} = bookApi;
