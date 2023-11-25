import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { userSlice } from './slices/userSlice';
import { profileSlice } from './slices/ProfileSlice';
export const store = configureStore({
    reducer: {
        [userSlice.reducerPath]: userSlice.reducer,
        [profileSlice.reducerPath]: profileSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userSlice.middleware)
        .concat(profileSlice.middleware)
})
setupListeners(store.dispatch);