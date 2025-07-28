import { baseApi } from "../../api/baseApi";

const othersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => ({
        url: "/about-us/retrive",
        method: "GET",
      }),
    }),
    getTeams: builder.query({
      query: () => ({
        url: "/team/retrieve/all",
        method: "GET",
      }),
    }),
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: "/privacy-policy/retrive",
        method: "GET",
      }),
    }),
    getTerms: builder.query({
      query: () => ({
        url: "/terms-condition/retrive",
        method: "GET",
      }),
    }),
    getContact: builder.query({
      query: () => ({
        url: "/contact-us/retrive",
        method: "GET",
      }),
    }),
    creteContact: builder.mutation({
      query: () => ({
        url: `/contact-us/send-email`,
        method: "POST",
      }),
    }),
    creteNewsletter: builder.mutation({
    query: (data) => ({
        url: `/subscriber/create`,
        method: "POST",
        body:data
      }),
    }),
     updateSpecefiqUserAddress: builder.mutation({
  query: ({ id, userInfo }) => {
    console.log("API call received ID:", id);
    console.log("User info api call:", userInfo);
    return {
      url: `/user/update/shipping-address/${id}`,
      method: "PATCH",
      body: userInfo,
    };
  },
  invalidatesTags: ['user'], 
}),

  }),
});

export const {
  useGetAboutQuery,
  useGetContactQuery,
  useGetPrivacyPolicyQuery,
  useGetTermsQuery,
  useCreteContactMutation,
  useGetTeamsQuery,
 useCreteNewsletterMutation,
 useUpdateSpecefiqUserAddressMutation
} = othersApi;
