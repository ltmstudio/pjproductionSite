<template>
    <section id="work" class="work-section">
        <div class="work-title">
            <h1>НАШИ РАБОТЫ</h1>
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
    padding: 100px 5% 80px;
    background-color: #000;
    text-align: center;
    color: white;
    font-family: 'Montserrat', sans-serif;
}

.work-title h1 {
    font-size: 90px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 60px;
    text-transform: uppercase;
}

.work-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    max-width: 90%;
    margin: 0 auto;
}

.work-grid img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    object-fit: cover;
    display: block;
}

@media (max-width: 1440px) {
    .work-title h1 {
        font-size: 70px;
    }
}

@media (max-width: 1024px) {
    .work-title h1 {
        font-size: 54px;
    }
}

@media (max-width: 768px) {
  .work-grid {
    grid-template-columns: 1fr; /* Одна колонка */
    gap: 16px; /* Меньше отступ между элементами */
  }

  .work-title h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .work-section {
    padding: 60px 5% 60px;
  }
}

@media (max-width: 480px) {
    .work-title h1 {
        font-size: 22px;
    }

    .work-grid img {
        border-radius: 10px;
    }
}

</style>