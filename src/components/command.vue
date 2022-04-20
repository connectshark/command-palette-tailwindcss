<template>
  <div class=" fixed inset-0 bg-gray-500/75 pt-36">
    <div class=" w-5/6 mx-auto bg-white max-w-sm rounded-lg  shadow-md divide-y divide-gray-300 overflow-hidden">
      <div class="flex items-center space-x-3 shadow-black/30 px-2">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <input v-model="store.search" class="w-full bg-transparent outline-none h-12" placeholder="search..." type="search">
      </div>
      <ul class=" max-h-64 overflow-y-auto">
        <li v-if="store.search && store.filterAllCity.length === 0" class=" px-2 py-4 text-gray-400">..沒有城市</li>
        <li
          v-else
          v-for="(item, index) in store.filterAllCity"
          :key="item.id"
          @click="goToPage(item)"
          class=" block space-x-1 px-2 py-4"
          :class="{ 'bg-indigo-700' : activeNumber === index }"
          @mouseover="activeNumber = index"
        >
          <span :class="{ 'text-white' : activeNumber === index }">{{item.name}}</span>
          <span
          :class="{
            'text-indigo-300' : activeNumber === index
          }"
          class=" text-gray-400 text-sm">{{item.en}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCityStore } from '../stores/twcity'


export default {
  setup () {
    const isOpen = ref(true)
    const activeNumber = ref(0)
    const store = useCityStore()

    const router = useRouter()
    const goToPage = city => {
      router.push('/city/' + city.id)
      store.isShow = false
    }

    return {
      isOpen,
      store,
      activeNumber,
      goToPage
    }
  }
}
</script>