import { Request, Response } from "express"
import UserModel from "../models/userModel.js"
import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"

const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    const userExists = await UserModel.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("User already exists!")
    } else {
        const user = await UserModel.create({
            name, email, password
        })

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                isAdmin: user.isAdmin,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error("User could not be created.")
        }
    }
})

const authUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            id: user._id,
            name: user.name,
            isAdmin: user.isAdmin,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid email or password!")
    }
})


export { registerUser, authUser }