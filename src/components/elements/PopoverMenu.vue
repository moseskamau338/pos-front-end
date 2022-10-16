<template>
  <Popover class="relative">
    <PopoverButton>
      <slot name="title">options</slot>
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute z-10">
        <slot></slot>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  export default {
    name:'PopoverMenu',
    components:{Popover, PopoverButton, PopoverPanel},
    setup(){

    }
  }
</script>