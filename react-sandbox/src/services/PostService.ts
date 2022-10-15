import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../models/IPost';

//RTK query генерирует нужный хук на основе типа запроса/мутации и эндпоинтов с типом возвращаемых данных и принимаемых аргументов
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
           query: (limit = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            //указать, что эндпоинт обеспечивает доставку данных
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                 url: '/posts',
                 method: 'POST',
                 body: post
             }),
             //указать, что данные нужно заново получить
             invalidatesTags: result => ['Post']
         }),
         updatePost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                 url: `/posts/${post.id}`,
                 method: 'PUT',
                 body: post
             }),
             //указать, что данные нужно заново получить
             invalidatesTags: result => ['Post']
         }),
         deletePost: build.mutation<IPost[], IPost>({
            query: (post) => ({
                 url: `/posts/${post.id}`,
                 method: 'DELETE',
             }),
             //указать, что данные нужно заново получить
             invalidatesTags: result => ['Post']
         }),
    })
})