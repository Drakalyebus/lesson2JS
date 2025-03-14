import dotenv from "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import path from "path";

const env = process.env;

import dataModel from "./models/data.model.js";

const app = express();

app.use(express.json());

app.use(express.static('pages'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('pages/client.html'));
});

app.get('/data', async (req, res) => {
    const data = await dataModel.find();
    res.json(data);
});

app.get('/data/:id', async (req, res) => {
    const data = await dataModel.findById(req.params.id);
    res.json(data);
});

app.post('/data', async (req, res) => {
    const data = dataModel(req.body);
    await data.save();
    res.sendStatus(200);
});

app.delete('/data/:id', async (req, res) => {
    await dataModel.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
});

app.patch('/data/:id', async (req, res) => {
    await dataModel.findByIdAndUpdate(req.params.id, req.body);
    res.sendStatus(200);
});

mongoose.connect(env.MONGO_URI);

app.listen(env.PORT);