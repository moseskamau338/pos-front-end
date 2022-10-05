<template>
<div v-if="posStore.filteredClients.length > 0" class="mt-5 grid gap-2 grid-cols-6 lg:grid-cols-12 px-4 pb-3">
  <div @click="posStore.toggleSelect($event, item)" v-for="item in posStore.filteredClients"
      :class="[posStore.isSelected(item.id) ? 'ring' : '']"
      class="col-span-3 bg-white dark:bg-brand-dark-box shadow rounded hover:ring text-left ring-highlight hover:ring-highlight/30 flex cursor-pointer">

    <div class="aspect-square p-1 flex items-center justify-center border border-slate-300 dark:border-slate-500 rounded-full m-1 shrink-0 grow-0 h-12 w-12">
       <img :src="item.image" alt="image" class="h-8 object-cover">
    </div>

    <div class="py-2 w-full">
      <h2 class="text-xs font-bold">{{ item.name }}</h2>
      <small class="text-gray-400 text-xs">{{ item.description}}</small>
    <div class="mt-2 text-right pr-2">
      <span class="text-highlight font-bold text-xs dark:text-sky-300">{{ posStore.currency }} {{currency(item.price)}}</span>
    </div>
    </div>


  </div>
</div>
  <Empty v-else title="No products found" description="Nothing found to display in this section" />
</template>

<script>
import {usePosStore} from "@/db/pos.js";
import {inject} from "vue";
import Empty from "@/components/app/Empty.vue";

export default {
  name: "Items",
  components: {Empty},
  setup(){
    const {currency} = inject('helpers')
    const posStore = usePosStore()



    return { posStore, currency }
  }
}
</script>

<style scoped>

</style>