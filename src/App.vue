<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'

const route = useRoute()
const showFooter = computed(() => route.name !== 'NotFound')

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500) // имитация загрузки 1.5 сек
})
</script>

<template>
  <div class="layout">
    <div v-if="isLoading" class="preloader">
      <div class="spinner"></div>
    </div>
    <div v-else>
      <AppHeader />
      <main class="content">
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
}

.content {
  flex: 1;
}

/* Preloader styles */
.preloader {
  position: fixed;
  inset: 0;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
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
