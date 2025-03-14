const input = document.getElementById('input');
const send = document.getElementById('send');
const response = document.getElementById('response');

send.addEventListener('click', async (e) => {
    e.preventDefault();
    const data = await fetch('/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: JSON.parse(input.value)})
    });
    response.value = data.status;
    try {
        response.value += '\n\n' + JSON.stringify(await data.json());
    } catch (e) {}
});