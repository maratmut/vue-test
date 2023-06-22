import { createRouter, createWebHistory } from 'vue-router';
import TaskList from './components/TaskList.vue';
import HomeView from './views/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/create-task', component: TaskList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
