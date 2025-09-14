import mongoose from "mongoose"
import dotenv from "dotenv"
import express from "express"
import helmet from "helmet"
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors({
    origin: ["http://localhost:5173"]
}))

app.use('/auth', authRoutes)

app.listen(process.env.PORT ?? 3000, () => {
    console.log("Server is running on port", process.env.PORT ?? "3000")
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.log(error)
})