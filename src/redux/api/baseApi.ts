import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { RootState } from "../store";
// import { RootState } from "../store";
     

const baseQuery = fetchBaseQuery({
  baseUrl: "http://10.0.60.55:5003/v1",
  prepareHeaders: (headers, { getState }) => {
    headers.set('Accept', 'application/json');

    // ✅ Get token from Redux store
    const token = (getState() as RootState).auth.token;
    
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
  // credentials: "include", // Optional, if you want to send cookies
});




export const baseApi = createApi({
    reducerPath:"baseApi",
    baseQuery:baseQuery,
    // tagTypes:["books","user"],
    endpoints:()=>({})
})

