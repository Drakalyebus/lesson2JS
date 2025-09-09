import mongoose from "mongoose"
import dotenv from "dotenv"
import express from "express"
import helmet from "helmet"
import cors from "cors"
import Category from "./models/categories.model.js"
import Breed from "./models/breed.model.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors({
    origin: ["http://localhost:5173"]
}))

app.get('/categories', async (req, res) => {
    const categories = await Category.find()
    res.json(categories);
});
app.get('/breeds/:category', async (req, res) => {
    const { category } = req.params
    const breeds = await Category.findOne({ name: category }).populate('content')
    res.json(breeds.content);
})

app.post('/categories', async (req, res) => {
    const { name } = req.body
    const category = await Category.create({ name, content: [] })
    res.json(category);
})
app.post('/breeds/:category', async (req, res) => {
    const { category: categoryName } = req.params
    const { name, description } = req.body
    const category = await Category.findOne({ name: categoryName })
    const breed = await Breed.create({ name, description, category: category._id })
    category.content.push(breed._id)
    await category.save()
    res.json(breed);
})

app.listen(process.env.PORT ?? 3000, () => {
    console.log("Server is running on port", process.env.PORT ?? "3000")
})

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.log(error)
})