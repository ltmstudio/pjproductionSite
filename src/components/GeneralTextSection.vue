<template>
    <div class="genetal-text">
        <h3>
            Мы создаем и продвигаем контент: от REELS до видео рекламы, с качеством, которому вы можете доверять. Мы
            работаем с компаниями и творческими людьми, создавая и продвигая лучший контент, работая креативно и
            эффективно.
        </h3>
        <p>
            Создаём и продвигаем контент: <br>фото, видео, таргет, SMM, контекст.</br> 
        </p>
    </div>
</template>
<style scoped>
.genetal-text {
  max-width: 100%;
  margin: 0 auto;
  padding: 80px 5%; /* можно адаптировать */
  text-align: left;
  color: white;
  font-family: 'Montserrat', sans-serif;
}

.genetal-text h3 {
  font-size: 48px;
  line-height: 1.3;
  font-weight: 700;
  color: white;
  margin-bottom: 24px;
}

.genetal-text p {
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6); /* серый */
  font-weight: 400;
}


/* ⬇️ Адаптация */

@media (max-width: 1024px) {
 

  .genetal-text h3 {
    font-size: 40px;
  }

  .genetal-text p {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
 

  .genetal-text h3 {
    font-size: 32px;
  }

  .genetal-text p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
 
  .genetal-text {
  padding: 20px 5%; /* можно адаптировать */

}


  .genetal-text h3 {
    font-size: 24px;
  }

  .genetal-text p {
    font-size: 13px;
  }
}
</style>