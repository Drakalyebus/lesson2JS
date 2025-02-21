(async () => {
    const files = await fetch('/getFiles');
    const filesText = await files.json();
    document.getElementById('files').textContent = filesText.join('\n');
})();