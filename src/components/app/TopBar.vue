<template>
<div id="topbar" :class="[ uiStore.sidebarExpanded? 'ml-[230px]' : 'ml-20' ]" class="top-0 h-[60px] px-5 border-b flex items-center justify-between dark:bg-brand-dark-box dark:border-gray-700">
        <div class="flex items-center">
          <button @click="uiStore.toggleCollapse()"
                  :class="[
                      uiStore.sidebarExpanded ? 'bg-highlight-light shadow' : ''
                  ]"
                  class="hover:bg-highlight-light h-6 w-6 flex items-center justify-center rounded-full transition-all duration-300 group">
            <i
                :class="[
                    uiStore.sidebarExpanded ? 'fa-chevron-left text-highlight' : 'fa-align-left text-slate-400'
                ]"
                class="fa-solid group-hover:fa-chevron-left group-hover:text-highlight text-sm transition-all duration-300"></i>
          </button>
        </div>
        <div class="flex justify-evenly items-center space-x-8">
          <div class="mt-1 relative rounded-full w-[250px] bg-slate-200 dark:bg-gray-700">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <!-- Heroicon name: solid/mail -->
              <i class="fa-duotone fa-search dark:text-slate-300"></i>
            </div>
            <input type="text" class="bg-transparent dark:text-slate-500 focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-full py-2" placeholder="Search here ...">
          </div>
          <Toggler />
          <span>
            <i class="fa-solid fa-bell text-xl relative">
            <span class="absolute top-0 -right-1 bg-red-600 h-3 w-3 flex items-center justify-center rounded-full bg-green-300 animate-pulse"><i class="fa-solid fa-circle text-[8px] text-green-600"></i></span>
            </i>
          </span>
        </div>
        </div>
        <BreadCrumb :class="[ uiStore.sidebarExpanded? 'ml-[230px]' : 'ml-20' ]" class="pl-5" />
</template>

<script>
import {useUiStore} from "@/db/ui";
import BreadCrumb from "@/components/app/BreadCrumb.vue";
import Toggler from "@/components/app/Toggler.vue";

export default {
  name: "TopBar",
  components:{
    Toggler, BreadCrumb,
  },
  setup(){
    const uiStore = useUiStore()

    return {uiStore}
  }
}
</script>

<style scoped>

</style>