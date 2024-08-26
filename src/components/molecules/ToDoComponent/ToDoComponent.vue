<script setup>
import { defineProps } from 'vue';
import { CFormCheck } from '@coreui/vue/dist/esm/components/form';
import { CCloseButton } from '@coreui/vue/dist/esm/components/close-button';
import { useStore } from 'vuex';

const props = defineProps({
  text: { type: String, required: true, default: '' },
  completed: { type: Boolean, required: true, default: false },
  id: { type: Number, required: true, default: null }
});

const store = useStore();
const toggleComplete = (id) => store.dispatch('toggleComplete', id);
const deleteTodo = (id) => store.dispatch('deleteTodo', id);
</script>

<template>
  <div class="toDo">
    <div>
      <CFormCheck id="flexCheckChecked" :checked="completed" @change="toggleComplete(id)" />
      <span :class="{ completedTask: completed }">{{ text }}</span>
    </div>

    <CCloseButton id="closeButton" class="delete-icon" @click="deleteTodo(id)" />
  </div>
</template>

<style scoped>
.toDo {
  position: relative;
  background-color: white;
  margin: 0 auto;
  width: 100%;
  height: 60px;
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-radius: 8px;
}

#flexCheckChecked {
  margin-right: 10px;
}

.completedTask {
  text-decoration: line-through;
}

.delete-icon {
  display: none;
}

.toDo:hover .delete-icon {
  display: block;
}
</style>
