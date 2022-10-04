<template>
<section class="grid grid-cols-12 gap-7 mx-5 h-[100vh]">
  <div class="col-span-8">
    <div class="flex items-center justify-between">
      <div class="mt-1 relative flex items-center">
        <input v-model="posStore.query" type="text" name="search" id="search" class="shadow-sm focus:ring-highlight focus:border-highlight block w-[500px] pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Search items...">
        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <button class="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400"> <i class="fas fa-filter-list"></i> </button>
        </div>
      </div>

      <div class="flex space-x-2 items-end">
        <span v-for="i in 2" class="py-2 px-2 bg-sky-200/40 rounded-full text-sm font-bold border-sky-400 flex items-center space-x-2">
          <button class="bg-sky-300 hover:shadow hover:scale-105 flex items-center justify-center h-4 w-4 rounded-full">&cross;</button>
          <span>Category {{i}}</span>
        </span>
        <span>...+3 more</span>
      </div>
    </div>
    <section class="min-h-[60vh] max-h-[80vh] overflow-y-auto mt-5">
      <!--items-->
      <Items />
    </section>
     <!--<Categories />-->
  </div>
  <div class="col-span-4">
    <header class="flex items-center justify-between">
      <SearchSelect />
      <div class="flex items-center space-x-5">
        <button class="hover:bg-slate-200 transition-all duration-200 flex justify-center items-center h-5 w-5 rounded-full group">
          <i class="fas fa-plus text-xs transition-all duration-200 group-hover:text-highlight"></i>
        </button>
        <button class="hover:bg-red-100 transition-all duration-200 flex justify-center items-center h-5 w-5 rounded-full group">
          <i class="fas fa-trash text-xs transition-all duration-200 group-hover:text-red-500"></i>
        </button>

      <!--  button-->
         <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="transition-all flex items-center justify-center h-5 w-5 rounded-full dark:bg-slate-600 bg-slate-200 hover:bg-slate-300 hover:text-highlight hover:dark:text-sky-300 focus:ring">
                <i class="fas fa-square-list text-xs"></i>
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-brand-dark dark:border dark:border-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                        @click="showOrders = true"
                      :class="[
                        active ? 'bg-highlight-light/50  dark:bg-highlight' : '',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      Order Processing List
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-highlight-light/50 dark:bg-highlight' : '',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      Duplicate
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
      </div>
    </header>

    <Cart />
  </div>
</section>
<!-- modals-->
<Orders :show="showOrders" @close="showOrders = false" />


</template>

<script>
import CButton from "@/components/elements/CButton.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

import Categories from "@/components/page/pos/Categories.vue";
import Items from "@/components/page/pos/Items.vue";
import Cart from "@/components/page/pos/Cart.vue";
import {ref} from "vue";
import Orders from "@/components/page/pos/Orders.vue";
import SearchSelect from "@/components/elements/SearchSelect.vue";
import {usePosStore} from "@/db/pos.js";
export default {
  name: "Pos",
  components: {
    SearchSelect,
    Orders,
    Cart,
    Items,
    Categories,
    Menu, MenuButton, MenuItems,
    MenuItem, CButton
  },
  setup() {
    const posStore = usePosStore()
    const showOrders = ref(false)

    return {showOrders, posStore}
  }
}
</script>

<style scoped>

</style>