<template>
    <section id="work" class="work-section">
        <div class="work-title">
            <h3>НАШИ РАБОТЫ</h3>
            <p class="work-description">Стоимость каждого проекта рассчитывается индивидуально при заказе</p>
        </div>

        <div class="work-grid">
            <img src="/galery-photo/007-min.jpg" alt="Work 1" />
            <img src="/galery-photo/0069-min.jpg" alt="Work 1" />
            <img src="/galery-photo/0070-min.jpg" alt="Work 1" />
            <img src="/galery-photo/0085-min.jpg" alt="Work 1" />
            <img src="/galery-photo/0088-min.jpg" alt="Work 1" />
            <img src="/galery-photo/0095-min.jpg" alt="Work 1" />
           
        </div>
    </section>
</template>
<script setup>

</script>

<style scoped>
.work-section {
    padding: 40px 5% 40px 5%;
    background-color: #000;
    text-align: center;
    color: white;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
}

.work-title h3 {
    font-size: 90px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 10px;
    margin-top: 0;
    text-transform: uppercase;
}

.work-description {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.2;
    margin: 0 0 30px;
    color: rgba(255, 255, 255, 0.6);
}
.work-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    max-width: 100%;
    margin: 0 auto;
    line-height: 1.2;
}

.work-grid img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    object-fit: cover;
    display: block;
    line-height: 1.2;
}

@media (max-width: 1440px) {
    .work-title h3 {
        font-size: 70px;
        line-height: 1;
    }
    .work-section{
        padding: 40px 5%;
        line-height: 1.2;
    }
}

@media (max-width: 1024px) {
    .work-title h3 {
        font-size: 54px;
        line-height: 1;
    }
    .work-section{
        padding: 32px 5%;
        line-height: 1.2;
    }
    .work-description{
        font-size: 14px;}
}


@media (max-width: 768px) {
  .work-grid {
    grid-template-columns: 1fr; /* Одна колонка */
    gap: 16px; /* Меньше отступ между элементами */
    line-height: 1.2;
  }

  .work-title h3 {
    font-size: 36px;
    margin-bottom: 10px;
    line-height: 1;
  }
  .work-description{
    font-size: 12px;
    margin: 0 0 25px;}

  .work-section {
    padding: 25px 2% ;
    line-height: 1.2;
  }
}

@media (max-width: 480px) {
    .work-title h3 {
        font-size: 22px;
        line-height: 1;
    }

    .work-grid img {
        border-radius: 20px;
        line-height: 1.2;
    }
    .work-section {
    padding: 20px 2% 20px 2%;
    background-color: #000;
    text-align: center;
    color: white;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.2;
}
.work-description{
    font-size: 9px;
margin: 0 0 18px;}
}

</style>