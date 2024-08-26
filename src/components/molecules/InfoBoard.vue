<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  tasksLeft: { type: Number, required: true, default: 0 }
});
</script>

<template>
  <div class="boardWrapper">
    <span
      >{{
        tasksLeft === 0
          ? 'Well done!'
          : tasksLeft === 1
            ? tasksLeft + ' task left'
            : tasksLeft > 1
              ? tasksLeft + ' tasks left'
              : null
      }}
    </span>
  </div>
</template>

<style scoped>
.boardWrapper {
  display: flex;
  justify-content: flex-end;
  background-color: white;
  border-radius: 0 0 8px 8px;
  padding: 10px 16px;
}
</style>
