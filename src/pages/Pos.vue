<template>
<section class="grid grid-cols-12 gap-7 mx-5 h-[90vh]">
  <div class="col-span-8">
    <header class="flex items-center justify-between">
      <h4 class="text-sm font-bold">Categories</h4>
      <div class="flex items-center space-x-2">
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-chevron-right"></i>
      </div>
    </header>
  </div>
  <div class="col-span-4">
    <header class="flex items-center justify-between">
      <h4 class="text-sm font-bold">Draft</h4>
      <div class="flex items-center space-x-2">
        <button class="hover:bg-slate-200 transition-all duration-200 flex justify-center items-center h-5 w-5 rounded-full group">
          <i class="fas fa-plus text-xs transition-all duration-200 group-hover:text-highlight"></i>
        </button>
        <button class="hover:bg-red-100 transition-all duration-200 flex justify-center items-center h-5 w-5 rounded-full group">
          <i class="fas fa-trash text-xs transition-all duration-200 group-hover:text-red-500"></i>
        </button>
      </div>
    </header>

    <div class="bg-white dark:bg-brand-dark-box dark:border-slate-700 shadow px-3 py-2 mt-4 rounded border border-slate-50">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae cumque delectus ducimus est, et, in laboriosam mollitia nesciunt officia quibusdam quo repudiandae, rerum unde voluptates. Illo magni nisi ullam!
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Pos"
}
</script>

<style scoped>

</style>