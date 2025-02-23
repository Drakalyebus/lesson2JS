import Req from "./requests.js";

const tasksEl = document.getElementById("tasks");
const postEl = document.getElementById("post");

(async () => {
    const tasks = await Req.get("http://localhost:3000/TASKS");
    tasksEl.innerHTML = '';
    tasks.forEach((task) => {
        tasksEl.innerHTML += `<li ${task.done ? 'style="text-decoration: line-through;"' : ''}>${task.title} - ${task.description} - ${task.date}</li>`
    });
    const tasksEls = document.querySelectorAll('li');
    tasksEls.forEach((taskEl, i) => {
        const task = tasks[i];
        taskEl.addEventListener("click", async () => {
            await Req.delete("http://localhost:3000/TASKS", task.id);
            location.reload();
        });
        taskEl.addEventListener("contextmenu", async (e) => {
            e.preventDefault();
            await Req.patch("http://localhost:3000/TASKS", task.id, {done: !task.done});
            location.reload();
        });
    });
})();

postEl.addEventListener("click", async () => {
    await Req.post("http://localhost:3000/TASKS", {title: prompt("Введите название задачи"), description: prompt("Введите описание задачи"), date: new Date().toLocaleDateString('ru-RU'), done: false});
    location.reload();
});