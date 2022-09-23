<template>
    <template :key="index" v-for="(item, index) in navs">
      <div class="space-y-2 flex flex-col group" :class="{
            'text-left':status,
            'md:text-center':!status,
          }">

        <span v-show="!status && item.title" class="hidden group-hover:md:flex min-w-max text-left absolute shadow-md bg-brand-night-box text-gray-300 mt-2 px-2 py-1 ml-14 rounded text-xs transition transition-opacity delay-1000 duration-500 ease-in-out">
          {{ item.title }}
        </span>

          <div
          class="text-slate-500 align-content-bottom text-xs w-full h-6 mt-5" v-if="item.header">
              <span :class="{'md:hidden' : !status}">{{item.header}}</span>
              <span :class="{
                'hidden md:block' : !status ,
                'hidden' : status ,
              }">...</span>
          </div>

          <span
          class="text-slate-500 group flex px-2 py-1 text-xs rounded-md transition-all hover:translate-x-1"
          v-if="item.disabled">
              <span>
                  <i :class="[
                        status? 'mr-3' : 'text-lg',
                        item.icon

                  ]" class="flex-shrink-0"></i>
                <span :class="{'md:hidden' : !status}">{{ item.title }}</span>
              </span>

          </span>

          <router-link v-if="!item.header && !item.disabled" :to="{name:item.route}" :class="[
              activeRoute(item.route) ?
              'bg-gradient-to-br from-brand-green via-green-600 to-emerald-600 text-white shadow-sm mb-4' :
              'text-slate-400 hover:bg-green-400/30',
              status? 'p-1 ml-0 pl-2' : 'px-2 py-1 mb-2',
              'group text-sm rounded transition-all hover:translate-x-1']">
              <i :class="[
                status? 'mr-3' : 'text-lg',
                item.icon
              ]" class="flex-shrink-0"></i>
              <span :class="{'md:hidden ml-3' : !status}">{{ item.title }}</span>
          </router-link>
      </div>
    </template>
</template>
<script>
import {useRoute} from "vue-router";

export default {
  props: {
    navs: Array,
    status: Boolean
  },
  setup() {
    const route = useRoute()
    function activeRoute(currentRoute){
      if (route.name){
        return route.name.includes(currentRoute)
      }
      return route.name === currentRoute
    }

    return {activeRoute}
  }
}
</script>