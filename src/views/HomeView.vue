<template>
  <main class=" grid place-items-center h-screen">
    <div>
      <button @click="store.isShow = true" class=" bg-white p-4 rounded-2xl shadow-xl">show</button>
    </div>
  </main>
</template>


<script setup>
import { useCityStore } from '../stores/twcity'

const store = useCityStore()
</script>