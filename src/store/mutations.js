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
  }
};
