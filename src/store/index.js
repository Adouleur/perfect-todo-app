import { createStore } from 'vuex';

const state = {
  todos: []
};

export default createStore({
  state: state,
  mutations: {
    addTodo(state, title) {
      state.todos.push({ id: Date.now(), title });
    }
  },
  actions: {
    addTodo({ commit }, title) {
      commit('addTodo', title);
    }
  },
  getters: {
    allTodos(state) {
      return state.todos;
    }
  },
  plugins: []
});
