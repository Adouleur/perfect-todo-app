import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ToDo from '@/components/molecules/ToDoComponent/ToDoComponent.vue';
import { createStore } from 'vuex';

// Mock Vuex store
const mockDispatch = vi.fn();
const store = createStore({
  state: {},
  actions: {
    toggleComplete: mockDispatch
  }
});

describe('ToDo Component', () => {
  it('renders the text prop correctly', () => {
    const text = 'Sample ToDo';
    const wrapper = mount(ToDo, {
      global: {
        plugins: [store]
      },
      props: { text, completed: false, id: 1 }
    });
    expect(wrapper.text()).toContain(text);
  });

  it('renders a CFormCheck checkbox', () => {
    const wrapper = mount(ToDo, {
      global: {
        plugins: [store]
      },
      props: { text: 'Sample', completed: false, id: 1 }
    });
    const checkbox = wrapper.findComponent({ name: 'CFormCheck' });
    expect(checkbox.exists()).toBe(true);
  });

  it('renders a CCloseButton button', () => {
    const wrapper = mount(ToDo, {
      global: {
        plugins: [store]
      },
      props: { text: 'Sample', completed: false, id: 1 }
    });
    const closeButton = wrapper.findComponent({ name: 'CCloseButton' });
    expect(closeButton.exists()).toBe(true);
  });

  it('contains a checkbox with correct id', () => {
    const wrapper = mount(ToDo, {
      global: {
        plugins: [store]
      },
      props: { text: 'Sample', completed: false, id: 1 }
    });
    const checkbox = wrapper.find('#flexCheckChecked');
    expect(checkbox.exists()).toBe(true);
  });

  it('applies completedTask class when completed prop is true', () => {
    const wrapper = mount(ToDo, {
      global: {
        plugins: [store]
      },
      props: { text: 'Sample', completed: true, id: 1 }
    });
    const span = wrapper.find('span');
    expect(span.classes()).toContain('completedTask');
  });

  it('does not apply completedTask class when completed prop is false', () => {
    const wrapper = mount(ToDo, {
      global: {
        plugins: [store]
      },
      props: { text: 'Sample', completed: false, id: 1 }
    });
    const span = wrapper.find('span');
    expect(span.classes()).not.toContain('completedTask');
  });
});
