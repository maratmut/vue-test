<template>
  <div>
    <div class="d-flex justify-content-center gap-2 mb-5 mt-5">
      <div class="col-md-5">
        <input
          @change="todoTextChange"
          :value="todoText"
          @keyup.enter="addTodoI"
          class="form-control"
          type="text"
          placeholder="Добавить задачу"
        />
        <span v-if="!isValid" class="text-danger">Пожалуйста, введите название задачи</span>
      </div>
      <div>
        <button @click="addTodoI" class="btn btn-primary">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid';

export default {
  data() {
    return {
      todoText: '',
    };
  },
  computed: {
    isValid() {
      return this.todoText.trim().length > 0;
    },
  },
  methods: {
    ...mapActions(['addTodo']),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },

    addTodoI() {
      if (this.isValid) {
        this.addTodo({
          id: v1(),
          title: this.todoText,
        });
        this.todoText = '';
      }
    },
  },
};
</script>
