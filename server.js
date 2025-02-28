import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';

const app = express();

const allowed = ['http://localhost:5500', 'http://127.0.0.1:5500', 'http://localhost:3000'];
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

app.listen(3000);