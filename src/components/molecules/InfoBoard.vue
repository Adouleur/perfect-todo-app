<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  tasksLeft: { type: Number, required: true },
  setFilter: { type: Function, required: true },
  currentFilter: { type: String, required: true }
});
</script>

<template>
  <div class="info-board">
    <div class="filters">
      <button :class="{ active: currentFilter === 'all' }" @click="setFilter('all')">All</button>
      <button :class="{ active: currentFilter === 'active' }" @click="setFilter('active')">
        Active
      </button>
      <button :class="{ active: currentFilter === 'completed' }" @click="setFilter('completed')">
        Completed
      </button>
    </div>
    <div class="tasks-left">{{ tasksLeft }} {{ tasksLeft === 1 ? 'task' : 'tasks' }} left</div>
  </div>
</template>

<style scoped>
.info-board {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
  border-radius: 0 0 8px 8px;
}

.filters {
  display: flex;
  gap: 10px;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.active {
  background: #007bff;
  color: white;
}

.tasks-left {
  font-size: 14px;
  color: #555;
}
</style>
