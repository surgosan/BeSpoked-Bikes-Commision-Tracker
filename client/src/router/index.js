import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import editPeople from '../views/editPeople.vue';
import editProduct from '../views/editProduct.vue';
import customerView from '../views/customerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/editProduct',
    name: 'editProduct',
    component: editProduct
  },
  {
    path: '/editPeople',
    name: 'editPeople',
    component: editPeople
  },
  {
    path: '/customers',
    name: 'customers',
    component: customerView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
