<template>
  <div
     ref="content"
     @keydown.enter="edited"
      :contenteditable="editing" :class="{
    'underline decoration-dashed':editing
  }" class="transition-all w-48 overflow-y-auto scrollbar-hide">
    {{value}}
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  name: "Editable",
  props:{
    editing: {type: Boolean, default: false},
    value: {type: String, required: true}
  },
  setup(props, {emit}){
    let content = ref('')

    function edited(){
      if (content.value.innerText.length <= 0){
        content.value.innerText = props.value
        return;
      }
      let value = content.value.innerText.length || props.value

      console.log('Edited: ',value)
      emit('edited', value)
    }

    return {content, edited}
  }
}

</script>

<style scoped>
[contenteditable="true"]:active,
[contenteditable="true"]:focus{
  @apply p-1 transition-all outline-green-600 ring-green-500 rounded-sm border-green-600
}
</style>