function updateTime() {
    const timeEl = document.getElementById('time');
    const date = new Date().toTimeString().substr(0, 8);
    const dateColor = `#${date.replace(/\:/g, '')}`;
    timeEl.textContent = date;
    document.body.style.background = invert(dateColor);
    document.getElementById('time').style.color = dateColor;
}
updateTime();
setInterval(updateTime, 1000);