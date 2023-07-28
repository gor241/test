const video = document.getElementById('video');
    const currentTimeDisplay = document.getElementById('current-time');

    // Отобразить текущее время видео в формате MM:SS:mmm
    function displayCurrentTime() {
      const minutes = Math.floor(video.currentTime / 60).toString().padStart(2, '0');
      const seconds = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
      const milliseconds = Math.floor((video.currentTime * 1000) % 1000).toString().padStart(3, '0');
      currentTimeDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;
    }
    // padStart() - это метод JavaScript для строк, который добавляет указанный символ (или строку) в начало текущей строки до достижения указанной длины.

    // Воспроизведение или пауза видео при клике
    function toggleVideoPlayback() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }

    // Вернуть видео на начальный кадр по окончанию воспроизведения
    function resetVideo() {
      video.currentTime = 0;
      displayCurrentTime();
    }

    video.addEventListener('click', toggleVideoPlayback); // действия при нажатии 
    video.addEventListener('timeupdate', displayCurrentTime); // действия во время воспроизведения
    video.addEventListener('ended', resetVideo); // действия по окончании