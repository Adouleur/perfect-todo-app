<script setup>
import { useStore } from 'vuex';
import TaskComponent from '@/components/molecules/ToDoComponent/ToDoComponent.vue';
import { computed } from 'vue';

const store = useStore();
const todos = computed(() => store.getters.allTodos);
</script>

<template>
  <div class="wrapper">
    <TaskComponent
      v-for="todo in todos"
      :key="todo.id"
      :text="todo.title"
      :completed="todo.completed"
      :id="todo.id"
    />
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  max-height: 500px;
}
</style>
