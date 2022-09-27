<template>
<span :class="[themeClasses, sizeClasses]" class="rounded-full flex items-center justify-center text-xl shadow grow-0 shrink-0" v-bind="$attrs">
  <i v-if="icon.length" :class="icon" class="fa-solid font-bold"></i>
  <span v-if="text.length" :class="size === 'small'? 'text-xs':''" class="font-bold text-sm">{{getRandomColor(text).character}}</span>
  <slot v-if="type === 'image'"></slot>
</span>
</template>

<script>
import {ThemeGenerator} from "@/library/ThemeGenerator";
import {inject} from "vue";
export default {
  name: "Avatar",
  props:{
    type:{default: 'icon', type:String},
    variant:{default: 'success', type:String},
    icon:{default:'', type:String},
    text:{default:'', type:String},
    size:{default:'normal', type:String}
  },
  setup(props){
    const theme = new ThemeGenerator()
    const {getRandomColor} = inject('helpers')
    let themeClasses = theme.avatar(props.variant)
    const sizeClasses = (() => {
            switch(props.size) {
                case 'normal': return 'h-12 w-12';
                case 'small' :return 'h-6 w-6';
                default: return 'h-8 w-8';
            }

          })()

    return {themeClasses, sizeClasses, getRandomColor}
  }
}
</script>

<style scoped>

</style>