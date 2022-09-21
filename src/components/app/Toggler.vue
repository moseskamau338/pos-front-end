<template>
     <button class="text-xl" @click="uiStore.theme = !uiStore.theme">
        <i class="fa-solid fa-moon dark:text-churpy-dark transition-all" v-if="!uiStore.theme"></i>
       <i class="fa-solid fa-sun-bright text-amber-400" v-else></i>
     </button>
</template>

<script setup>
import {useUiStore} from '@/db/ui'
 const uiStore = useUiStore();

//listen to state changes
uiStore.$subscribe((mutation, state) =>{
  uiStore.changeTheme(state.theme? 'dark' : 'light')
}, { detached: true })
</script>