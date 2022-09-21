<template>
  <BaseLayout>
      <router-view v-slot="{ Component , route, params}">
        <Transition :key="route.path"
          enter-active-class="transform ease-out duration-300 transition delay-100 translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition opacity-100 ease-in duration-100"
          leave-to-class="opacity-0"
          appear
        >
          <component :is="Component" v-bind="params"/>
        </Transition>
      </router-view>
  </BaseLayout>
</template>

<script setup>
</script>


