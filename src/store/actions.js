export default {
  addTodo({ commit }, title) {
    commit('addTodo', title);
  },
  toggleComplete({ commit }, id) {
    commit('toggleComplete', id);
  },
  deleteTodo({ commit }, id) {
    commit('deleteTodo', id);
  },
  updateTaskOrder({ commit }, id) {
    commit('updateTaskOrder', id);
  },
  clearCompletedTodos({ commit }) {
    commit('clearCompletedTodos');
  }
};
