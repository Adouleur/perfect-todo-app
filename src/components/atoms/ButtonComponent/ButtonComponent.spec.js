import { mount } from '@vue/test-utils';
import ButtonComponent from '@/components/atoms/ButtonComponent/ButtonComponent.vue';

describe('ButtonComponent', () => {
  it('renders a button with default props', () => {
    const wrapper = mount(ButtonComponent);

    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('applies the provided class', () => {
    const testClass = 'test-class';
    const wrapper = mount(ButtonComponent, {
      props: {
        class: testClass
      }
    });

    expect(wrapper.find('button').classes()).toContain(testClass);
  });

  it('renders slot content correctly', () => {
    const slotContent = 'Click Me!';
    const wrapper = mount(ButtonComponent, {
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.text()).toBe(slotContent);
  });
});
