import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { IonicVue } from '@ionic/vue';
import App from './App.vue'
import routes from './router'

import '@ionic/vue/css/core.css';
import '@ionic/vue/css/ionic.bundle.css';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const app = createApp(App).use(IonicVue).use(router);
router.isReady().then(() => {
  app.mount('#app');
});
