<template>
  <div class="ms-2 mt-2">
    <router-link to="/"><button class="btn btn-secondary">Вернуться назад</button></router-link>
  </div>
  <div id="app" class="container">
    <TaskForm />
    <h3 class="text-center">СПИСОК ЗАДАЧ</h3>
    <div v-for="(todo, index) in allTodos" :key="todo.id">
      <TodoItem :todo="todo" :index="index" />
    </div>
    <div v-show="allTodos.length === 0" class="text-center mt-5"><span>Еще нет ни одной задачи :(</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskForm from './TaskForm.vue';
import TodoItem from './TodoItem.vue';

export default {
  components: { TaskForm, TodoItem },
  computed: {
    ...mapGetters(['allTodos']),
  },
};
</script>

<style></style>
