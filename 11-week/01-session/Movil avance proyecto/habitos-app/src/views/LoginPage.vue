<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-title>Login</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <ion-item><ion-label position="floating">Email</ion-label><ion-input v-model="email"/></ion-item>
      <ion-button @click="doLogin">Iniciar sesión</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '@/services/api';
const email = ref('');
const doLogin = async () => {
  const r = await login({ email: email.value }).catch(()=>null);
  if(r && r.user) alert('Login OK (demo)');
};
</script>
