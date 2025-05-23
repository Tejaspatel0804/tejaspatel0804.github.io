const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function drawPetal(angle, radius, petalLength, petalWidth, color) {
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(petalLength / 2, -petalWidth, petalLength, 0);
  ctx.quadraticCurveTo(petalLength / 2, petalWidth, 0, 0);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function drawFlower() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const petalCount = 6;
  const angleStep = (Math.PI * 2) / petalCount;
  for (let i = 0; i < petalCount; i++) {
    drawPetal(i * angleStep, 50, 80, 30, "#e63946");
  }

  // Draw flower center
  ctx.beginPath();
  ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
  ctx.fillStyle = "#ffb703";
  ctx.fill();
}

function drawSmiley() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Face
  ctx.beginPath();
  ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
  ctx.fillStyle = "#ffd166";
  ctx.fill();
  ctx.stroke();

  // Eyes
  ctx.beginPath();
  ctx.arc(centerX - 25, centerY - 20, 10, 0, Math.PI * 2);
  ctx.arc(centerX + 25, centerY - 20, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#073b4c";
  ctx.fill();

  // Smile
  ctx.beginPath();
  ctx.arc(centerX, centerY + 10, 40, 0, Math.PI);
  ctx.strokeStyle = "#073b4c";
  ctx.lineWidth = 5;
  ctx.stroke();
}

function loopAnimation() {
  drawFlower();
  setTimeout(() => {
    drawSmiley();
    setTimeout(loopAnimation, 2000); // loop back to flower after 2 sec
  }, 2000);
}

loopAnimation();