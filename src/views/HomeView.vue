<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <div>
      <h1>Тестовое задание</h1>
    </div>

    <div>
      <button class="btn btn-warning" @click="goToTaskList">ЖМИ СЮДА</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const goToTaskList = () => {
      router.push({ path: 'create-task' });
    };

    return { goToTaskList };
  },
};
</script>
