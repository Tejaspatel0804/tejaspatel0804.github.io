// Countdown Timer
const countdown = document.getElementById("countdown");
const endDate = new Date("2027-03-22T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    countdown.innerHTML = "I'm back!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Music Player & Flower swap
const audioPlayer = document.getElementById("audioPlayer");
const disk = document.getElementById("disk");
const flower = document.getElementById("flower");
const playlistEl = document.getElementById("playlist");

// Simulating folder songs (GitHub Pages can't read folders directly)
const songs = [
   "songs/blue (instrumental).mp3",
  "songs/blue (instrumental).mp3"
];

songs.forEach((src, i) => {
  const li = document.createElement("li");
  li.textContent = src.split("/").pop();
  li.onclick = () => {
    audioPlayer.src = src;
    audioPlayer.play();
  };
  playlistEl.appendChild(li);
});

audioPlayer.onplay = () => {
  flower.textContent = "😊";
  disk.classList.add("playing");
};

audioPlayer.onpause = () => {
  flower.textContent = "🌼";
  disk.classList.remove("playing");
};
