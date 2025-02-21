const timeEl = document.getElementById('time');
const offset = 1000 - (new Date().getMilliseconds());

timeEl.innerText = `Current time: ${new Date().toLocaleTimeString('ru-RU')}`;
setTimeout(() => {
    timeEl.innerText = `Current time: ${new Date().toLocaleTimeString('ru-RU')}`;
    setInterval(() => {
        timeEl.innerText = `Current time: ${new Date().toLocaleTimeString('ru-RU')}`;
    }, 1000);
}, offset);