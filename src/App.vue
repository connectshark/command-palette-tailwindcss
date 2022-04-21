<template>
  <router-view/>

  <teleport to="#modal">
    <Transition name="fade" @after-leave="store.search = ''">
      <Command v-if="store.isShow"/>
    </Transition>
  </teleport>
</template>


<script setup>
import { onMounted, onUnmounted } from 'vue';
import Command from './components/command.vue'
import { useCityStore } from './stores/twcity'
const store = useCityStore()

const keyBoardHandler = event => {
  if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
    store.isShow = !store.isShow
  } else if (event.key === 'Escape') {
    store.isShow = false
  }
}

onMounted(() => { window.addEventListener('keyup', keyBoardHandler) })
onUnmounted(() => { window.removeEventListener('keyup', keyBoardHandler) })
</script>