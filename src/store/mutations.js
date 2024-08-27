export default {
  addTodo(state, title) {
    state.todos.push({ id: Date.now(), title, completed: false });
  },
  toggleComplete(state, id) {
    const todo = state.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  updateTaskOrder(state, orderedIds) {
    state.todos = orderedIds.map((id) => state.todos.find((task) => task.id === id));
  },
  setFilter(state, filter) {
    state.filter = filter;
  },
  clearCompletedTodos(state) {
    state.todos = state.todos.filter((todo) => !todo.completed);
  }
};
