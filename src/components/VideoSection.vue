<template>
    <section class="video-section">
        <div class="up">
            <div class="large-text">
                <h3>СТУДИЯ КРЕАТИВНОГО КОНТЕНТА</h3>
            </div>
            <div class="carousel-arrows">
                <button class="arrow-button prev" @click="prevVideo">
                    <span class="arrow-icon">←</span>
                </button>
                <button class="arrow-button next" @click="nextVideo">
                    <span class="arrow-icon">→</span>
                </button>
            </div>
        </div>

        <div class="video-carousel">
            <transition name="fade" mode="out-in">
                <video class="youtube-video" autoplay muted loop playsinline :key="currentVideo">
                    <source :src="currentVideo" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </transition>
        </div>

    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const videos = [
    '/videos/video_58.mp4',
    '/videos/video_58.mp4',
]

const currentIndex = ref(0)
const videoRef = ref(null)

const currentVideo = computed(() => videos[currentIndex.value])

const nextVideo = () => {
    currentIndex.value = (currentIndex.value + 1) % videos.length
}

const prevVideo = () => {
    currentIndex.value =
        (currentIndex.value - 1 + videos.length) % videos.length
}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}


.video-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    padding: 0 5% 40px 5%;
}

.up {
    display: flex;
    justify-content: space-between;
    align-items: end;
    max-width: 100%;
    margin: 0 auto;

    color: white;

}

.large-text {
    flex: 1;
    text-align: left;
    display: flex;
    align-items: flex-end;
    /* Align text to the bottom */
}

.large-text h3 {
    font-size: 90px;
    line-height: 1.2;
    font-weight: 700;
    color: white;
    margin-top: 0;
    margin-bottom: 0;
    /* Remove bottom margin for perfect alignment */
}

.carousel-arrows {
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    align-items: flex-end;
    /* Align buttons to the bottom */
    height: 100%;
    /* Ensure full height for alignment */
}

.arrow-button {
    all: unset;
    width: 50px;
    aspect-ratio: 1 / 1;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: background 0.3s;
}

/* 1440px */

.arrow-button:hover {
    background: rgba(255, 255, 255, 0.1);
}

.arrow-icon {
    pointer-events: none;
    user-select: none;
}


.video-carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px !important;
    width: 100%;
    height: 90%;
    position: relative;
    overflow: hidden;
    /* ✅ критично */
    background-color: #000;
    /* ⬅️ предотвращает просветы до загрузки iframe */
}

.youtube-video {
    display: block;
    margin: auto;
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


@media (max-width: 2561px) {
    .fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}


.video-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    padding: 40px 5%;
}

.up {
    display: flex;
    justify-content: space-between;
    align-items: end;
    max-width: 100%;
    margin: 0 auto;

    color: white;

}

.large-text {
    flex: 1;
    text-align: left;
    display: flex;
    align-items: flex-end;
    /* Align text to the bottom */
}

.large-text h3 {
    font-size: 90px;
    line-height: 1.3;
    font-weight: 700;
    color: white;
    margin-bottom: 0;
    /* Remove bottom margin for perfect alignment */
}

.carousel-arrows {
    display: flex;
    gap: 16px;
    justify-content: flex-end;
    align-items: flex-end;
    /* Align buttons to the bottom */
    height: 100%;
    padding: 30px;
    /* Ensure full height for alignment */
}

.arrow-button {
    all: unset;
    width: 50px;
    aspect-ratio: 1 / 1;
    border: 2px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    cursor: pointer;
    transition: background 0.3s;
}

/* 1440px */


}
@media (max-width: 1440px) {
  
    .large-text h3 {
        font-size: 70px;
    }

    .arrow-button {
        width: 44px;
        font-size: 18px;
    }

    .carousel-arrows {
        gap: 14px;
    }
}

/* 1024px */
@media (max-width: 1024px) {
  

    .large-text h3 {
        font-size: 54px;
    }

    .arrow-button {
        width: 38px;
        font-size: 16px;
    }

    .carousel-arrows {
        gap: 12px;
    }
    .video-section{
        padding: 32px 5%;
    }
}

/* 768px */
@media (max-width: 768px) {

    .large-text h3 {
        font-size: 36px;
    }

    .arrow-button {
        width: 30px;
        font-size: 13px;
    }

    .carousel-arrows {
        gap: 10px;
    }
    .video-carousel{
        border-radius: 20px;
    }
    .video-section{
        padding: 25px 2%;
    }

}

/* 480px */
@media (max-width: 480px) {
    .video-section {
    padding: 10px 2% 20px 2%;
}

    .large-text h3 {
        font-size: 22px;
    }

    .arrow-button {
        width: 22px;
        font-size: 10px;
    }

    .carousel-arrows {
        gap: 7px;
    }
    .youtube-video {
    clip-path: inset(0 round 20px);
}
.video-carousel {
    border-radius: 20px !important;
}
}
</style>