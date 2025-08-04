<template>
    <section id="contact" class="contact">
      <div class="banner">
        <img src="/pictures/contact-banner.jpg" alt="Contact Banner" />
        <div class="content-overlay">
          <h3 class="title">СВЯЖИТЕСЬ С НАМИ</h3>
          <div class="contact-items">
            <div class="contact-item">
              <div class="icon"><img src="/pictures/social_media_icons/phon.png" alt="Phone" /></div>
              <span>+8-916-646-24-62</span>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="/pictures/social_media_icons/gmail.png" alt="Email" /></div>
              <span>pj.production@yandex.ru</span>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="/pictures/social_media_icons/web.png" alt="Web" /></div>
              <span>pj-production.ru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  

<style scoped>
.contact {
  width: 100%;
  background: #000;
  color: #fff;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}

.banner {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4);
  display: block;
}

.content-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* заголовок вверх */
  align-items: center;
  gap: 40px;
}

.title {
    padding-left: 20px;
    padding-right: 20px;
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 20px;
  letter-spacing: 2px;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
}

.contact-item {
    max-width: 900px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
}

.icon {
  width: 48px;
  height: 48px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.icon img {
  width: 24px;
  height: 24px;
  filter: invert(0);
}

.icon:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
@media (max-width: 768px) {
  .title {
    font-size: 32px;
    text-align: center;
  }

  .contact-items {
    align-items: center;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
  }
}

</style>