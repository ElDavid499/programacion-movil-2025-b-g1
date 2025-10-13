<template>
  <ion-page>
    <ion-header><ion-toolbar><ion-title>Hábitos</ion-title></ion-toolbar></ion-header>
    <ion-content class="ion-padding">
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="add">+</ion-fab-button>
      </ion-fab>
      <div v-if="!user">Cargando usuario demo...</div>
      <div v-else>
        <habit-card v-for="h in habits" :key="h.id" :habit="h" @complete="complete"/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HabitCard from '@/components/HabitCard.vue';
import { register, login, getHabits, createHabit, markRecord } from '@/services/api';

const user = ref(null);
const habits = ref([]);

onMounted(async () => {
  // demo auto-register/login
  const r = await register({ name:'Demo', email:'demo@demo.com' }).catch(()=>null);
  if(r && r.user) user.value = r.user;
  else {
    const l = await login({ email:'demo@demo.com' }).catch(()=>null);
    if(l && l.user) user.value = l.user;
  }
  if(user.value) {
    habits.value = await getHabits(user.value.id);
  }
});

const add = async () => {
  const tipo = prompt('Nombre del hábito');
  if(!tipo) return;
  const h = await createHabit({ userId: user.value.id, tipo, descripcion:'', frecuencia:'Diaria' });
  habits.value.push(h);
};

const complete = async (habitId) => {
  await markRecord({ userId: user.value.id, habitId, cumplido: true });
  habits.value = await getHabits(user.value.id);
};
</script>
