import { createStore } from 'vuex';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';

const state = { todos: [] };

export default createStore({
  state,
  mutations,
  actions,
  getters
});
