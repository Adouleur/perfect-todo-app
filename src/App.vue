<script setup>
import TodoPage from '@/components/pages/TodoPage.vue';
</script>

<template>
  <TodoPage />
</template>

<style>
body {
  font-family: 'Open Sans', 'cursive', serif;
  background-color: #4158d0;
  background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
  margin: 0;
  height: 100vh;
}
#app {
  color: #2c3e50;
  background-image: url('/src/assets/main-background.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 300px;
}
</style>
