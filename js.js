// MUSIC VOLUME SETTING
const music = document.getElementById("bg-music");
music.volume = 0.3;

// COUNTDOWN TIMER
const countdown = document.getElementById("countdown");
const endDate = new Date("March 22, 2027 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance <= 0) {
    countdown.innerText = "We're back!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s left`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// CANVAS ANIMATION: Flower -> Smiley -> Repeat
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawFlower() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = 200;
  const centerY = 200;
  const petalCount = 8;
  const radius = 60;

  // Petals
  for (let i = 0; i < petalCount; i++) {
    const angle = (i * 2 * Math.PI) / petalCount;
    const x = centerX + Math.cos(angle) * 80;
    const y = centerY + Math.sin(angle) * 80;

    ctx.beginPath();
    ctx.fillStyle = "#f06292";
    ctx.ellipse(x, y, 30, 60, angle, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Center
  ctx.beginPath();
  ctx.fillStyle = "#fdd835";
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function drawSmiley() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Face
  ctx.beginPath();
  ctx.arc(200, 200, 100, 0, Math.PI * 2, true);
  ctx.fillStyle = "#ffeb3b";
  ctx.fill();
  ctx.stroke();

  // Eyes
  ctx.beginPath();
  ctx.arc(160, 170, 10, 0, Math.PI * 2, true); // Left eye
  ctx.arc(240, 170, 10, 0, Math.PI * 2, true); // Right eye
  ctx.fillStyle = "#000";
  ctx.fill();

  // Smile
  ctx.beginPath();
  ctx.arc(200, 210, 40, 0, Math.PI, false);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#000";
  ctx.stroke();
}

function loopAnimation() {
  drawFlower();
  setTimeout(() => {
    drawSmiley();
    setTimeout(loopAnimation, 2000);
  }, 2000);
}

loopAnimation();