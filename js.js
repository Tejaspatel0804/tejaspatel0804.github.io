let seconds = 10;

function updateCountdown() {
  const countdownEl = document.getElementById("countdown");
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  countdownEl.textContent = 
    `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timer);
    countdownEl.textContent = "🎉 Time's up!";
  }
}

let timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display immediately
