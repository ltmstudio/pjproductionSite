<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <RouterLink to="/" class="logo">PJ PRODUCTION</RouterLink>
    <nav class="nav" :class="{ open: isMobileMenuOpen }" aria-label="Основное меню">
      <RouterLink to="/" class="nav-link" @click="closeMenu">ГЛАВНАЯ</RouterLink>
      <RouterLink to="/#about" class="nav-link" @click="closeMenu">О НАС</RouterLink>
      <RouterLink to="/#work" class="nav-link" @click="closeMenu">ВИДЕО И ФОТО</RouterLink>
      <RouterLink to="/blog" class="nav-link" @click="closeMenu">SMM</RouterLink>
      <RouterLink to="/#contact" class="nav-link" @click="closeMenu">КОНТАКТЫ</RouterLink>
    </nav>
    <div class="tel-mail">
      <a class="phone-link" :href="`tel:${siteContacts.phone}`">
        <span>{{ siteContacts.phoneDisplay }}</span>
      </a>
      <div class="email-wrapper" @click="toggleEmail" role="button" tabindex="0" aria-label="Показать email" @keydown.enter="toggleEmail" @keydown.space.prevent="toggleEmail">
        <img src="/pictures/social_media_icons/gmail.png" alt="" class="mail-icon" />
        <span v-if="showEmail" class="email-text">{{ siteContacts.email }}</span>
      </div>
    </div>
    <button type="button" class="burger" aria-label="Открыть меню" :aria-expanded="isMobileMenuOpen" @click="toggleMenu">
      <span :class="{ open: isMobileMenuOpen }"></span>
      <span :class="{ open: isMobileMenuOpen }"></span>
      <span :class="{ open: isMobileMenuOpen }"></span>
    </button>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { siteContacts } from '@/config/contacts'

const showEmail = ref(false)
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

function updateScrolled() {
  isScrolled.value = window.scrollY > 40
}

function onEsc(e) {
  if (e.key === 'Escape') closeMenu()
}

watch(isMobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) window.addEventListener('keydown', onEsc)
  else window.removeEventListener('keydown', onEsc)
})

onMounted(() => {
  updateScrolled()
  window.addEventListener('scroll', updateScrolled, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateScrolled)
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onEsc)
})

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMenu = () => {
  isMobileMenuOpen.value = false
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
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.header.scrolled {
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.logo {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: inherit;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 24px;

}

.nav a,
.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1px;
  transition: opacity 0.3s;
}

.nav a:hover,
.nav-link:hover {
  opacity: 0.7;
}

.nav-link.router-link-active {
  opacity: 0.9;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
  margin: 0;
  color: inherit;
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