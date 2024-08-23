<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const inputValue = ref('');
const inputError = ref(false);

const maxLength = 150;
const addTodo = (value) => store.dispatch('addTodo', value);

const handleTaskSubmit = () => {
  const trimmedValue = inputValue.value.trim();

  if (trimmedValue.length === 0 || trimmedValue.length > maxLength) {
    inputError.value = true;
  } else {
    addTodo(inputValue.value);
    inputValue.value = '';
    inputError.value = false;
  }
};

const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    handleTaskSubmit();
  }
};
</script>

<template>
  <input
    type="text"
    v-model="inputValue"
    placeholder="Enter a new task"
    :class="{ 'input-error': inputError }"
    @keydown="handleKeyPress"
  />
</template>

<style scoped>
input {
  width: 100%;
  padding: 16px 20px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  outline: none;
}

.input-error {
  outline: 2px solid red;
}
</style>
