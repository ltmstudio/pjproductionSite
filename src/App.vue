<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

const route = useRoute()
const showFooter = computed(() => route.name !== 'NotFound')
const isLoading = ref(true)
const preloaderRef = ref(null)

function initScrollReveal() {
  const els = document.querySelectorAll('[data-scroll-reveal]')
  els.forEach((el) => {
    gsap.from(el, {
      y: 28,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    })
  })
  const staggerParents = document.querySelectorAll('[data-scroll-reveal-stagger]')
  staggerParents.forEach((parent) => {
    const children = parent.querySelectorAll('[data-scroll-reveal-item]')
    gsap.from(children, {
      y: 24,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: parent,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    })
  })
}

onMounted(() => {
  const duration = 1.2
  const fadeOut = 0.5
  setTimeout(() => {
    if (!preloaderRef.value) return
    gsap.to(preloaderRef.value, {
      opacity: 0,
      duration: fadeOut,
      ease: 'power2.inOut',
      onComplete: () => {
        isLoading.value = false
        nextTick(() => initScrollReveal())
      }
    })
  }, duration * 1000)
})
</script>

<template>
  <div class="layout">
    <a href="#main-content" class="skip-link">Перейти к контенту</a>
    <div ref="preloaderRef" class="preloader" v-show="isLoading">
      <div class="spinner"></div>
    </div>
    <div v-show="!isLoading" class="app-content">
      <AppHeader />
      <main id="main-content" class="content" tabindex="-1">
        <router-view />
      </main>
      <AppFooter v-if="showFooter" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.app-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
}

.content {
  flex: 1;
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 8px;
  padding: 12px 16px;
  background: #fff;
  color: #000;
  font-weight: 600;
  z-index: 10001;
  transition: top 0.2s;
}
.skip-link:focus {
  top: 8px;
}

.preloader {
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
