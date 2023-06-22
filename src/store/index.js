import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
    deleteTodo({ commit }, id) {
      commit('delete_todo', id);
    },
    updateTodo({ commit }, todo) {
      commit('update_todo', todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        state.todos[index] = todo;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
  },
});
