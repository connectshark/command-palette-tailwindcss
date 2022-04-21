<template>
  <button @click="store.isShow = true" class=" bg-sky-600 text-white p-2 rounded-lg hover:opacity-75 transition-opacity">打開搜尋器</button>
</template>

<script setup>
import { useCityStore } from '../stores/twcity'

const store = useCityStore()
</script>