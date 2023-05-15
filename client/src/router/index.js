import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import editPeople from '../views/editPeople.vue';
import editProduct from '../views/editProduct.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/editProduct',
    name: 'editProduct',
    component: editPeople
  },
  {
    path: '/editPeople',
    name: 'editPeople',
    component: editProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
