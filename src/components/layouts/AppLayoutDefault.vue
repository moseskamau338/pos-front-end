<template>
  <section>
    <!--sidebar main-->
    <div class="absolute bg-white border min-h-screen w-[80px] max-w-[80px] inset-0 flex flex-col flex-wrap overflow-x-hidden">
    <div class="h-[60px] border-b">
      <i class="fa-solid fa-inventory"></i>
    </div>

    <div class="items-center text-center pt-5">
      <nav class="flex flex-col space-y-6">
        <router-link to="#" class="flex items-center justify-center">
          <span class="group hover:bg-slate-200 rounded-md h-12 w-12 flex items-center justify-center transition-all">
            <i class="text-slate-400 group-hover:text-slate-600 transition-all fa-duotone fa-grid-2 text-3xl"></i>
          </span>
        </router-link>

      </nav>
    </div>
    <div class="absolute bg-green-200 bottom-0 py-1 w-[80px]">
      Lorem ipsum dolor sit amet, conseiut?
    </div>

  </div>

    <!--topbar-->
      <div id="topbar" class="fixed top-0 lg:w-[1350px] h-[60px] mx-20 px-5 border-b flex items-center justify-between">
        <div>
          <button>
            <i class="fa-solid fa-circle-dashed"></i>
          </button>
        </div>
        <div>
          <h3>Topbar here</h3>
        </div>
      </div>

    <main class="bg-indigo-100 ml-20 px-5 py-10 mt-[60px]">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ea eligendi et fugiat impedit magni maxime nostrum numquam obcaecati odio odit omnis possimus, ratione rerum sint temporibus velit voluptatibus voluptatum.</p>
    </main>
  </section>


</template>

<script>
import Sidebar from "@/components/app/Sidebar.vue";
export default {
  components: {Sidebar}
}
</script>