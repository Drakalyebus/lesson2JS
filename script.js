import Req from "./requests.js";

const getEl = document.getElementById('get');
const mixEl = document.getElementById('mix');
const sortEl = document.getElementById('sort');
const nameEl = document.getElementById('name');
const urlEl = document.getElementById('url');
const postEl = document.getElementById('post');
const imagesEl = document.getElementById('images');

let images = [];
let got = false;

function render() {
    imagesEl.innerHTML = '';
    images.forEach((image) => {
        imagesEl.innerHTML += `<li><img style="height: 5em;" src="${image.url}" alt="${image.name}">${image.name}</li>`
    });
    Array.from(imagesEl.children).forEach((image, i) => {
        image.addEventListener('click', async (e) => {
            e.preventDefault();
            await Req.delete('http://localhost:3000/IMAGES', images[i].id);
            images = await Req.get('http://localhost:3000/IMAGES');
            render();
        });
    });
}

getEl.addEventListener('click', async (e) => {
    e.preventDefault();
    images = await Req.get('http://localhost:3000/IMAGES');
    got = true;
    render();
});

mixEl.addEventListener('click', async (e) => {
    e.preventDefault();
    images.sort(() => Math.random() > 0.5 ? 1 : -1);
    render();
});

sortEl.addEventListener('click', async (e) => {
    e.preventDefault();
    images.sort((a, b) => a.name > b.name ? 1 : -1);
    imagesEl.innerHTML = '';
    render();
});

postEl.addEventListener('click', async (e) => {
    e.preventDefault();
    await Req.post('http://localhost:3000/IMAGES', {name: nameEl.value, url: urlEl.value});
    images = await Req.get('http://localhost:3000/IMAGES');
    render();
});