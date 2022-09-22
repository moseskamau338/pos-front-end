<template>
  <section class="max-h-screen">
    <!--sidebar main-->
    <sidebar />

    <!--topbar-->
      <TopBar />
    <main
        :class="[ uiStore.sidebarExpanded? 'ml-[230px]' : 'ml-[80px]' ]"
        class="px-5 py-5 max-h-screen overflow-y-auto dark:bg-brand-dark dark:border-gray-600 h-screen">
      <slot></slot>
    </main>
  </section>
</template>

<script>
import {ref} from "vue";
import Sidebar from "@/components/app/Sidebar.vue";
import {useUiStore} from "@/db/ui";
import TopBar from "@/components/app/TopBar.vue";


export default {
  components: {
    TopBar,
    Sidebar
  },
  setup(){
    const uiStore = useUiStore()

    const subNavigationList = ref({
      inventory: [

      ]
    })

    return {uiStore}
  }
}
</script>