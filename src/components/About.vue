<template>
    <section id="about" class="about-section">
        <div class="main-text">
            <h2>ВИДЕО. ФОТО. SMM. <br>ПРОДВИЖЕНИЕ</h2>
        </div>

        <div class="text-row">
            <div class="left-text">
                <p>МЫ — КОМАНДА КРЕАТИВНЫХ ИНТЕРНЕТ МАРКЕТОЛОГОВ, ФОТОГРАФОВ И ВИДЕООПЕРАТОРОВ.</p>
                <p>МЫ — ПРЕВРАЩАЕМ КАРТИНКИ В ЭФФЕКТИВНЫЙ ИНСТРУМЕНТ МАРКЕТИНГА.</p>
            </div>
            <div class="right-text">
                <p>
                    Студия креативного контента: создаём и продвигаем эффективно. Мы —
                    команда интернет-маркетологов, фотографов и видеографов, превращающая контент
                    в мощный инструмент продвижения. Создаём и продвигаем видео (от Reels до рекламы),
                    фото, SMM, работая с таргетом и контекстной рекламой. Наш подход — креативность, качество и
                    результат.
                </p>
                <p>
                    Работаем с бизнесом и творческими проектами, привлекаем внимание аудитории и повышаем вовлечённость.
                    От идеи до реализации: мы делаем контент, который продаёт и запоминается.
                    Видео. Фото. SMM. Продвижение. Доверьтесь профессионалам!

                </p>
            </div>
        </div>
    </section>
</template>



<style scoped>
.about-section {
    display: flex;
    flex-direction: column;
    padding: 40px 5%;
    background-color: #000;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    
}

.main-text {
    margin-bottom: 40px;
   
}

.main-text h2 {
    font-size: 90px;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    text-transform: uppercase;
}

.text-row {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    gap: 60px;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
}

.left-text {
    flex: 0 0 260px;
    font-size: 9px;
    font-weight: 500;
    text-transform: uppercase;
    color: #bdbdbd;
    line-height: 1.4;
    letter-spacing: 0.05em;
    padding-top: 20px;
}

.right-text {
    flex: 1;
    max-width: 720px;
    font-size: 21px;
    line-height: 1.4;
    letter-spacing: 0.01em;
    padding-left: 50px;
}


@media (max-width: 2561px) {
    .about-section {
        height:auto;
    display: flex;
    flex-direction: column;
    padding: 40px 5%;
    background-color: #000;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    
}

.main-text {
    margin-bottom: 40px;
   
}

.main-text h2 {
    font-size: 90px;
    font-weight: 700;
 
    margin: 0;
    text-transform: uppercase;
}

.text-row {
    display: flex;
    max-width: 2560px;
    margin: 0 auto;
    gap: 60px;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
}

.left-text {
    flex: 0 0 350px;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    color: #bdbdbd;

    letter-spacing: 0.05em;
 
}

.right-text {
    flex: 1;
    max-width: 1500px;
    font-size: 28px;

    letter-spacing: 0.01em;
}

}

@media (max-width: 1440px) {
    .main-text h2 {
        font-size: 70px;
        
    }
}

@media (max-width: 1024px) {
  .main-text {
    margin-bottom: 10px;
   
  }
  .about-section {
padding: 32px 5%;
}
  .main-text h2 {
    font-size: 54px;
    padding-left: 0;
  }

  .text-row {
    flex-direction: column;
    gap: 32px;
    padding: 0;
    margin: 0; /* убираем auto */
  }

  .left-text,
  .right-text {
    max-width: 100%;
    flex: initial; 
   /* добавляем чтобы выровнять по левому краю */
    padding-right: 20px;
  }

  .left-text {
    font-size: 12px;
    text-transform: uppercase;
    padding-top: 0;
  }

  .right-text {
    font-size: 16px;
    padding-left: 0;
  }
}


@media (max-width: 768px) {
    .main-text h2 {
        font-size: 36px;
        padding-left: 0;
    }
    .about-section {
padding: 25px 2%;
}
.left-text{
    padding:0;
}
.right-text{
    padding:0;
}
}
@media (max-width: 480px) {
    .about-section {

    padding: 20px 2%;

    
}
    .main-text h2 {
        font-size: 22px;
        padding-left: 0;
    }

    .left-text {
        font-size: 11px;
    }

    .right-text {
        font-size: 15px;
    }
    .text-row{
        gap: 10px;
    }
}
</style>