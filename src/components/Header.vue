<template>
  <header class="header">
    <div class="logo">PJ PRODUCTION</div>
    <!-- <sup>®</sup> -->

    <!-- Desktop navigation -->
    <nav class="nav" :class="{ open: isMobileMenuOpen }">
      <a href="/">ГЛАВНАЯ</a>
      <a href="#about">О НАС</a>
      <a href="#work">ВИДЕО И ФОТО</a>
      <a href="/blog">SMM</a>
      <a href="#contact">КОНТАКТЫ</a>
    </nav>
    <div class="tel-mail">
      <a class="phone-link" href="tel:+79166462462">
        <!-- <img src="/pictures/social_media_icons/phon.png" alt="Phone" /> -->
        <span>+8 916 646 24 62</span>
      </a>

      <div class="email-wrapper" @click="toggleEmail">
        <img src="/pictures/social_media_icons/gmail.png" alt="Email" class="mail-icon" />
        <span v-if="showEmail" class="email-text">pj.production@yandex.ru</span>
      </div>
    </div>


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
const showEmail = ref(false)
const isMobileMenuOpen = ref(false)
const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const toggleEmail = () => {
  showEmail.value = !showEmail.value
}
</script>

<style scoped>
.tel-mail {
  display: flex;
  align-items: center;
  gap: 20px;
}

.phone-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 13px;
  text-decoration: none;
}

.phone-link img {
  width: 20px;
  height: 20px;
  filter: invert(0);
}

.email-wrapper {
  position: relative;
  cursor: pointer;
}

.mail-icon {
  width: 20px;
  height: 20px;
  filter: invert(0);
}

.email-text {
  position: absolute;
  top: 28px;
  right: 0;
  
  color: #ffffff;
  padding: 4px 8px;
  font-size: 12px;
  white-space: nowrap;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}












.header {
  align-items: center;
  position: sticky;
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
    backdrop-filter: blur(12px);
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav.open {
    display: flex;
    border-bottom: 1.5px solid white;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);

  }
}
@media (max-width: 480px) {
  .logo {
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;

}
.mail-icon{
    width: 16px;
    height: 16px;
    filter: invert(0);
}
.phone-link{
    font-size: 11px;
}
.header{
    padding: 0 4px;
}
}
</style>