<script setup>
import TextInput from '@/components/atoms/TextInput/TextInput.vue';
import TodoList from '@/components/organisms/TodoList.vue';
</script>

<template>
  <div class="container">
    <TextInput></TextInput>
    <TodoList></TodoList>
  </div>
</template>

<style scoped>
.container {
  padding-top: 100px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
</style>
