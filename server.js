import express from 'express';
import pathExtend from 'path';
import fsExtend from 'fs/promises';

function getPath(path) {
    return pathExtend.resolve('public', path);
}

const app = express();

app.use(express.static('public'));

app.get('/users/:id', async (req, res) => {
    await res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users</title>
</head>
<body>
    <textarea id="users">${JSON.stringify((JSON.parse(await fsExtend.readFile(getPath('users.json'), 'utf-8'))).find((user) => user.id == req.params.id))}</textarea>
</body>
</html>`);
});

app.get('/users', async (req, res) => {
    await res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Users</title>
</head>
<body>
    <textarea id="users">${await fsExtend.readFile(getPath('users.json'), 'utf-8')}</textarea>
</body>
</html>`);
});

app.get('/search', async (req, res) => {
    if (req.query.query == undefined) {
        await res.send((JSON.parse(await fsExtend.readFile(getPath('words.json'), 'utf-8'))));
    } else {
        await res.send((JSON.parse(await fsExtend.readFile(getPath('words.json'), 'utf-8'))).filter((word) => word.includes(req.query.query)));
    }
});

app.get('/time', async (req, res) => {
    await res.sendFile(getPath('time.html'));
});

app.get('/admin', async (req, res) => {
    await res.sendFile(getPath('admin.html'));
});

app.get('/getFiles', async (req, res) => {
    if (req.headers.referer == 'http://localhost:3000/admin') {
        await res.json(await fsExtend.readdir(getPath('.')));
    } else {
        await req.next();
    }
});

app.use((req, res) => {
    if (req.headers['X-Admin'] == 'true') {
        res.redirect('/admin');
    } else {
        res.sendStatus(403);
    }
});

app.listen(3000);