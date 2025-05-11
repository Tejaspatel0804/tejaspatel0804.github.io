// Set countdown (10 seconds for demo)
let timeLeft = 10;

const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  countdownEl.textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateCountdown, 1000);
  } else {
    countdownEl.textContent = "⏰ Time's up!";
  }
}

updateCountdown();
