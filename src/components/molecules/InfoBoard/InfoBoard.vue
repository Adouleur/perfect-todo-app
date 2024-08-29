<script setup>
import { defineProps } from 'vue';
import { useStore } from 'vuex';
import ButtonComponent from '@/components/atoms/ButtonComponent/ButtonComponent.vue';
import { filters } from '@/constants/constants';
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';

const props = defineProps({
  tasksLeft: { type: Number, required: true },
  setFilter: { type: Function, required: true },
  currentFilter: { type: String, required: true }
});

const store = useStore();
const clearCompleted = () => store.dispatch('clearCompletedTodos');
</script>

<template>
  <div class="info-board">
    <div class="filters">
      <ButtonComponent
        v-for="filter in filters"
        :key="filter"
        :class="{ active: currentFilter === filter }"
        @click="setFilter(filter)"
        :data-cy="`filter-${filter}`"
      >
        {{ capitalizeFirstLetter(filter) }}
      </ButtonComponent>

      <ButtonComponent @click="clearCompleted" data-cy="clear-completed"
        >Clear Completed</ButtonComponent
      >
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

button.active {
  background: #007bff;
  color: white;
}

.tasks-left {
  font-size: 14px;
  color: #555;
}
</style>
