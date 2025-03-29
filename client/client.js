const queryEl = document.getElementById('query');
const cityFilterEl = document.getElementById('cityFilter');
const ageFilterEl = document.getElementById('ageFilter');
const usersEl = document.getElementById('users');
const nameEl = document.getElementById('name');
const ageEl = document.getElementById('age');
const cityEl = document.getElementById('city');
const addEl = document.getElementById('add');

const serverUrl = 'https://lesson2js-server.onrender.com';

let timeout = setTimeout(() => {}, 0);

function render(users, callback = (users) => users) {
    usersEl.innerHTML = '';
    let newUsers = users.slice();
    newUsers = callback(newUsers);
    newUsers.forEach((user) => {
        usersEl.innerHTML += `<li data-id="${users.id}">${user.name} ${user.surname}, ${user.age}, ${user.city}</li>`;
    });
    Array.from(usersEl.children).forEach((li) => {
        li.addEventListener('click', async () => {
            await fetch(`${serverUrl}/users/${li.dataset.id}`, {
                method: 'DELETE'
            });
            const users = await fetch(`${serverUrl}/users`);
            const data = await users.json();
            render(data);
        });
    });
}

window.addEventListener('load', async () => {
    const users = await fetch(`${serverUrl}/users`);
    const data = await users.json();
    render(data);
});

addEl.addEventListener('click', async (e) => {
    e.preventDefault();
    const user = {
        name: nameEl.value.split(' ')[0],
        surname: nameEl.value.split(' ')[1],
        age: +ageEl.value,
        city: cityEl.value
    };
    await fetch(`${serverUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const users = await fetch(`${serverUrl}/users`);
    const data = await users.json();
    render(data);
});

queryEl.addEventListener('input', async () => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
        const users = await fetch(`${serverUrl}/users?query=${queryEl.value}`);
        const data = await users.json();
        render(data);
    }, 500);
});

cityFilterEl.addEventListener('click', async () => {
    const users = await fetch(`${serverUrl}/users?filter=city`);
    const data = await users.json();
    render(data, (users) => users.sort((a, b) => a.city > b.city ? 1 : -1));
});

ageFilterEl.addEventListener('click', async () => {
    const users = await fetch(`${serverUrl}/users?filter=age`);
    const data = await users.json();
    render(data, (users) => users.sort((a, b) => a.age > b.age ? 1 : -1));
});