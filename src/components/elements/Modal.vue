<template>
  <dialog id="modal" v-show="open" class="border max-w-5xl">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda earum explicabo necessitatibus nesciunt nulla odit provident ratione reprehenderit unde! Animi distinctio labore obcaecati odio quia quos sunt veniam. Perferendis!
  </dialog>
</template>

<script>
import {watch} from "vue";

export default {
  name: "Modal",
  props:{
    open: {
      required: true,
      type: Boolean
    }
  },
  setup(props){
    const modal = document.getElementById('modal')
    watch(
        () => props.open,
    ()=>{
          console.log('Open status changed')
          console.log('Modal registered: ', modal)

          if (props.open){
              modal.showModal()
            }else{
            modal.close()
          }
        }
    )

  }
}
</script>

<style scoped>

</style>