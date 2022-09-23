<template>
<Transition :key="route.path"
        enter-active-class="transform ease-out duration-300 transition delay-400 translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition opacity-100 ease-in duration-100"
        leave-to-class="opacity-0"
        appear
      >
      <div class="flex items-center border-b dark:bg-brand-dark-box border-b-slate-100 dark:border-b-slate-700">
        <nav class="flex justify-between" aria-label="Breadcrumb">
          <div>
              <ol role="list" class="flex items-center space-x-2" >
              <li>
                  <div>
                  <router-link :to="{name: 'dashboard'}" class="text-slate-400 hover:text-slate-500">
                      <i class="fad text-sm fa-home flex-shrink-0"></i>
                      <span class="sr-only">Home</span>
                  </router-link>
                  </div>
              </li>
              <li v-for="(item, index) in breadcrumbs" :key="index">
                   <div class="flex items-center">
                      <svg class="flex-shrink-0 h-4 w-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                      <router-link :to="item.to || ''" :class="!item.active? 'text-brand-green hover:text-green-600':''" class="ml-4 text-xs font-medium text-slate-500">
                          {{item.text}}
                      </router-link>
                  </div>
              </li>
              </ol>
          </div>
        </nav>

        <h1 class="text-xl my-4 font-semibold flex text-brand-gray">
            {{route.meta.title || ''}}
        </h1>
        </div>
  </Transition>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: "BreadCrumb",
    setup(){
      const route = useRoute()
    const breadcrumbs = computed(() => {
      let breadcrumb = null
      if (typeof route.meta.breadcrumb === 'function'){
        breadcrumb = route.meta.breadcrumb(route)
      }else if(!route.meta.breadcrumb){breadcrumb = []}
      else {breadcrumb = route.meta.breadcrumb}

      for (let i = 0; i < breadcrumb; i++) {
        if (typeof breadcrumb[i].to === 'function'){
          breadcrumb[i].to = breadcrumb[i].to(route)
        }
      }

      return breadcrumb

    })

      return {route, breadcrumbs}
  }
}
</script>

<style scoped>

</style>