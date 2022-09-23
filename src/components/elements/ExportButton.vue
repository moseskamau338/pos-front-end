<template>
 <Menu as="div" class="relative inline-block text-left ml-3">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center items-center rounded bg-brand-dark px-3 py-1 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-all"
      >
        Export
        <i class="fa-solid fa-chevron-down ml-2 -mr-1 hover:text-violet-100" aria-hidden="true"></i>

      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute w-max md:right-0 mt-2 md:w-56 origin-top-right divide-y divide-gray-100 rounded bg-white dark:bg-brand-night dark:border dark:border-gray-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-300 text-green-600' : 'text-gray-900',
                'group flex w-full hover:bg-gray-100 dark:hover:bg-gray-500 items-center rounded-md px-2 py-2 text-sm dark:text-gray-400',
              ]"
            >
              Export as Excel
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-green-300 text-green-600' : 'text-gray-900',
                'group flex w-full hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-500 items-center rounded-md px-2 py-2 text-sm dark:text-gray-400',
              ]"
            >
              Export to CSV
            </button>
          </MenuItem>
        </div>

      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

export default {
  name: "ExportButton",
  components:{
      Menu, MenuButton,
    MenuItems, MenuItem,
  }
}
</script>

<style scoped>

</style>