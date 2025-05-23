// Countdown timer to 22 March 2027
const countdownEl = document.getElementById("countdown");
const targetDate = new Date("2027-03-22T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "Time reached!";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// Music Player Logic
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio-player");
  const playPauseBtn = document.getElementById("play-pause");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const songTitle = document.getElementById("song-title");
  const flower = document.getElementById("flower");
  const volumeSlider = document.getElementById("volume");
  const progressBar = document.getElementById("progress-bar");

  let currentSongIndex = 0;
  let songs = [
    "songs/Pehla Nasha - Instrumental.mp3",
    "songs/blue (instrumental).mp3"
    // Add your songs here
  ];

  function loadSong(index) {
    audio.src = songs[index];
    const fileName = songs[index].split("/").pop();
    songTitle.textContent = "Till I come back - " + fileName;
  }

  function playSong() {
    audio.play();
    playPauseBtn.innerHTML = "&#10074;&#10074;"; // pause icon
    flower.textContent = "😊";
  }

  function pauseSong() {
    audio.pause();
    playPauseBtn.innerHTML = "&#9658;"; // play icon
    flower.textContent = "🌸";
  }

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) playSong();
    else pauseSong();
  });

  prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });

  nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });

  audio.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });

  loadSong(currentSongIndex);


  // Send message box logic
  const sendBtn = document.getElementById("send-btn");
  const contactText = document.getElementById("contact-text");

  sendBtn.addEventListener("click", () => {
    const message = contactText.value.trim();
    if (message === "") {
      alert("Please enter a message before sending.");
      return;
    }
    // Use mailto to open user's email client
    const mailtoLink = `mailto:tejaspatel0804@gmail.com?subject=Message from website&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  });
});
