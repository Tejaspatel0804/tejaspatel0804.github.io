document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio-player");
  const playPauseBtn = document.getElementById("play-pause");
  const songTitle = document.getElementById("song-title");
  const flower = document.getElementById("flower");
  const volumeSlider = document.getElementById("volume");
  const progressBar = document.getElementById("progress-bar");

  let currentSongIndex = 0;
  let songs = [];

  // Manually list songs here, since GitHub Pages can't dynamically list files
  songs = [
    "songs/blue (instrumental).mp3",
    "songs/blue (instrumental).mp3"
    // Add your songs here
  ];

  function loadSong(index) {
    audio.src = songs[index];
    const fileName = songs[index].split("/").pop();
    songTitle.textContent = fileName;
    // You can update albumArt src if you want to load album covers dynamically
  }

  function playSong() {
    audio.play();
    playPauseBtn.textContent = "Pause";
    flower.textContent = "😊";
  }

  function pauseSong() {
    audio.pause();
    playPauseBtn.textContent = "Play";
    flower.textContent = "🌸";
  }

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) playSong();
    else pauseSong();
  });

  audio.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  });

  audio.addEventListener("timeupdate", () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
  });

  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });

  loadSong(currentSongIndex);
});
