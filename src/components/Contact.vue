<template>
    <section id="contact" class="contact">
        <div class="banner">
            <img src="/pictures/contact-banner.jpg" alt="Contact Banner" />
            <div class="content-overlay">
                <h1 class="title">GET IN TOUCH</h1>
                <div class="social-icons">
                    <a class="icon" href="tel:+79166462462"><img src="/pictures/social_media_icons/phon.png" alt="Phone" /></a>
                    <a class="icon" href="mailto:pj.production@yandex.ru"><img src="/pictures/social_media_icons/gmail.png" alt="Email" /></a>
                    <a class="icon" href="https://pj-production.ru"><img src="/pictures/social_media_icons/web.png" alt="Web" /></a>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
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
    display: block;
    filter: brightness(0.4);
}

/* Абсолютный слой с текстом и иконками */
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
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 72px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 32px;
}



.social-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;

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
    aspect-ratio: 1/1;
}

.icon img {
  width: 32px;
  height: 32px;
  filter: invert(0); /* делает иконку белой */
  transition: filter 0.3s ease;
}

.icon:hover {
  background-color: rgba(255, 255, 255, 0.4); /* светло-серый с прозрачностью */
}

.icon:hover img {
  filter: invert(0); /* на ховере — возвращает оригинальный цвет */
}
</style>