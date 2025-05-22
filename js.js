function updateCountdown() {
  const targetDate = new Date("March 22, 2027 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference < 0) {
    document.getElementById("countdown").innerHTML = "We're back!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
    ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds left
  `;
}

setInterval(updateCountdown, 1000);