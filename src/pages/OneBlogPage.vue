<template>
    <section class="one-blog-page" v-if="card">
      <h2>{{ card.title }}</h2>
  
      <div class="line-wrapper">
        <span class="dot white" />
        <span class="line" />
        <span class="dot red" :class="{ inactive: !active }" @click="toggle" />
        <span class="line" />
        <span class="dot white" />
      </div>
  
      <img class="img-big" :src="card.image" alt="main image" />
  
      <div class="inner-content">
        <div class="text">
          <h3>{{ card.header }}</h3>
          <p>{{ card.description }}</p>
        </div>
  
        <div class="img-mini">
          <img :src="card.sourceImage" alt="mini image" />
        </div>
  
        <div class="foot">
            <div class="source">
          <h3>Источник</h3>
          <div class="source-images">
            <img
              v-for="(img, index) in card.sources"
              :key="index"
              :src="img"
              alt="logo"
            />
          </div>
        </div>
  
        <div class="result">
          <h3>{{ card.result }}</h3>
          <p>{{ card.resultText }}</p>
        </div>
        </div>
       
      </div>
    </section>
  </template>
  


  <script setup>

  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  import { DataBlog } from '@/data/DataBlog'
  
  const route = useRoute()
  const id = computed(() => Number(route.params.id))
  const card = computed(() => DataBlog.find(item => item.id === id.value))

  
  </script>
  

<style scoped>
.one-blog-page {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 100px 5% 60px;
    max-width: 100%;
    font-family: 'Montserrat', sans-serif;
}

.one-blog-page h2 {
    font-size: 60px;
    font-weight: 800;
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 40px;
}

.img-big {

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    border: none;
    clip-path: inset(0 round 40px);
}

.line-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-wrap: nowrap;
    min-width: 100%;
    padding-bottom: 40px;
}

.line {
    width: 80%;
    height: 2px;
    background: #666;
}

.dot {
    width: 20px;
    height: 20px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition: background 0.3s ease, transform 0.3s ease;
}

.dot.white {
    background: #fff;
}

.dot.red {
    background: red;
    cursor: pointer;
    animation: blink 1.2s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.inner-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
}
.text {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    text-align: left;

}
.text h3 {
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.1;
    text-transform: uppercase;
    color: #fff;
}

.text p {
    font-size: 20px;
    line-height: 1.6;
    color: #e0e0e0;
    margin-bottom: 12px;
    font-weight: 400;
}

.foot {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
}

.foot .source {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.foot .result {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img-mini {
    height: auto;
    width: 70%;
    clip-path: inset(0 round 20px);

}
.img-mini img {
    height:100%;
    width: 100%;
}

.source {
    padding-bottom: 20px;
}
.source h3 {
    font-size: 36px;
    
}
.result h3 {
    font-size: 32px;
}
.result p {
    font-size: 28px;
    color: #e0e0e0;
}

.source-images {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px; /* расстояние между логотипами */
  margin-top: 5px;
}

.source-images img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: transparent; /* или #000 или #fff — подбери под фон */
  padding: 10px;
  object-fit: contain;
  border: 1px solid #ffffff;
  aspect-ratio: 1/1;/* если нужен контур */
  filter: grayscale(100%) brightness(0.8); /* серое изображение */
  transition: filter 0.3s ease, transform 0.3s ease;
}

.source-images img:hover {
  filter: none; /* убираем фильтр при ховере */
  transform: scale(1.1); /* лёгкое увеличение */
}


@media (max-width: 1024px) {
  .one-blog-page {
    padding: 80px 5% 40px;
  }

  .one-blog-page h2 {
    font-size: 42px;
  }

  .text {
    width: 90%;
  }

  .text h3 {
    font-size: 22px;
  }

  .text p {
    font-size: 18px;
  }

  .img-mini {
    width: 70%;
  }

  .foot {
    flex-direction: column;
    gap: 24px;
    width: 90%;
  }

  .foot .source,
  .foot .result {
    width: 100%;
  }

  .source h3,
  .result h3 {
    font-size: 24px;
  }

  .result p {
    font-size: 20px;
  }

  .source-images img {
    width: 20px;
    height: 20px;
    padding: 6px;
  }

  .inner-content {
        width: 100%;
    }
}

@media (max-width: 768px) {
  .one-blog-page {
    padding: 60px 4% 30px;
  }

  .one-blog-page h2 {
    font-size: 32px;
  }

  .text h3 {
    font-size: 20px;
  }

  .text p {
    font-size: 16px;
  }

  .inner-content {
        width: 100%;
    }

  .img-mini {
    width: 70%;
  }

  .source h3,
  .result h3 {
    font-size: 20px;
  }

  .result p {
    font-size: 18px;
  }

  .source-images img {
    width: 36px;
    height: 36px;
    padding: 5px;
  }
}

@media (max-width: 480px) {
  .one-blog-page h2 {
    font-size: 24px;
  }

  .text h3 {
    font-size: 18px;
  }

  .text p {
    font-size: 15px;
  }

  .source h3,
  .result h3 {
    font-size: 18px;
  }

  .result p {
    font-size: 16px;
  }

  .source-images img {
    width: 36px;
    height: 36px;
    padding: 4px;
  }

  .inner-content {
        width: 100%;
    }

  .img-mini {
    height: auto;
    width: 100%;
    clip-path: inset(0 round 20px);

}
.img-mini img {
    width: 70%;
}
}

</style>