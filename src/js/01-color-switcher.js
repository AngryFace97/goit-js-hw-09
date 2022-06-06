const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopBtn.disabled = true;

function noDelaySetInterval(func, interval) {
  func();
  return setInterval(func, interval);
}

function startSetInterval() {
  interval = noDelaySetInterval(function changeColors() {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

startBtn.addEventListener('click', () => {
  if ((startBtn.disabled = true)) {
    stopBtn.disabled = false;
  }
  startSetInterval();
});

stopBtn.addEventListener('click', () => {
  if ((stopBtn.disabled = true)) {
    startBtn.disabled = false;
  }
  clearInterval(interval);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}