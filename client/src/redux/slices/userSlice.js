import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseUrl } from "../BaseUrl";
import Cookies, {} from 'js-cookie'
const setToken = (token) => {
    Cookies.set('userToken', token)
}
const getToken = () => {
    return Cookies.get('userToken')
}
export const userSlice = createApi({
    reducerPath: 'userSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: BaseUrl,
        prepareHeaders: (headers) => {
            const token = getToken()
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        }
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (newUser) => ({
                url: '/user/register',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ['user']
        }),
        loginUser: builder.mutation({
            query: (loginUser) => (
                console.log(loginUser), {
                    url: '/user/login',
                    method: 'POST',
                    body: loginUser
                }),
            onQueryStarted: async(args, { queryFulfilled }) => {
                try {
                    const result = await queryFulfilled;
                    console.log(result.data);
                    setToken(result.data.token)
                } catch (error) {
                    console.log(error.message);
                }
            },
            invalidatesTags: ['user']
        }),
        currentUser: builder.query({
            query: () => {
                return {
                    url: '/user',
                    method: 'GET'
                }
            },
            providesTags: ['user']
        }),
        updateCurrentUser: builder.mutation({
            query: (updateUser) => ({
                url: '/user',
                method: 'PUT',
                body: updateUser
            }),
            invalidatesTags: ['user']
        }),
        deleteCurrentUser: builder.mutation({
            query: () => ({
                url: '/user',
                method: 'DELETE'
            }),
            invalidatesTags: ['user']
        }),
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useCurrentUserQuery,
    useDeleteCurrentUserMutation,
    useUpdateCurrentUserMutation
} = userSlice