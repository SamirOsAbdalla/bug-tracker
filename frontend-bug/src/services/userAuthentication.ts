import axios from "axios"


const baseURL = "http://localhost:3001"
interface UserInfoType {
    email: string,
    name?: string,
    password: string
}

export const registerUser = async (userInfo: UserInfoType) => {
    try {
        const { data } = await axios.post(
            `${baseURL}/api/users/`,
            userInfo
        )

        return data
    }
    catch (error: any) {
        return { error: true, message: error.response.data.message }
    }
}

export const loginUser = async (userInfo: UserInfoType) => {
    try {
        const { data } = await axios.post(
            `${baseURL}/api/users/login`,
            userInfo
        )

        return data
    }
    catch (error: any) {
        return { error: true, message: error.response.data.message }
    }
}