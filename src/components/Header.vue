<template>
    <header class="header">
      <div class="logo">PJ PRODUCTION</div>
      <!-- <sup>®</sup> -->
  
      <!-- Desktop navigation -->
      <nav class="nav" :class="{ open: isMobileMenuOpen }">
        <a href="#main">ГЛАВНАЯ</a>
        <a href="#about">О НАС</a>
        <a href="#work">ВИДЕО И ФОТО</a>
        <a href="/blog">SMM</a>
        <a href="#contact">КОНТАКТЫ</a>
      </nav>
  
      <!-- Mobile burger -->
      <div class="burger" @click="toggleMenu">
        <span :class="{ open: isMobileMenuOpen }"></span>
        <span :class="{ open: isMobileMenuOpen }"></span>
        <span :class="{ open: isMobileMenuOpen }"></span>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const isMobileMenuOpen = ref(false)
  const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  </script>
  
  <style scoped>
  .header {
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
    height: 64px;
    font-family: 'Montserrat', sans-serif;
    background: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
  }
  
  .logo {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
   
  }
  
  .nav {
    display: flex;
    gap: 24px;
    
  }
  
  .nav a {
    color: #fff;
    text-decoration: none;
    font-size: 13px;
    letter-spacing: 1px;
    transition: opacity 0.3s;
    
  }
  
  .nav a:hover {
    opacity: 0.7;
  }
  
  .burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }
  
  .burger span {
    width: 22px;
    height: 2px;
    background: #fff;
    transition: 0.3s;
  }
  
  /* Mobile */
  @media (max-width: 768px) {
    .burger {
      display: flex;
    }
  
    .nav {
      position: absolute;
      top: 64px;
      left: 0;
      width: 100%;
      flex-direction: column;
      background: #000;
      padding: 20px 0;
      display: none;
      align-items: center;
    }
  
    .nav.open {
      display: flex;
    }
  }
  </style>
  