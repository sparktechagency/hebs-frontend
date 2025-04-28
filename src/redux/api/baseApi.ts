import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
// import { RootState } from "../store";
     

const baseQuery = fetchBaseQuery({
    baseUrl: "http://10.0.60.55:5003/v1",
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      return headers;
    },
        // credentials: "include",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.token;
    //   if (token) {
    //     headers.set("authorization", `${token}`);
    //   }
    //   return headers;
    // },
  });




export const baseApi = createApi({
    reducerPath:"baseApi",
    baseQuery:baseQuery,
    // tagTypes:["books","user"],
    endpoints:()=>({})
})

