<template>
 <header class="flex items-center justify-between">
      <h4 class="text-sm font-bold">Categories</h4>
      <div class="flex items-center space-x-2">
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-chevron-right"></i>
      </div>
    </header>

  <!--  categories-->
  <div class="flex items-center overflow-x-auto mt-2 border-r border-l scroll-smooth scrollbar-hide">
    <div v-for="i in 20" class="bg-white dark:bg-brand-dark-box mr-2 flex items-center p-4 shadow shrink-0 grow-0">category {{ i }}</div>
  </div>
</template>

<script>
export default {
  name: "Categories"
}
</script>

<style scoped>

</style>