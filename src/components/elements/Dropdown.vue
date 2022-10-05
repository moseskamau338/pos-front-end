<template>
<Popper :arrow="true" placement="bottom" offsetDistance="5">
  <slot>
   <button type="button" class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-highlight hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Options</button>
  </slot>

  <template #content>
    <slot name="content"></slot>
  </template>
</Popper>
</template>

<script>
import Popper from "vue3-popper";
export default {
  components:{
    Popper
  },
  setup(){

  }
}

</script>

<style scoped>

:deep(.popper #arrow::before) {
    @apply bg-slate-50
  }

  :deep(.popper:hover),
  :deep(.popper:hover > #arrow::before) {
    @apply bg-slate-50
  }
</style>