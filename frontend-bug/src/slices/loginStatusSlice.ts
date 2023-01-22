import { createSlice } from "@reduxjs/toolkit";
import { UserInfoType } from "../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";

interface LoginStatusType {
    isUserLoggedIn: boolean
}
const initialState: LoginStatusType = {
    isUserLoggedIn: false
}


const loginStatusSlice = createSlice({
    name: "loginStatus",
    initialState,
    reducers: {
        setLoginStatus: (state, action: PayloadAction<LoginStatusType>) => {
            state.isUserLoggedIn = action.payload.isUserLoggedIn
        }
    }
})

export default loginStatusSlice.reducer
export const { setLoginStatus } = loginStatusSlice.actions

