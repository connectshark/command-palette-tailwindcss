<template>
  <div class=" grid place-items-center min-h-screen">
    <div class=" text-center">
      <h1 class=" text-4xl">{{ storePicker.name }}</h1>
      <p class=" text-2xl text-gray-500">{{ storePicker.en }}</p>
      <p><ShowBtn/></p>
      <p>or</p>
      <p><router-link class=" text-sky-400 underline" to="/">回首頁</router-link></p>
    </div>
  </div>
</template>

<script setup>
import ShowBtn from '../components/showBtn.vue'
import { computed } from 'vue'
import { useCityStore } from '../stores/twcity'

const props = defineProps({
  cityName: {
    type: String
  }
})

const store = useCityStore()

const storePicker = computed(() => {
  return store.city.find(city => city.id === props.cityName)
})

</script>