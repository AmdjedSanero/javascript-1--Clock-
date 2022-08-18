let secHand = document.querySelector(".hand.sec-hand");
let minHand = document.querySelector(".hand.min-hand");

let hourHand = document.querySelector(".hand.hour-hand");

function setDate() {
  let now = new Date();
  let hours = now.getHours();
  let mins = now.getMinutes();

  let secondes = now.getSeconds();
  let secondesDegrees = (secondes / 60) * 360 - 90;
  let minDegrees = (mins / 60) * 360 - 90;
  let hourDegrees = (hours / 12) * 360 - 90;

  secHand.style.transform = `rotate(${secondesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hours}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
}
setInterval(setDate, 1000);
