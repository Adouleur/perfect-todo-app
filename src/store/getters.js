export default {
  allTodos(state) {
    return state.todos;
  },
  incompleteTodos: (state) => {
    return state.todos.filter((todo) => !todo.completed);
  }
};
