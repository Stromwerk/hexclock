function updateTime() {
    const timeEl = document.getElementById('time');
    const date = new Date().toTimeString().substr(0, 8);
    timeEl.textContent = date;
    document.body.style.background = `#${date.replace(/\:/g, '')}`;
}
updateTime();
setInterval(updateTime, 1000);