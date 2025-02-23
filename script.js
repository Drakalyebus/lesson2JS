import Req from "./requests.js";

const postEl = document.getElementById("post");
const getEl = document.getElementById("get");
const patchEl = document.getElementById("patch");
const deleteEl = document.getElementById("delete");
const listEl = document.getElementById("list");

postEl.addEventListener("click", async (e) => {
    e.preventDefault();
    await Req.post("http://localhost:3000/products", {
        image: prompt("Введите ссылку на картинку"),
        name: prompt("Введите название"),
        price: +prompt("Введите стоимость"),
        quantity: +prompt("Введите количество"),
        id: prompt("Введите id")
    });
});

getEl.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = await Req.get("http://localhost:3000/products");
    listEl.innerHTML = '';
    data.forEach((el) => {
        listEl.innerHTML += `<li><img src="${el.image}"><span>${el.name}</span><span>${el.price}$ x ${el.quantity}</span></li>`;
    });
});

patchEl.addEventListener("click", async (e) => {
    e.preventDefault();
    await Req.patch("http://localhost:3000/products", +prompt("Введите id"), {
        image: prompt("Введите ссылку на картинку"),
        name: prompt("Введите название"),
        price: +prompt("Введите стоимость"),
        quantity: +prompt("Введите количество"),
        id: +prompt("Введите id")
    });
});

deleteEl.addEventListener("click", async (e) => {
    e.preventDefault();
    await Req.delete("http://localhost:3000/products", +prompt("Введите id"));
});