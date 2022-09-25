<template>
  <teleport to="#modals">
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="fixed z-[70] inset-0 overflow-y-auto" @close="close">
          <div v-bind="$attrs" class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
              <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <div :class="getSize()" class="relative inline-block bg-white dark:bg-churpy-night-box rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 w-full align-middle sm:align-middle sm:w-full overflow-visible">
                <div class="absolute w-full flex justify-center -mt-4">
                  <header v-if="!asAlert"
                      class="bg-gradient-to-r from-sky-600 to-sky-800 w-[99%] px-3 pt-3 pb-2 flex justify-between text-white px-4 rounded-lg">
                    <h3>
                      <slot name="title">Title here</slot>
                    </h3>
                    <div class="flex space-x-2 items-center">
                      <slot name="title_side"></slot>

                      <button v-if="!noClose" @click.once="close" class="bg-gray-300/70 h-6 w-6 text-xs ml-3 text-gray-700 rounded-full flex items-center justify-center shadow hover:bg-gray-200 hover:text-gray-500 hover:scale-105 transition-all">
                        <i class="fa-solid fa-close"></i>
                      </button>
                    </div>
                  </header>
                </div>
                <div class="px-4 pt-8 pb-4 mb-20 max-h-[80vh] overflow-y-auto">
                 <slot name="body">
                 </slot>
                </div>

                <div class="flex justify-end px-4 py-2 pb-3 mt-5 w-full bottom-0 fixed">
                  <slot name="footer">
                    <button @click="close" type="button" class="inline-flex items-center px-2.5 py-0.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-brand-green hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ribg-brand-green">
                      <slot name="done-text">Done</slot>
                    </button>
                  </slot>
                </div>

              </div>

            </TransitionChild>
          </div>
        </Dialog>
    </TransitionRoot>
  </teleport>
</template>

<script>
import { toRef } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  name:'Modal',
  props: {
    show: {type: Boolean, required: true},
    source:{type:String, default: 'page', },
    size: {type: String, default: 'normal'},
    asAlert: Boolean,
    noClose: Boolean
  },
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  setup(props, {emit}) {
    //preliminaries:
    //const emitter = inject('emitter')
    const open = toRef(props, 'show')

    function getSize(){
      let classes = ''
      if (props.asAlert){
        let height = props.asAlert ? 'min-h-auto' : 'min-h-[300px]'
         classes = 'sm:max-w-md'+' '+height
      }else{
        switch (props.size) {
          case 'large': classes = 'sm:max-w-6xl min-h-[700px]'; break;
          case 'normal': classes = 'sm:max-w-4xl min-h-[500px]'; break;
          case 'small': classes = 'sm:max-w-md min-h-[300px]'; break;
          default: classes = 'sm:max-w-4xl min-h-[500px]';
        }
      }

      return classes
    }

    function close(){
      if (!props.noClose){
        emit('close', props.source)
      }
    }

    return {
      open,
      close,
      getSize
    }
  },
}
</script>