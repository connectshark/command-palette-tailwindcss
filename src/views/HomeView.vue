<template>
  <main class="pb-10 text-center text-gray-800 w-11/12 mx-auto max-w-2xl">
    <h1 class=" py-10 text-2xl font-bold">Welcome this project!!</h1>
    <h2 class="font-bold text-xl">台灣縣市搜尋器</h2>
    <section class=" bg-gray-200 my-5 p-4 rounded">
      <h2 class=" text-lg mb-4">簡易說明</h2>
      <p class=" mb-2">
        <span class=" border p-1 border-black rounded">ctrl</span> + <span class=" border p-1 border-black rounded">k</span> 打開搜尋器或點擊按鈕打開</p>
      <p class=" mb-2">
        <ShowBtn/>
      </p>
      <p class=" mb-2">輸入想要搜尋的縣市名稱</p>
    </section>
    <ul class=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
      <li
        class=" bg-amber-600 text-white rounded"
        v-for="item in store.city"
        :key="item.id"
      >
        <p>{{item.name}}</p>
        <p>{{item.en}}</p>
      </li>
    </ul>
  </main>
</template>


<script setup>
import ShowBtn from '../components/showBtn.vue'
import { useCityStore } from '../stores/twcity'

const store = useCityStore()
</script>