<template>
  <section>
    <!--sidebar main-->
    <div class="absolute bg-white border min-h-screen flex">
      <div class="w-[80px] max-w-[80px] inset-0 flex border-r flex-col flex-wrap overflow-x-hidden">
          <div class="h-[60px] flex justify-center items-center">
            -----
          </div>

          <div class="items-center text-center pt-5">
            <nav class="flex flex-col space-y-6">
              <button @click="activeItem = item.name" class="flex items-center justify-center" v-for="item in [
                  {name:'Dashboard', icon: 'fa-grid-2'},
                  {name:'Inventory', icon: 'fa-inventory'},
                  {name:'POS', icon: 'fa-cash-register'},
                  {name:'Reporting', icon: 'fa-pie-chart'},
                  {name:'Settings', icon: 'fa-user-gear'},
              ]">
                <span :class="[
                    activeItem === item.name ? 'bg-sky-100 text-sky-600' : ''
                ]"
                      class="hover:bg-sky-100 rounded-full h-10 w-10 flex items-center justify-center transition-all text-slate-400 hover:text-sky-600">
                  <i :class="item.icon" class="fa-duotone text-lg"></i>
                </span>
              </button>

            </nav>
          </div>
          <div class="absolute flex items-center justify-center bottom-0 py-1 w-[80px]">
            <span class="hover:cursor-pointer bg-sky-100 rounded-full h-12 w-12 border-2 border-sky-400 flex items-center justify-center">
              <i class="fa-duotone fa-user text-sky-800 text-lg"></i>
            </span>
          </div>

        </div>

      <TransitionRoot as="div" :show="sidebarExpanded" class="w-[150px] max-w-[150px] py-5 px-2"
        enter="translate-x-0 duration-500 ease-in-out"
        enter-from="-translate-x-100"
        enter-to="translate-x-0"
      >
        <div>
          <h3 class="text-sky-900 font-bold opacity-75">VendFood</h3>
          <h5 class="text-sky-900 text-xs">Dashboard</h5>
        </div>
        <div class="mt-5">
          <nav class="flex flex-col space-y-2">
            <router-link v-for="i in 5" to="#" class="hover:bg-slate-100 w-full rounded-sm px-2 py-1">
              <span class="flex items-center space-x-1.5 hover:space-x-2 text-sm">
                <i class="fa-solid fa-dash"></i>
                <span class="transition-all">Inventory</span>
              </span>
            </router-link>
          </nav>
        </div>
      </TransitionRoot>
    </div>

    <!--topbar-->
      <div id="topbar" :class="[
          sidebarExpanded? 'ml-[230px]' : 'ml-20'
      ]" class="top-0 h-[60px] px-5 border-b flex items-center justify-between">
        <div>
          <button @click="sidebarExpanded = !sidebarExpanded"
                  :class="[
                      sidebarExpanded ? 'bg-sky-100 shadow' : ''
                  ]"
                  class="hover:bg-sky-100 h-6 w-6 flex items-center justify-center rounded-full transition-all duration-300 group">
            <i
                :class="[
                    sidebarExpanded ? 'fa-chevron-left text-sky-600' : 'fa-align-left text-slate-400'
                ]"
                class="fa-solid group-hover:fa-chevron-left group-hover:text-sky-600 text-sm transition-all duration-300"></i>
          </button>
        </div>
        <div class="flex justify-evenly items-center space-x-8">
          <div class="mt-1 relative rounded-full w-[250px] bg-slate-200">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <!-- Heroicon name: solid/mail -->
              <i class="fa-duotone fa-search"></i>
            </div>
            <input type="text" class="bg-transparent focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-full py-2" placeholder="Search here ...">
          </div>
          <span>
            <i class="fa-solid fa-sun-bright text-xl text-amber-400"></i>
          </span>
          <span>
            <i class="fa-solid fa-bell text-xl relative">
            <span class="absolute top-0 -right-1 bg-red-600 h-3 w-3 flex items-center justify-center rounded-full bg-green-300 animate-pulse"><i class="fa-solid fa-circle text-[8px] text-green-600"></i></span>
            </i>
          </span>
        </div>
        </div>

    <main
        :class="[
          sidebarExpanded? 'ml-[230px]' : 'ml-20'
      ]"
        class="px-5 py-10">
      <slot></slot>
    </main>
  </section>


</template>

<script>
import {TransitionRoot, TransitionChild} from '@headlessui/vue'
import {ref} from "vue";
import Sidebar from "@/components/app/Sidebar.vue";
export default {
  components: { Sidebar, TransitionRoot, TransitionChild },
  setup(){
    const sidebarExpanded = ref(false)
    const activeItem = ref('')

    return {sidebarExpanded, activeItem}
  }
}
</script>