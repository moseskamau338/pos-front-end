<template>
  <section class="max-h-screen">
    <!--sidebar main-->
    <sidebar />

    <!--topbar-->
      <TopBar />
    <main
        :class="[ uiStore.isSidebarOpen() ? 'ml-[230px]' : 'ml-[80px]' ]"
        class="px-5 py-3 max-h-screen overflow-y-scroll dark:bg-brand-dark dark:border-gray-600 h-screen">
      <h1 class="mb-5 text-xl font-bold">{{route.meta.title}}</h1>
      <slot></slot>
    </main>
  </section>
</template>

<script>
import {ref} from "vue";
import Sidebar from "@/components/app/Sidebar.vue";
import {useUiStore} from "@/db/ui";
import TopBar from "@/components/app/TopBar.vue";
import {useRoute} from "vue-router";


export default {
  components: {
    TopBar,
    Sidebar
  },
  setup(){
    const uiStore = useUiStore()
    const route = useRoute()

    return {uiStore, route}
  }
}
</script>