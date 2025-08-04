<!-- src/pages/NotFound.vue -->
<template>
    <div class="not-found">
      <h1>PAGE NOT FOUND</h1>
      <p>THE PAGE YOU ARE LOOKING FOR DOESN’T EXIST OR HAS BEEN MOVED</p>
      <a href="/" class="btn">GO BACK HOME</a>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    min-height: 100vh;
    background: #000;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px;
    font-family: 'Montserrat', sans-serif;
  }
  .not-found h1 {
    font-size: 48px;
    margin-bottom: 16px;
    font-weight: bold;
  }
  .not-found p {
    font-size: 14px;
    opacity: 0.6;
    margin-bottom: 32px;
  }
  .btn {
    background: red;
    color: white;
    padding: 12px 24px;
    border-radius: 32px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s;
  }
  .btn:hover {
    background: #c00;
  }
  </style>
  