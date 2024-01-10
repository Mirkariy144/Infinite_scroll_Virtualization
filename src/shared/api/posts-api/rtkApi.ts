import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface fetchAllPostsResponse {
  id: number;
  title: string;
  body: string;
}

interface fetchPostByIdResponse {
  id: number;
  title: string;
  body: string;
}

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<
      fetchAllPostsResponse[],
      { limit: number; start: number }
    >({
      query: ({ limit = 15, start = 0 }) => ({
        url: '/posts',
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
    fetchPostById: builder.query<fetchPostByIdResponse, string>({
      query: (id) => ({
        url: `posts/${id}`,
      }),
    }),
  }),
});
