<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ habit.tipo }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>{{ habit.descripcion }}</p>
      <p>Progreso: {{ habit.progreso }}%</p>
      <ion-button @click="$emit('complete', habit.id)" size="small">Marcar cumplido</ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup>
defineProps({ habit: Object });
</script>
