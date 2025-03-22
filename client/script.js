import Fetcher from "./utils/fetcher.js";
import text from "./utils/texter.js";

const inputsEl = {
    name: document.getElementById("name"),
    price: document.getElementById("price"),
    sale: document.getElementById("sale")
}
const addEl = document.getElementById("add");
const saleProductsEl = document.getElementById("saleProducts");
const allProductsEl = document.getElementById("allProducts");

let products = [];
let saleProducts = [];

async function render() {
    products = await Fetcher.get(`/products`, [], {onlySale: false});
    saleProducts = await Fetcher.get('/products', [], {onlySale: true});
    allProductsEl.innerHTML = "";
    products.forEach((product) => {
        const li = document.createElement("li");
        allProductsEl.appendChild(li);
        li.dataset.id = product._id;
        li.innerHTML = `${text(product.name)} - ${!product.sale ? product.price : `<del>${text(product.price)}</del> ${text(product.price * 0.75)}`}`;
        li.addEventListener("dblclick", async (e) => {
            await Fetcher.delete(`/products`, li.dataset.id);
            await render();
        });
        li.addEventListener("contextmenu", async (e) => {
            e.preventDefault();
            const info = {
                name: prompt("Укажите новое название..."),
                price: +prompt("Укажите новую стоимость..."),
                sale: prompt("Товар теперь на акции? (true/false)") == "true"
            }
            await Fetcher.patch(`/products`, li.dataset.id, info);
            await render();
        });
    });
    saleProductsEl.innerHTML = "";
    saleProducts.forEach((product) => {
        const li = document.createElement("li");
        saleProductsEl.appendChild(li);
        li.dataset.id = product._id;
        li.innerHTML = `${text(product.name)} - <del>${text(product.price)}</del> ${text(product.price * 0.75)}`;
        li.addEventListener("dblclick", async (e) => {
            await Fetcher.delete(`/products`, li.dataset.id);
            await render();
        });
        li.addEventListener("contextmenu", async (e) => {
            e.preventDefault();
            const info = {
                name: prompt("Укажите новое название..."),
                price: +prompt("Укажите новую стоимость..."),
                sale: prompt("Товар теперь на акции? (true/false)") == "true"
            }
            await Fetcher.patch(`/products`, li.dataset.id, info);
            await render();
        });
    });
}

render();

addEl.addEventListener("click", async (e) => {
    e.preventDefault();
    await Fetcher.post(`/products`, {name: inputsEl.name.value, price: inputsEl.price.value, sale: inputsEl.sale.checked});
    products.push({name: inputsEl.name.value, price: inputsEl.price.value, sale: inputsEl.sale.checked});
    if (inputsEl.sale.checked) {
        saleProducts.push({name: inputsEl.name.value, price: inputsEl.price.value, sale: inputsEl.sale.checked});
    }
    await render();
});