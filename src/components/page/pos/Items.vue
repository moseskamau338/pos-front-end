<template>
<div class="mt-5 grid gap-4 grid-cols-6 lg:grid-cols-12 px-4">
      <button v-for="i in 60" class="col-span-3 w-fit bg-white dark:bg-brand-dark-box shadow rounded hover:ring text-left focus:ring-highlight">
        <div class="aspect-auto p-2">
          <img :src="`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1200/700/`" alt="image" class="rounded shadow w-40 object-cover">
        </div>
        <div class="p-2">
          <h6 class="text-xs font-bold">Black Forest Cake</h6>
          <small class="text-gray-400 text-xs">Description here </small>
        </div>
        <div class="flex justify-end px-2">
          <span class="text-highlight dark:text-sky-300">35.00 $</span>
        </div>
      </button>
    </div>
</template>

<script>
export default {
  name: "Items"
}
</script>

<style scoped>

</style>