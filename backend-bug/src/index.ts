import express from "express"
import dotenv from "dotenv"
import connectDB from "../config/db.js"
import userRoutes from "../routes/userRoutes.js"
import { notFound, errorHandler } from "../middlewares/errorMiddleware.js"

const app = express();
dotenv.config()
connectDB()
app.use(express.json())

app.use("/api/users", userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))