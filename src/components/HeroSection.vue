<template>
  <section id="main" class="hero-section">
    <div class="video-container">
      <img class="youtube-video" src="/pictures/img-banner-first.jpg" frameborder="0" allow="autoplay; encrypted-media"
        allowfullscreen></img>
      <div class="overlay-text">
        <h1>PJ PRODUCTION</h1>
        <h2>СТУДИЯ КРЕАТИВНОГО КОНТЕНТА</h2>
      </div>
      <div class="video-navigation">
        <span class="nav-dot"></span>
        <span class="nav-line"></span>
        <span class="nav-dot active"></span>
        <span class="nav-line"></span>
        <span class="nav-dot"></span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 24px;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
}

.video-container {
  border-radius: 40px !important;
  width: 90%;
  height: 90%;
  position: relative;
  overflow: hidden;
  /* ✅ критично */
  background-color: #000;
  /* ⬅️ предотвращает просветы до загрузки iframe */

}

.youtube-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  border: none;

  /* 👇 Обрезка углов через clip-path */
  clip-path: inset(0 round 40px);
}


.overlay-text {
  position: absolute;
  z-index: 2;
  bottom: 10%;
  /* ⬅️ расположение снизу на 10% от низа */
  left: 50%;
  transform: translateX(-50%);
  /* центрируем по горизонтали */
  color: white;
  text-align: center;
}

.overlay-text h1 {
  font-size: 90px;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 16px;
}

.overlay-text h2 {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
}

.video-navigation {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 3;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.8;
}

.nav-dot.active {
  background-color: #b00020;
  width: 14px;
  /* красный */
  height: 14px;
  animation: blink 1.2s infinite;
}

.nav-line {
  width: 620px;
  height: 2px;
  background-color: white;
  opacity: 0.5;
}


@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}





@media (max-width: 1440px) {}

@media (max-width: 1440px) {
  .overlay-text {
    bottom: 20%;
  }

  .overlay-text h1 {
    font-size: 64px;
  }

  .overlay-text h2 {
    font-size: 32px;
  }

  .nav-line {
    width: 480px;
  }

  .hero-section {
    padding-top: 32px;
    min-height: 90vh;
  }

  .video-container {
    height: 85%;
  }
}

@media (max-width: 1024px) {
  .overlay-text {
    bottom: 20%;
  }

  .overlay-text h1 {
    font-size: 64px;
  }

  .overlay-text h2 {
    font-size: 32px;
  }

  .video-navigation {
    bottom: 86px;
  }

  .nav-line {
    width: 400px;
  }

  .hero-section {
    padding-top: 0px;
    min-height: 90vh;
  }

  .video-container {
    height: 85%;
  }
}

@media (max-width: 768px) {
  .overlay-text h1 {
    font-size: 32px;
  }

  .overlay-text h2 {
    font-size: 16px;
  }

  .nav-line {
    width: 300px;
  }

  .hero-section {
    padding-top: 40px;
    min-height: auto;
    height: auto;
  }

  .video-container {
    height: auto;
    aspect-ratio: 16 / 9;
  }

  .video-navigation {
    bottom: 32px;
  }
}

@media (max-width: 480px) {

  .video-navigation {
    padding-top: 15px;
    bottom: 16px;
  }

  .overlay-text h1 {
    font-size: 16px;
  }

  .overlay-text h2 {
    font-size: 8px;
  }

  .nav-line {
    width: 120px;
  }

  .nav-dot {
    width: 7px;
    height: 7px;
  }

  .nav-dot.active {
    width: 9px;
    height: 9px;
  }

  .hero-section {
    padding-top: 70px;
  }
  .video-container {
  border-radius: 20px !important;
}

.youtube-video {
  clip-path: inset(0 round 20px);
}
}
</style>