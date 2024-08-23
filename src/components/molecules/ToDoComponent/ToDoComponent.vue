<script setup>
import { CFormCheck } from '@coreui/vue/dist/esm/components/form';
import { CCloseButton } from '@coreui/vue/dist/esm/components/close-button';

const props = defineProps({
  text: { type: String, required: false, default: '' }
});
</script>

<template>
  <div class="toDo">
    <div>
      <CFormCheck id="flexCheckChecked" />
      <span>{{ text }}</span>
    </div>

    <CCloseButton id="closeButton" />
  </div>
</template>

<style>
#flexCheckChecked {
  margin-right: 10px;
}
#closeButton {
  align-self: end;
}
.toDo {
  z-index: 2;
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
</style>
