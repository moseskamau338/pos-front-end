<template>
<!--  buttons-->
  <h1 class="text-xl text-gray-700 mb-3">Elements</h1>
  <h3 class="text-sm text-gray-700 font-bold mb-3">Buttons</h3>
  <div class="flex space-x-2">
      <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-brand-green hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-green transition-all h-fit">Success Small</button>

    <button type="button" class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium rounded bg-gradient-to-br from-brand-green via-green-600 to-emerald-600 text-white shadow-sm mb-4 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-green transition-all h-fit">Gradient Button</button>

    <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500 transition-all h-fit">Danger</button>

    <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-400 transition-all h-fit">Warning</button>

    <button type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-brand-night-box hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-night-box transition-all h-fit">Secondary</button>

  </div>

  <h3 class="text-sm text-gray-700 font-bold mb-3 mt-2">Badges</h3>
  <div class="flex space-x-2">
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-300 text-green-800"> Badge </span>
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-300 text-green-800"> Round Badge </span>
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-brand-green text-white"> Full color </span>

    <span class="inline-flex items-center py-0.5 pl-2 pr-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
    With Icon
    <button type="button" class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white">
      <span class="sr-only">Remove small option</span>
      <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
      </svg>
    </button>
  </span>
  </div>

</template>

<script>
export default {
  name: "Elements",

}
</script>

<style scoped>

</style>