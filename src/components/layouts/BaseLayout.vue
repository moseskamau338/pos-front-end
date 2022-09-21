<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import AppLayoutDefault from './AppLayoutDefault.vue'
import { markRaw, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'BaseLayout',
  setup() {
    const route = useRoute()

    const layout = ref()

    watch(
      () => route.meta?.layout || undefined,
      async (metaLayout) => {
        try {
          const component = metaLayout && await import(/* @vite-ignore */ `/src/components/layouts/${metaLayout}.vue`)
          layout.value = markRaw(component?.default || AppLayoutDefault) 
        } catch (e) {
          layout.value = markRaw(AppLayoutDefault)
        }
      },
      { immediate: true }
    )

    return { layout }
  }
}
</script>