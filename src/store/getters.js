export default {
  allTodos(state) {
    return state.todos;
  },
  incompleteTodos: (state) => {
    return state.todos.filter((todo) => !todo.completed);
  },
  filteredTodos(state) {
    switch (state.filter) {
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      case 'active':
        return state.todos.filter((todo) => !todo.completed);
      case 'all':
      default:
        return state.todos;
    }
  }
};
