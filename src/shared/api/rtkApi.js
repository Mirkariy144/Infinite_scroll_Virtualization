import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query({
      query:({limit = 20, start = 0})=>({
        url: '/posts',
        params: {
          _limit: limit,
          _start: start
        },
      }),
      transformResponse: (data, meta) => {
        return {
          data,
          totalCount: meta.response.headers.get('X-Total-Count')
        }
      },

    }),
    fetchPostsCount: builder.query({
      query:() => ({
        url: '/posts',
      })
    }),
    fetchPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`
      })
    })
  })
})