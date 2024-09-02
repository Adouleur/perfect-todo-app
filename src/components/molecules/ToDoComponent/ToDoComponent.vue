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

const emit = defineEmits(['update:order']);

const onDragStart = (event) => {
  event.dataTransfer.setData('text/plain', props.id);
};

const onDrop = (event) => {
  const id = event.dataTransfer.getData('text/plain');
  emit('update:order', { id: Number(id), targetId: props.id });
};
</script>

<template>
  <div
    class="toDo"
    data-cy="task-item"
    :draggable="true"
    @dragstart="onDragStart"
    @dragover.prevent
    @drop="onDrop"
  >
    <div>
      <!-- Add data-cy to the checkbox -->
      <CFormCheck
        id="flexCheckChecked"
        :checked="completed"
        @change="toggleComplete(id)"
        data-cy="complete-checkbox"
      />
      <span :class="{ completedTask: completed }" data-cy="task-text">{{ text }}</span>
    </div>

    <CCloseButton
      id="closeButton"
      class="delete-icon"
      @click="deleteTodo(id)"
      data-cy="delete-button"
    />
  </div>
</template>

<style scoped>
.toDo {
  position: relative;
  background-color: white;
  border-bottom: 1px solid gray;

  height: 60px;
  padding: 16px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  cursor: grab;
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
