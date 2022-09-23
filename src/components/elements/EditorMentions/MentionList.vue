<template>
 <div class="-mx-2.5 -my-2 flex flex-col p-2 bg-white dark:bg-brand-night-box text-gray-600 dark:text-gray-400 shadow-md items-start text-left space-y-px rounded border">
     <h2 class="font-bold tracking-widest uppercase text-xs pb-3">Choose option</h2>
    <template v-if="items.length">
      <button
        class="w-full text-left hover:translate-x-0.5 transition-all hover:bg-gray-200 hover:dark:bg-gray-600 px-2 py-1 rounded-sm"
        :class="{ 'translate-x-0.5 bg-gray-200 dark:bg-gray-600': index === selectedIndex }"
        v-for="(item, index) in items"
        :key="index"
        @click="selectItem(index)"
      >
        <span class="opacity-30 mr-2">//</span>{{ item }}
      </button>
    </template>
    <div class="item" v-else>
      No result
    </div>
  </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
  name: "MentionList",
  props: {
    items: {
      type: Array,
      required: true,
    },

    command: {
      type: Function,
      required: true,
    },
  },
  setup(props){
    let selectedIndex = ref(0)


     watch(() => props.items, (newValue) => {selectedIndex.value = 0});

    function onKeyDown({ event }) {
      if (event.key === 'ArrowUp') {
        upHandler()
        return true
      }

      if (event.key === 'ArrowDown') {
        downHandler()
        return true
      }

      if (event.key === 'Enter') {
        enterHandler()
        return true
      }

      return false
    }

    function upHandler() {
      selectedIndex.value = ((selectedIndex.value + props.items.length) - 1) % props.items.length
    }

    function downHandler() {
      selectedIndex.value = (selectedIndex.value + 1) % props.items.length
    }

    function enterHandler() {
      selectItem(selectedIndex.value)
    }

    function selectItem(index) {
      const item = props.items[index]

      if (item) {
        props.command({ id: item })
      }
    }
    return {selectedIndex, onKeyDown,upHandler,downHandler,enterHandler,selectItem}
  },
}
</script>

<style>

</style>