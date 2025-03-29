import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

const app = express();

const allowed = [env.CLIENT_URL];
app.use(cors({
    methods: ['GET', 'POST', 'DELETE'],
    origin: allowed
}));

app.use(express.static('./'));

app.use(express.json());

app.get('/users', async (req, res) => {
    let users = [];
    if (req.query.query != undefined) {
        users = JSON.parse(await fs.readFile('./db/users.json', 'utf-8')).filter((user) => user.name.toLowerCase().includes(req.query.query.toLowerCase()));
    } else {
        users = JSON.parse(await fs.readFile('./db/users.json', 'utf-8'));
    }
    res.json(users);
});

app.post('/users', async (req, res) => {
    const users = JSON.parse(await fs.readFile('./db/users.json', 'utf-8'));
    users.push(req.body);
    await fs.writeFile('./db/users.json', JSON.stringify(users));
    res.sendStatus(200);
});

app.delete('/users/:id', async (req, res) => {
    const users = JSON.parse(await fs.readFile('./db/users.json', 'utf-8'));
    users.splice(users.indexOf(users.find((user) => user.id == req.params.id)), 1);
    await fs.writeFile('./db/users.json', JSON.stringify(users));
    res.sendStatus(200);
});

app.listen(env.PORT);