<template>
<section class="blog-grid-section">
  <div class="blog-grid">
    <div v-for="item in visibleItems" :key="item.id" class="blog-card" @click="goToBlog(item.id)">
      <h3>{{ item.title }}</h3>
      <div class="blog-card-footer">
        <span>BLOG</span>
        <span class="arrow">→</span>
      </div>
    </div>
  </div>
</section>

    
</template>

<script setup>

import { ref, computed } from 'vue' // ← обязательно
import { useRouter } from 'vue-router'
const props = defineProps({
  includeIds: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()

const blogCards = ref([
  { id: 1, title: 'СТОМАТОЛОГИЯ DENTAL IMPLANT ' },
  { id: 2, title: 'КАППЫ «EUROKAPPA» ' },
  // { id: 3, title: 'VIP-ЗАЛЫ ШЕРЕМЕТЬЕВО' },
  { id: 4, title: 'КРОВАТКИ ДЛЯ ДЕТЕЙ MOMSJOYS ' },
  { id: 5, title: 'ОТБЕЛИВАНИЕ ЗУБОВ YOURSMILE ' },
  { id: 6, title: 'РЕСТОРАН НА РУБЛЕВКЕ JESSTAURANT ' }
])

const visibleItems = computed(() => {
  if (!props.includeIds.length) return blogCards.value
  return blogCards.value.filter(card => props.includeIds.includes(card.id))
})

function goToBlog(id) {
  router.push(`/card/${id}`)
}
</script>


<style>
.blog-grid-section {
  background: #000;
  color: #fff;
  padding: 40px 5%;
  font-family: 'Montserrat', sans-serif;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 100%;
  margin: 0 auto;
}

.blog-card {
  background: #1C1C1C;
  padding: 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 480px;
  min-width: 470px;
  transition: background 0.3s ease;
  position: relative;
  overflow: hidden;
}

.blog-card > * {
  position: relative;
  z-index: 1;
}

.blog-card::after {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  bottom: 0;
  right: 0;
  background: #080808;
  border-radius: 50%;
  transform: translate(50%, 50%) scale(1); /* начальный размер чуть меньше */
  opacity: 0.5;
  transition:
    transform 0.6s ease,
    opacity 0.6s ease;
  z-index: 0;
  pointer-events: none;
}

.blog-card:hover::after {
  transform: translate(50%, 50%) scale(0.8);
  opacity: 0.9;
}

.blog-card h3 {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.blog-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #ffffff;
}

.arrow {
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  transition: transform 0.3s ease, background 0.3s ease;
  cursor: pointer;
}



@media (max-width: 1440px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .blog-card {
    min-width: auto;
    min-height: 440px;
    padding: 28px;
  }

  .blog-card::after {
    width: 500px;
    height: 500px;
  }

  .blog-card h3 {
    font-size: 36px;
  }

  .arrow {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
}


@media (max-width: 1024px) {
  .blog-grid-section {
  padding: 32px 5%;
}
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .blog-card {
    min-height: 380px;
    min-width: 300px;
    padding: 24px;
  }

  .blog-card::after {
    width: 400px;
    height: 400px;
  }

  .blog-card h3 {
    font-size: 30px;
  }

  .arrow {
    width: 32px;
    height: 32px;
    font-size: 15px;
  }
}


@media (max-width: 768px) {
  .blog-grid-section {
  padding: 25px 2%;
}

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .blog-card {
    min-height: 380px;
    padding: 20px;
  }

  .blog-card::after {
    width: 320px;
    height: 320px;
  }

  .blog-card h3 {
    font-size: 28px;
  }

  .arrow {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
}


@media (max-width: 480px) {
  .blog-grid-section {

  padding: 20px 2%;

}
  .blog-card {
    min-height: 300px;
    padding: 16px;
    border-radius: 16px;
  }

  .blog-card::after {
    width: 280px;
    height: 280px;
  }

  .blog-card h3 {
    font-size: 24px;
  }

  .arrow {
    width: 28px;
    height: 28px;
    font-size: 13px;
  }
}

</style>