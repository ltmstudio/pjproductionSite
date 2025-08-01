<script setup>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main class="content">
      <router-view />
    </main>
    <AppFooter />
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
</style>
