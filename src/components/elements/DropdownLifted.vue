<template>
   <Popover as="div" class="relative">
    <PopoverButton>
      <slot name="title">
        <c-button :variant="variant">
        {{name}}
        <i class="fa-solid fa-chevron-down ml-1"></i></c-button>
      </slot>
    </PopoverButton>

    <!-- Use the built-in <transition> component to add transitions. -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel v-slot="{ close, open }" class="absolute z-10 mt-1 w-fit max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-8">
        <slot name="content">
          <div class="overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="relative bg-white dark:bg-brand-night">
              <template :key="index"
                  v-for="(option, index) in options">

                <slot :name="option.key" v-bind:open="open" v-bind:close="close">
                  <button
                      @click="option.action"
                    class="py-2 pl-2 pr-8 flex w-full items-center rounded-sm text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-gray-200"
                  >
                    <span class="flex items-center whitespace-nowrap">
                      <i v-if="option.icon" class="fa-solid mr-2" :class="option.icon"></i>
                      {{option.name}}
                    </span>
                  </button>
                </slot>
                <slot name="more_options"></slot>


              </template>
            </div>
          </div>
        </slot>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import CButton from "@/components/elements/CButton.vue";

export default {
  name: "DropdownLifted",
  props:{
    variant:{type:String, default:'dark'},
    name:{type:String, default:'Options'},
    options:{type:Array, required:true},
  },
  components:{
    Popover, PopoverButton,
    PopoverPanel, CButton
  }
}
</script>

<style scoped>

</style>