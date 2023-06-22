<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="col-md-6 d-flex justify-content-between gap-2 mt-3 border-bottom pb-2">
      <h3 class="col-md-6" v-if="!editing">{{ index + 1 }}. {{ todo.title }}</h3>

      <div v-else class="col-md-8 list-group">
        <input v-model="todoText" type="text" class="form-control" />
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <button @click="updateTodoI(todo)" class="btn btn-primary mx-2">
          {{ editing ? 'Обновить' : 'Редакт.' }}
        </button>
        <button @click="deleteTodo(todo.id)" class="btn btn-danger">Удалить</button>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      todoText: this.todo.title,
      editing: false,
    };
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),

    updateTodoI(todo) {
      if (this.editing) {
        todo.title = this.todoText;

        this.updateTodo(todo);
      }
      this.editing = !this.editing;
    },
  },
};
</script>
