function updateCountdown() {
  const endDate = new Date("March 22, 2027 00:00:00").getTime();
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "We're back!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s left`;

  requestAnimationFrame(updateCountdown);
}

updateCountdown();