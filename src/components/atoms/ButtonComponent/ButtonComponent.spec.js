import { mount } from '@vue/test-utils';
import ButtonComponent from '@/components/atoms/ButtonComponent/ButtonComponent.vue';

describe('ButtonComponent', () => {
  let wrapper;
  const testClass = 'test-class';
  const slotContent = 'Click Me!';

  beforeEach(() => {
    wrapper = mount(ButtonComponent, {
      props: {
        class: testClass
      },
      slots: {
        default: slotContent
      }
    });
  });

  it('renders a button with default props', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('applies the provided class', () => {
    expect(wrapper.find('button').classes()).toContain(testClass);
  });

  it('renders slot content correctly', () => {
    expect(wrapper.text()).toBe(slotContent);
  });
  it('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
