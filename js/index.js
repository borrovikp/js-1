const clockContainer = document.querySelector('.clock');

setInterval(updateClock, 1000);

function updateClock() {
    clockContainer.innerText = new Date().toLocaleTimeString();
}

