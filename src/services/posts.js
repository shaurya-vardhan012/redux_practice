import { createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath:'postApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com/"
    }),
    endpoints: (builder) => ({
        getAllPost: builder.query({
         query: () => ({
          url: 'posts',
          method: 'GET'
         })
        }),
        getPostById: builder.query({
            query: (id) => {
             console.log("ID:", id)
             return {
              url: `posts/${id}`,
              method: 'GET'
             }
            }
           }),
        getLimitPost: builder.query({
            query: (num) => {
             console.log("Limit Number:", num)
             return {
              url: `posts?_limit=${num}`,
              method: 'GET'
             }
            }
           })
    })
})

export const {useGetAllPostQuery, useGetPostByIdQuery, useGetLimitPostQuery} = postApi
// export const { useGetPostByIdQuery} = postApi