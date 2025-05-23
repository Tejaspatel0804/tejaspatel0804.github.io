function updateCountdown() {
  const now = new Date();
  const endDate = new Date("March 22, 2027 00:00:00");
  const diff = endDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerText = "We are back!";
    return;
  }

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerText =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds left`;
}

setInterval(updateCountdown, 1000);
updateCountdown();