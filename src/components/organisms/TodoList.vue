<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TaskComponent from '@/components/molecules/ToDoComponent/ToDoComponent.vue';
import InfoBoard from '@/components/molecules/InfoBoard.vue';

const store = useStore();
const todos = computed(() => store.getters.allTodos);
const incompleteTodos = computed(() => store.getters.incompleteTodos);

const updateTaskOrder = ({ id, targetId }) => {
  const tasks = [...todos.value];
  const draggedTaskIndex = tasks.findIndex((task) => task.id === id);
  const targetTaskIndex = tasks.findIndex((task) => task.id === targetId);

  if (draggedTaskIndex !== -1 && targetTaskIndex !== -1) {
    const [draggedTask] = tasks.splice(draggedTaskIndex, 1);
    tasks.splice(targetTaskIndex, 0, draggedTask);

    store.commit(
      'updateTaskOrder',
      tasks.map((task) => task.id)
    );
  }
};
</script>

<template>
  <div class="wrapper">
    <TaskComponent
      v-for="todo in todos"
      :id="todo.id"
      :key="todo.id"
      :text="todo.title"
      :completed="todo.completed"
      @update:order="updateTaskOrder"
    />
  </div>
  <InfoBoard :tasks-left="incompleteTodos.length" />
</template>

<style scoped>
.wrapper {
  background-color: white;
  margin-top: 20px;
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  max-height: 325px;
}
</style>
