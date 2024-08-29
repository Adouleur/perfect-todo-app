<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  class: { type: String, default: '' }
});
</script>

<template>
  <button type="button" :class="props.class">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
