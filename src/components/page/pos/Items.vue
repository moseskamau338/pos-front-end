<template>
<div class="mt-5 grid gap-4 grid-cols-6 lg:grid-cols-12 px-4 pb-3">
      <button @click="posStore.toggleSelect($event, item)" v-for="item in posStore.products"
          :class="[
              posStore.isSelected(item.id) ? 'ring' : ''
          ]"
          class="col-span-3 w-fit bg-white dark:bg-brand-dark-box shadow rounded hover:ring text-left ring-highlight hover:ring-highlight/30">
        <div class="aspect-auto p-2">
          <img :src="item.image" alt="image" class="rounded shadow w-40 object-cover">
        </div>
        <div class="p-2">
          <h6 class="text-xs font-bold">{{ item.name }}</h6>
          <small class="text-gray-400 text-xs">{{ item.description}}</small>
        </div>
        <div class="flex justify-end px-2">
          <span class="text-highlight dark:text-sky-300">{{ posStore.currency }} {{currency(item.price)}}</span>
        </div>
      </button>
    </div>
</template>

<script>
import {usePosStore} from "@/db/pos.js";
import {inject} from "vue";

export default {
  name: "Items",
  setup(){
    const {currency} = inject('helpers')
    const posStore = usePosStore()



    return { posStore, currency }
  }
}
</script>

<style scoped>

</style>