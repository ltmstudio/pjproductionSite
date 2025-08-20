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
      <div class="bottom-menu">
        <a href="#">ГЛАВНАЯ</a>
        <a href="#about">О НАС</a>
        <a href="#work">ВИДЕО И ФОТО</a>
        <a href="/blog">SMM</a>
        <a href="#contact">КОНТАКТЫ</a>
      </div>

      <div class="footer-info">
  <div class="info-col">
    <div class="kv">
      <div class="kv-title">Расчётный счёт:</div>
      <div class="kv-value">40802810640070007769</div>
    </div>
    <div class="kv">
      <div class="kv-title">ИНН: 503806969150</div>
      
    </div>
    <div class="kv">
      <div class="kv-title">БИК банка: 044525225</div>
    
    </div>
    <div class="kv">
      <div class="kv-title">ИНН банка: 7707083893</div>
     
    </div>
  </div>

  <div class="info-col">
    <div class="kv">
      <div class="kv-title">Корсчёт:</div>
      <div class="kv-value">30101810400000000225</div>
    </div>
    <div class="kv">
      <div class="kv-title">ОГРНИП: 325508100409800</div>
      
    </div>
    <div class="kv">
      <div class="kv-title">Банк: ПАО Сбербанк</div>
     
    </div>
    <div class="kv">
      <div class="kv-title">КПП банка: 773643002</div>
      
    </div>
  </div>

  <div class="info-col info-right">
    <p class="phone">+7 (916) 6-462-462</p>
    <p class="address">
      141271, Московская область,<br>
      Пушкинский р-н, пос.<br>
      Софрино&nbsp;–&nbsp;1, д.27, кв.&nbsp;53
    </p>
  </div>
</div>

<!-- Юр.инфо -->
<div class="footer-legal">
  <div class="owner">
    ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ПАСТУХОВА ЮЛИЯ СЕРГЕЕВНА
  </div>
  <a class="privacy" href="/Политика%20конфиденцильности%20сайт.pdf">Политика конфиденциальности</a>
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
  position: sticky;
  color: white;
  padding: 80px 0;
  font-family: sans-serif;
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
  background: #050505 url("/pictures/footer.jpg") center/contain no-repeat;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 0;
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





.footer-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 40px;
  margin-top: 32px;
  color: #fff;
  justify-items: center;   /* центруем содержимое колонок */
  text-align: center; 
  align-items: start;     /* центрируем текст */
}
.footer-info p { margin: 0; }

.info-col {
  display: grid;
  gap: 20px;
  justify-items: center;
  font-size: 16px;
}

.kv { display: grid; gap: 4px; }
.kv-title, .kv-value { margin: 0; }
.info-col.info-right { gap: 20px; align-self: center; }
.info-right,
.phone,
.address { text-align: center; }

.phone { line-height: 1.15; }
.address { line-height: 1.25; }

.footer-legal {
  margin-top: 60px;
  text-align: center;
  display: grid;
  gap: 10px;
}

.footer-legal .owner { font-size: 14px; letter-spacing: .5px; opacity: .85; }
.footer-legal .privacy { font-size: 18px; color: #b266ff; text-decoration: none; transition: color .2s ease, opacity .2s ease;}


/* базовый стиль ссылки */


.footer-legal .privacy {
  display: inline-block;          /* чтобы transform работал ожидаемо */
  color: #b266ff;
  transition: transform .2s ease, color .2s ease, opacity .2s ease;
  will-change: transform;
}

.footer-legal .privacy:hover {
  transform: translateY(6px);     /* движение ВНИЗ на ховере */
  color: #ffffff;                 /* опционально: перекрас */
  opacity: .95;
}

.footer-legal .privacy:active {
  transform: translateY(8px);     /* лёгкий "нажим" при клике */
}



@media (max-width:768px) {
  .app-footer {
  background: #050505 url("/pictures/footermini.jpg") center/contain no-repeat;
}
.info-col{font-size:14px}
.footer-legal .owner { font-size: 12px;  }
.footer-legal .privacy { font-size: 16px;  }

}

@media(max-width:480px) {
  .app-footer {
  background: #050505 url("/pictures/footermini.jpg") center/cover no-repeat;
}
  .footer-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);    /* центрируем текст */
}  
.info-col.info-right {
    grid-column: 1 / -1;   /* занять обе колонки */
    justify-self: center; 
    gap:10px; /* центр по горизонтали */
  }
  .info-col{ gap:10px}
}

</style>
