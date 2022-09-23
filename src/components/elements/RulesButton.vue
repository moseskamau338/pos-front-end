<template>
  <button v-bind="$attrs" @click="showRules = true" class="border border-slate-400 dark:border-gray-600 hover:opacity-90 focus:ring focus:ring-1 focus:ring-green-500/80 bg-white dark:bg-brand-night-box dark:text-gray-400 text-gray-500 px-2 py-1 text-sm font-bold rounded flex items-center space-x-1 hover:bg-green-50 transition-all">
    <i class="fa-duotone fa-ballot-check mr-2"></i>
    <span><slot>Configure Rules</slot></span>
    </button>

  <!--rules-->
  <Rules @close="showRules = false" :open="showRules" />
</template>

<script>
import Rules from "@/components/page/Rules/Rules.vue";
import {ref, onMounted, inject, onUnmounted} from "vue";

export default {
  name: "RulesButton",
  components:{Rules},
  setup(){
    const emitter = inject('emitter')
    const showRules = ref(false)

    onMounted(() => {
      emitter.on('show_rules', () => {
        showRules.value = true
      })
    })
    onUnmounted(() => {
      emitter.off('show_rules')
    })

    return {showRules}
  }
}
</script>

<style scoped>

</style>