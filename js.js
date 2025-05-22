const countdown = document.getElementById("countdown");

function updateCountdown() {
  const endDate = new Date("March 22, 2027 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    countdown.innerHTML = "We are back!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    ${days} Days 
    ${hours} Hours 
    ${minutes} Minutes 
    ${seconds} Seconds left
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);