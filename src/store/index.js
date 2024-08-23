import { createStore } from 'vuex';

const state = {
  todos: []
};

export default createStore({
  state: state,
  mutations: {
    addTodo(state, title) {
      state.todos.push({ id: Date.now(), title, completed: false });
    },
    toggleComplete(state, id) {
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  },
  actions: {
    addTodo({ commit }, title) {
      commit('addTodo', title);
    },
    toggleComplete({ commit }, id) {
      commit('toggleComplete', id);
    }
  },
  getters: {
    allTodos(state) {
      return state.todos;
    }
  },
  plugins: []
});
