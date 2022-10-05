<template>
   <div class="flex items-center justify-between">
    <div class="mt-1 relative flex items-center">
      <input v-model="posStore.query" type="text" name="search" id="search" class="shadow-sm focus:ring-highlight focus:border-highlight block w-[450px] pr-12 sm:text-sm border-gray-300 rounded-md dark:bg-brand-dark-box dark:border-slate-500" placeholder="Search items...">
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <Dropdown>
          <button class="inline-flex items-center border border-gray-200 dark:border-slate-500 rounded px-2 py-1.5 text-sm font-sans font-medium text-gray-400 dark:text-slate-400"> <i class="fas fa-filter-list"></i> </button>
          <template #content>
            <div class="bg-white  shadow-2xl border border-slate-300 p-2 rounded w-[400px]">
              <fieldset>
                <legend class="text-lg font-medium text-slate-600">Categories</legend>
                <div class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-100">
                  <div class="relative flex items-start py-4" v-for="category in posStore.categories">
                    <div class="min-w-0 flex-1 text-sm">
                      <label @click="posStore.selectCategory($event, category)" for="person-1" class="font-medium text-gray-700 select-none">{{ category.name }}</label>
                    </div>
                    <div class="ml-3 flex items-center h-5">
                      <input @click="posStore.selectCategory($event, category)" type="checkbox" :value="category" class="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded">
                    </div>
                  </div>

                </div>
              </fieldset>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>

    <div class="flex space-x-2 items-end">
      <span v-for="i in 2" class="py-2 px-2 bg-sky-200/40 rounded-full text-xs font-bold border-sky-400 flex items-center space-x-2">
        <button class="bg-sky-300 hover:shadow hover:scale-105 flex items-center justify-center h-4 w-4 rounded-full shrink-0 grow-0 text-sky-600">&cross;</button>
        <span class="max-w-[90px] overflow-hidden truncate">Category ewgyw w  uev uehiube wejiwuejwe weiuboweb {{i}}</span>
      </span>
      <small>...+3 more</small>
    </div>
  </div>
</template>

<script>
import {usePosStore} from "@/db/pos.js";
import Dropdown from "@/components/elements/Dropdown.vue";

export default {
  name: "Filters",
  components: {Dropdown},
  setup(){
    const posStore = usePosStore()

    return {posStore}
  }
}
</script>

<style scoped>

</style>