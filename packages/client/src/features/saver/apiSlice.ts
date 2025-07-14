import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Word } from '../../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: builder => ({
    getWords: builder.query<Word, object>({
      query: () => '/words',
    }),
  }),
});

export const { useGetWordsQuery } = apiSlice;
