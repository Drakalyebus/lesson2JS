import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import filePath from "./controllers/filePath.js";

import userRouter from "./routes/user.js";
import technicalRouter from "./routes/technical.js";

dotenv.config();

const env = process.env;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
    origin: [env.CLIENT_URL],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"]
}));

app.use(express.json());

app.use(express.static(path.resolve("..", "client")));

app.use(morgan("dev"));

app.use(userRouter);

app.use(technicalRouter);

mongoose.connect(env.MONGO_URI);

app.listen(env.PORT);