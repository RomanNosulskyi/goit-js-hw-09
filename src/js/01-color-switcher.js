const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

start.addEventListener('click', onBtnStartClick);
stop.addEventListener('click', onBtnStopClick);

let intervalId = null;

function onBtnStartClick() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function onBtnStopClick() {
  clearInterval(intervalId);
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', '');
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
