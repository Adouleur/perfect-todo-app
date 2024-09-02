import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import ButtonComponent from '@/components/atoms/ButtonComponent/ButtonComponent.vue';
import { filters } from '@/constants/constants';
import InfoBoard from '@/components/molecules/InfoBoard/InfoBoard.vue';

describe('InfoBoard.vue', () => {
  let actions;
  let mutations;
  let store;
  let wrapper;

  beforeEach(() => {
    actions = {
      clearCompletedTodos: vi.fn()
    };
    mutations = {
      setFilter: vi.fn()
    };
    store = createStore({
      state: {
        filter: filters[0]
      },
      actions,
      mutations,
      getters: {
        incompleteTodos: () => 3
      }
    });

    wrapper = mount(InfoBoard, {
      props: {
        tasksLeft: 3,
        setFilter: vi.fn(),
        currentFilter: filters[0]
      },
      global: {
        plugins: [store]
      }
    });
  });

  it('renders the correct number of tasks left', () => {
    expect(wrapper.find('.tasks-left').text()).toBe('3 tasks left');
  });

  it('calls the setFilter method when a filter button is clicked', async () => {
    const setFilter = wrapper.props().setFilter;

    const button = wrapper.findAllComponents(ButtonComponent).at(0); // First filter button
    await button.trigger('click');

    expect(setFilter).toHaveBeenCalledWith(filters[0]);
  });

  it('dispatches the clearCompletedTodos action when "Clear Completed" button is clicked', async () => {
    const clearCompletedButton = wrapper.find('[data-cy="clear-completed"]');
    await clearCompletedButton.trigger('click');

    expect(actions.clearCompletedTodos).toHaveBeenCalled();
  });

  it('renders the correct filter buttons and applies the active class', async () => {
    await wrapper.setProps({
      currentFilter: filters[1]
    });

    const buttons = wrapper.findAllComponents(ButtonComponent);
    filters.forEach((filter, index) => {
      expect(buttons.at(index).text()).toBe(filter.charAt(0).toUpperCase() + filter.slice(1));
      if (filter === filters[1]) {
        expect(buttons.at(index).classes()).toContain('active');
      }
    });
  });

  it('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
