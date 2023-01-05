import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGO_URI}`)

        console.log(`Connected to MongoDB: ${connect.connection.host}`)
    } catch (error: unknown) {
        console.log(error)
    }
}

export default connectDB
