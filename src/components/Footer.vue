<template>
  <footer class="app-footer">
    <div class="footer-container">
      <!-- Scroll to top button -->
      <div class="scroll-button">
        <button @click="scrollToTop" class="arrow-btn">
          <svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      <!-- Social title -->
     

      <!-- License links -->
      <div class="license-links">
        <a href="#">СТИЛЬ</a>
        <a href="#">ЛИЦЕНЗИИ</a>
        <a href="#">ИСТОРИЯ ИЗМЕНЕНИЙ</a>
      </div>

      <!-- Big background text -->
      <div class="footer-bg-text">
        <h2>PJ.Production</h2>
      </div>

      <div class="footer-line"></div>

      <!-- Bottom menu -->
      <div class="bottom-menu">
        <a href="#">ГЛАВНАЯ</a>
        <a href="#about">О НАС</a>
        <a href="#work">ВИДЕО И ФОТО</a>
        <a href="/blog">SMM</a>
        <a href="#contact">КОНТАКТЫ</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.app-footer {
  background-color: #0a0a0a;
  color: white;
  padding: 80px 0;
  font-family: sans-serif;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.scroll-button {
  display: flex;
  justify-content: center;
}

.arrow-btn {
  width: 56px;
  height: 56px;
  border: 1px solid #4b5563;
  border-radius: 9999px;
  background: transparent;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, transform 0.3s ease;
}

.arrow-btn:hover {
  background: #474645;
}

.arrow-btn:active {
  transform: translateY(-8px);
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

.social-title {
  text-align: center;
  font-size: 12px;
  color: #a3a3a3;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.social-icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.icon {
  width: 36px;
  height: 36px;
  border: 1px solid #4b5563;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.icon img {
  width: 16px;
  height: 16px;
}

.icon:hover {
  background-color: #474645;
}

.license-links {

  display: grid;

grid-template-columns: repeat(3, 1fr);
  text-align: center;

  gap: 0;
  color: #a3a3a3;
  font-size: 14px;
  margin-bottom: 40px;
}

.footer-bg-text {
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
}

.footer-bg-text h2 {
  font-size: 11vw;
  font-weight: 800;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
}

@media (min-width: 640px) {
  .license-links {
    flex-direction: row;
    justify-content: space-between;
  }
}

.license-links a {
  color: #a3a3a3;
  text-decoration: none;
  transition: color 0.3s;
}

.license-links a:hover {
  color: #ffffff
}

.footer-bg-text {
  text-align: center;
}

.footer-bg-text h2 {
  font-size: 11vw;
  font-weight: 800;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.footer-line {
  border-bottom: 1px solid #1f2937;
  margin-top: 40px;
}

.bottom-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
  font-size: 14px;
}

.bottom-menu a {
  color: #a3a3a3;;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;
}

.bottom-menu a:hover {
  color: #ffffff;
  transform: translateY(-10px);
}
</style>
