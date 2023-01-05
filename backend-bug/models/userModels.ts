import { Schema, model, Model } from "mongoose"
import bcrypt from "bcryptjs"

interface UserType {
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
}

interface UserMethods {
    matchPassword(password: string): boolean
}

type UserModel = Model<UserType, {}, UserMethods>

const userSchema = new Schema<UserType, UserModel, UserMethods>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.method("matchPassword", async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password)
})

const UserModel = model<UserType, UserModel>("User", userSchema)
export default UserModel