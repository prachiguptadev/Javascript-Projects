const clock = document.querySelector("h2");

setInterval(function () {
  clock.innerHTML = new Date().toLocaleTimeString();
}, 1000);
