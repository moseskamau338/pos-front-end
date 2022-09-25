<template>
<div class="absolute bg-white dark:bg-brand-dark-box dark:border-gray-700 border min-h-screen flex">
      <div class="w-[80px] max-w-[80px] inset-0 flex border-r dark:border-r-0 flex-col flex-wrap overflow-x-hidden">
          <div class="h-[60px] flex justify-center items-center">
            -----
          </div>
          <div class="items-center text-center pt-5">
            <nav class="flex flex-col space-y-6">
              <button @click="activeItem = item.name" class="flex items-center justify-center" v-for="item in mainButtons">
                <span
                    :class="[(activeItem === item.name) ? 'bg-slate-100 dark:bg-slate-700 dark:text-slate-300' : '',
                    (activeByRoute === item.name)? 'bg-highlight-light text-highlight dark:text-sky-300 dark:bg-slate-500' : ''
                    ]"
                      class="hover:bg-highlight-light hover:dark:bg-slate-500 rounded-full h-10 w-10 flex items-center justify-center transition-all text-slate-400 hover:text-highlight hover:dark:text-sky-300">
                  <i :class="item.icon" class="fa-duotone text-lg"></i>
                </span>
              </button>

            </nav>
          </div>
          <div class="absolute flex items-center justify-center bottom-0 py-1 w-[80px]">
            <span class="hover:cursor-pointer bg-highlight-light rounded-full h-12 w-12 border-2 border-sky-400 flex items-center justify-center">
              <i class="fa-duotone fa-user text-sky-800 text-lg"></i>
            </span>
          </div>

        </div>
      <TransitionRoot as="div" :show="uiStore.sidebarExpanded" class="w-[150px] max-w-[150px] py-5 px-2"
        enter="translate-x-0 duration-500 ease-in-out"
        enter-from="-translate-x-100"
        enter-to="translate-x-0"
      >
        <div>
          <h3 class="text-sky-900 dark:text-slate-100 font-bold opacity-75">VendFood</h3>
          <h5 class="text-sky-900 dark:text-slate-100 text-xs italic">{{ activeItem }}</h5>
        </div>
        <div class="mt-5">
          <nav v-if="navList.length > 0" class="flex flex-col space-y-2">
            <router-link v-for="nav in navList"
                 :to="{name: nav.route}"
                 :class="[
                     route.name === nav.route? 'bg-slate-100 dark:bg-slate-500' : ''
                 ]"
                 class="hover:bg-slate-100 hover:dark:bg-slate-500 w-full rounded-sm px-2 py-1">
              <span
                  :class="[
                     route.name === nav.route? 'space-x-2 font-bold text-sky-700 dark:text-slate-100' : ''
                 ]"
                  class="flex items-center space-x-1.5 hover:space-x-2 text-sm">
                <i class="fa-solid fa-dash"></i>
                  <span class="transition-all">{{ nav.title }}</span>
              </span>
            </router-link>
          </nav>
          <Empty v-else title="" description="Navigation is empty" />
        </div>
      </TransitionRoot>
    </div>
</template>

<script>
import {computed, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {TransitionRoot, TransitionChild} from '@headlessui/vue'
import {useUiStore} from "@/db/ui";
import Empty from "@/components/app/Empty.vue";

export default {
name: "Sidebar",
  components: {
    Empty,
   TransitionRoot,
    TransitionChild
  },
  setup(){
    const uiStore = useUiStore()
    const route = useRoute()
    let navList = ref([])
    const mainButtons = [
        {name:'Dashboard', icon: 'fa-grid-2'},
        {name:'Inventory', icon: 'fa-inventory'},
        {name:'POS', icon: 'fa-cash-register'},
        {name:'Reporting', icon: 'fa-pie-chart'},
        {name:'Settings', icon: 'fa-user-gear'},
    ]
    const activeItem = ref(mainButtons[0].name)
    const activeByRoute = computed(() => {
      let active = ''
      /*Make sure all mainButton names are aligned with navigation*/
      mainButtons.forEach((menuItem) => {
        let currentName = route.fullPath.split('/')[1]
        if (currentName.toLowerCase().includes(menuItem.name.toLowerCase())){
          console.log('Setting value')
          active = menuItem.name
        }
      })
      if (!active){
         console.log('Setting first value')
          active = mainButtons[0].name
      }
      return active
    })


    watch(activeItem,(newVal, oldVal) => {
      if (!newVal) return []

      import(/* @vite-ignore */`/src/navigation/${newVal.toLowerCase()}`)
          .then((data) => {
            navList.value = data.default
          })
          .catch((error) => {
            navList.value = []
          })
    })

    return {uiStore, activeByRoute, route, activeItem, mainButtons, navList}
  }
}
</script>

<style scoped>

</style>