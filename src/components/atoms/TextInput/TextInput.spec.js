import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MyComponent from '@/components/atoms/TextInput/TextInput.vue';

describe('MyComponent.vue', () => {
  it('should render the input field correctly', () => {
    const wrapper = mount(MyComponent);
    const input = wrapper.find('input');

    expect(input.exists()).toBe(true);
    expect(input.element.placeholder).toBe('Enter a new task');
  });

  it('should display error when submitting an empty task', async () => {
    const wrapper = mount(MyComponent);
    const input = wrapper.find('input');

    await wrapper.vm.handleTaskSubmit(); // Call the method directly

    expect(wrapper.vm.inputError).toBe(true);
    expect(input.classes()).toContain('input-error');
  });

  it('should display error when submitting a task that exceeds maxLength', async () => {
    const wrapper = mount(MyComponent);
    const input = wrapper.find('input');
    const longText = 'a'.repeat(151); // Exceeds 150 characters

    await input.setValue(longText);
    await wrapper.vm.handleTaskSubmit(); // Call the method directly

    expect(wrapper.vm.inputError).toBe(true);
    expect(input.classes()).toContain('input-error');
  });

  it('should clear the input and error when submitting a valid task', async () => {
    const wrapper = mount(MyComponent);
    const input = wrapper.find('input');

    await input.setValue('Valid task');
    await wrapper.vm.handleTaskSubmit(); // Call the method directly

    expect(wrapper.vm.inputValue).toBe('');
    expect(wrapper.vm.inputError).toBe(false);
    expect(input.classes()).not.toContain('input-error');
  });
});
