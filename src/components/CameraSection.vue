<template>
    <section class="guides-header">
        <h1>PJ PRODUCTION</h1>

        <div class="line-wrapper">
            <span class="dot white" />
            <span class="line" />
            <span class="dot red" :class="{ inactive: !active }" @click="toggle" />
            <span class="line" />
            <span class="dot white" />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(true)
function toggle() {
    active.value = !active.value
}
</script>

<style scoped>
.guides-header {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 100px 5% 60px;
    font-family: 'Montserrat', sans-serif;
}

.guides-header h1 {
    font-size: 90px;
    font-weight: 800;
    line-height: 1.1;
    text-transform: uppercase;
    margin-bottom: 40px;
}



.line-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-wrap: nowrap;
    min-width: 100%;
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

@media (max-width: 1440px) {
    .guides-header h1 {
        font-size: 70px;
    }
}

@media (max-width: 1024px) {
    .guides-header h1 {
        font-size: 54px;
    }
}

@media (max-width: 768px) {
    .guides-header h1 {
        font-size: 36px;
    }
}

@media (max-width: 480px) {
    .guides-header h1 {
        font-size: 22px;
    }
    .guides-header {
    background: #000;
    color: #fff;
    text-align: center;
    padding: 16px 5% 20px;
    font-family: 'Montserrat', sans-serif;
}

.line-wrapper{
    gap: 9px;
}
.guides-header h1{
    margin-bottom: 32px;
}
.dot {
    width: 10px;
    height: 10px;
}
}
</style>