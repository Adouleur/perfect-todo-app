import { describe, it, expect, vi, beforeEach } from 'vitest';
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
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ToDo, {
      global: {
        plugins: [store]
      },
      props: { text: 'Sample', completed: false, id: 1 }
    });
  });

  it('renders the text prop correctly', () => {
    expect(wrapper.text()).toContain('Sample');
  });

  it('renders a CFormCheck checkbox', () => {
    const checkbox = wrapper.findComponent({ name: 'CFormCheck' });
    expect(checkbox.exists()).toBe(true);
  });

  it('renders a CCloseButton button', () => {
    const closeButton = wrapper.findComponent({ name: 'CCloseButton' });
    expect(closeButton.exists()).toBe(true);
  });

  it('contains a checkbox with correct id', () => {
    const checkbox = wrapper.find('#flexCheckChecked');
    expect(checkbox.exists()).toBe(true);
  });

  it('applies completedTask class when completed prop is true', async () => {
    await wrapper.setProps({ completed: true });
    const span = wrapper.find('span');
    expect(span.classes()).toContain('completedTask');
  });

  it('does not apply completedTask class when completed prop is false', async () => {
    await wrapper.setProps({ completed: false });
    const span = wrapper.find('span');
    expect(span.classes()).not.toContain('completedTask');
  });

  it('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
