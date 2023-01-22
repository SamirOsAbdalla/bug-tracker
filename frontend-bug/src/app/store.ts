import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"
import loginStatusReducer from "../slices/loginStatusSlice"

const store = configureStore({
    reducer: {
        loginStatus: loginStatusReducer,
        user: userReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch