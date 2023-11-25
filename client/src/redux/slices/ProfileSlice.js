import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseUrl } from '../BaseUrl'
import Cookies from 'js-cookie'
const getToken = () => {
    return Cookies.get('userToken');
}
export const profileSlice = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BaseUrl,
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        }
    }),
    tagTypes: ['profile'],
    endpoints: (builder) => ({
        addProfile: builder.mutation({
            query: (newProfile) => ({
                url: '/userProfile/add',
                method: 'POST',
                body: newProfile
            }),
            invalidatesTags: ['profile']
        }),
        updateProfile: builder.mutation({
            query: (updateProfile) => ({
                url: `/userProfile`,
                method: 'PUT',
                body: updateProfile
            }),
            invalidatesTags: ['profile']
        }),
        fetchUsersProfile: builder.query({
            query: () => {
                return {
                    url: '/usersProfile',
                    method: 'GET'
                }
            },
            providesTags: ['profile']
        }),
        fetchUserProfile: builder.query({
            query: () => {
                return {
                    url: '/userProfile',
                    method: 'GET'
                }
            },
            providesTags: ['profile']
        })

    })
})

export const {
    useAddProfileMutation,
    useUpdateProfileMutation,
    useFetchUsersProfileQuery,
    useFetchUserProfileQuery
} = profileSlice;