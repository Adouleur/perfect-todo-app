import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { describe, it, expect, vi } from 'vitest';
import MyComponent from '@/components/atoms/TextInput/TextInput.vue';

describe('MyComponent.vue', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      addTodo: vi.fn()
    };

    store = createStore({
      actions,
      state: {
        todos: []
      }
    });
  });

  it('should render the input field correctly', () => {
    const wrapper = mount(MyComponent, {
      global: {
        plugins: [store]
      }
    });
    const input = wrapper.find('input');

    expect(input.exists()).toBe(true);
    expect(input.element.placeholder).toBe('Enter a new task');
  });
});
