<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-title>Registro</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <ion-item><ion-label position="floating">Nombre</ion-label><ion-input v-model="name"/></ion-item>
      <ion-item><ion-label position="floating">Email</ion-label><ion-input v-model="email"/></ion-item>
      <ion-button @click="doRegister">Registrarse</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { register } from '@/services/api';
const name = ref('');
const email = ref('');
const doRegister = async () => {
  const r = await register({ name: name.value, email: email.value }).catch(()=>null);
  if(r && r.user) alert('Registrado (demo)');
};
</script>
