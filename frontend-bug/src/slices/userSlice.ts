import { createSlice } from "@reduxjs/toolkit";
import { UserInfoType } from "../interfaces/interfaces";
import { PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    userInfo: UserInfoType
}
const initialState: InitialState = {
    userInfo: {
        name: "",
        email: "",
        _id: "",
        token: "",
        isAdmin: false,
    }
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<UserInfoType>) => {
            state.userInfo = action.payload
        }
    }
})

export default userSlice.reducer
export const { setCurrentUser } = userSlice.actions