import { mount } from '@vue/test-utils';
import ToDo from '@/components/molecules/ToDoComponent/ToDoComponent.vue'; // Adjust the import path as necessary

describe('ToDo Component', () => {
  it('renders the text prop correctly', () => {
    const text = 'Sample ToDo';
    const wrapper = mount(ToDo, {
      props: { text }
    });
    expect(wrapper.text()).toContain(text);
  });

  it('renders a CFormCheck checkbox', () => {
    const wrapper = mount(ToDo);
    const checkbox = wrapper.findComponent({ name: 'CFormCheck' });
    expect(checkbox.exists()).toBe(true);
  });

  it('renders a CCloseButton button', () => {
    const wrapper = mount(ToDo);
    const closeButton = wrapper.findComponent({ name: 'CCloseButton' });
    expect(closeButton.exists()).toBe(true);
  });

  it('contains a close button with correct id', () => {
    const wrapper = mount(ToDo);
    const closeButton = wrapper.find('#closeButton');
    expect(closeButton.exists()).toBe(true);
  });

  it('contains a checkbox with correct id', () => {
    const wrapper = mount(ToDo);
    const checkbox = wrapper.find('#flexCheckChecked');
    expect(checkbox.exists()).toBe(true);
  });
});
