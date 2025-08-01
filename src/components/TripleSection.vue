<template>
    <section class="triple-section">
        <div class="block">
            <div class="video">
                <video autoplay muted loop playsinline>
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
            <div class="center-text">
                <h1>
                    Создаем контент, который привлекает внимание
                </h1>
                <p>
                    PJ PRODUCTION
                </p>
            </div>
            <div class="video">
                <video autoplay muted loop playsinline>
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>

        </div>

        <div class="tags-marquee-wrapper">
            <div class="line"></div>
            <div class="tags-marquee">
                <div class="marquee-content">
      <span>
        <span class="dot">●</span> ВИДЕО <span class="dot">●</span> ФОТО <span class="dot">●</span> SMM 
        <span class="dot">●</span> ТАРГЕТ <span class="dot">●</span> КОНТЕКСТ 
      </span>
      <span>
        <span class="dot">●</span> ВИДЕО <span class="dot">●</span> ФОТО <span class="dot">●</span> SMM 
        <span class="dot">●</span> ТАРГЕТ <span class="dot">●</span> КОНТЕКСТ 
      </span>
      <span>
        <span class="dot">●</span> ВИДЕО <span class="dot">●</span> ФОТО <span class="dot">●</span> SMM 
        <span class="dot">●</span> ТАРГЕТ <span class="dot">●</span> КОНТЕКСТ 
      </span>
      <span>
        <span class="dot">●</span> ВИДЕО <span class="dot">●</span> ФОТО <span class="dot">●</span> SMM 
        <span class="dot">●</span> ТАРГЕТ <span class="dot">●</span> КОНТЕКСТ 
      </span>
      <span>
        <span class="dot">●</span> ВИДЕО <span class="dot">●</span> ФОТО <span class="dot">●</span> SMM 
        <span class="dot">●</span> ТАРГЕТ <span class="dot">●</span> КОНТЕКСТ 
      </span>
    </div>
            </div>
            <div class="line"></div>
        </div>

    </section>

</template>

<style scoped>
.triple-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* 60px is vertical padding (top and bottom), 40px is horizontal (left and right) */
    padding: 10px 40px;
    box-sizing: border-box;
    background-color: #000;
    font-family: 'Montserrat', sans-serif;
}

.triple-section .block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex: 1;
}

.triple-section .video {
    flex: 1;
    max-width: 600px;
    height: 600px;
    position: relative;
    aspect-ratio: 1 / 1;
    border-radius: 24px;
    overflow: hidden;
    background-color: #111;
}

.triple-section .video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.triple-section .center-text {
    flex: 1;
    max-width: 600px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1 / 1;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid #363636;
    /* dark grey */
}


.triple-section .center-text {
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
}

.triple-section .center-text h1 {
    font-size: 48px;
    font-weight: 800;
    color: white;
    margin-bottom: 16px;
}

.triple-section .center-text p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
}

.tags-marquee-wrapper {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: -160px;
    margin-bottom: 40px;
}

.line {
    height: 1px;
    background-color: #444;
    width: 100%;
}

.tags-marquee {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    color: white;
    font-weight: 700;
    font-size: 32px;
    position: relative;
}

.marquee-content {
  display: inline-flex;
  width: max-content;
  gap: 12px;
  animation: marquee 20s linear infinite;
}

.marquee-content span {
  padding-right: 10px;
  display: inline-block;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.dot {
  color: red;
}



@media (max-width: 1440px) {
    .triple-section {
    min-height: auto;
    padding-bottom: 20px;
  }

    .tags-marquee-wrapper {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 30px;
        margin-bottom: 40px;
    }

    .triple-section .center-text {
        max-width: 600px;
        height: 400px;

    }


    .triple-section .video {
        max-width: 600px;
        height: 400px;
    }

    .triple-section .center-text h1 {
        font-size: 42px;
    }

    .triple-section .center-text p {
        font-size: 10px;
    }
}

@media (max-width: 1024px) {
    .triple-section {
    min-height: auto;
    padding-bottom: 20px;
  }

    .triple-section .center-text {
        max-width: 600px;
        height: 300px;

    }


    .triple-section .video {
        max-width: 600px;
        height: 300px;
    }

    .triple-section .center-text h1 {
        font-size: 32px;
    }

    .triple-section .center-text p {
        font-size: 10px;
    }

    .tags-marquee-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 40px;
}
}

@media (max-width: 768px) {
    .triple-section {
        min-height: auto;
        padding: 40px 20px;
    }

    .triple-section .block {
        flex-direction: column;
        gap: 24px;
    }

    .triple-section .video,
    .triple-section .center-text {
        width: 100%;
        aspect-ratio: 1 / 1;
    }

    .triple-section .center-text h1 {
        font-size: 56px;
    }

    .triple-section .center-text p {
        font-size: 12px;
    }

    .tags-marquee-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 40px;
}
}

@media (max-width: 480px) {
    .triple-section .center-text {
        max-width: 600px;
        height: 600px;

    }


    .triple-section .video {
        max-width: 600px;
        height: 600px;
    }

    .triple-section .center-text h1 {
        font-size: 16px;
    }

    .triple-section .center-text p {
        font-size: 8px;
    }

    .tags-marquee-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 40px;
}
}
</style>