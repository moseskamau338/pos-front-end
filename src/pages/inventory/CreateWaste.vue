<template>
  <Modal :show="show" @close="close">
    <template #title>
      <span class="flex text-xl space-x-1.5 items-center font-bold">
        <i class="fad fa-plus"></i>
        <span>Record Waste</span>
      </span>
    </template>
    <template #body>
      <div class="grid grid-cols-1 lg:grid-cols-12 mt-8 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Type</h3>
        </div>
        <div class="col-span-8">
             <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-highlight focus:border-highlight sm:text-sm rounded-md dark:border-slate-500 dark:bg-brand-dark">
                <option>Ingredient Waste</option>
                <option>Product Waste</option>
              </select>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 mt-4 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Responsible Agent</h3>
        </div>
        <div class="col-span-8">
              <input type="text" class="shadow-sm focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md dark:border-slate-500 dark:bg-brand-dark" placeholder="Search agent">
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 mt-4 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Store</h3>
        </div>
        <div class="col-span-8">
              <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-highlight focus:border-highlight sm:text-sm rounded-md dark:border-slate-500 dark:bg-brand-dark">
                <option>Store 1</option>
                <option>Store 2</option>
                <option>Store 3</option>
                <option>Store 4</option>
              </select>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 mt-4 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Amount</h3>
          <small class="text-slate-400 text-xs">How much was wasted?</small>
        </div>
        <div class="col-span-8">
              <input type="number" min="0" class="shadow-sm focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md dark:border-slate-500 dark:bg-brand-dark">
        </div>
      </div>

    </template>
    <template #footer>
      <CButton variant="success" class="space-x-1.5 mr-5">
        <i class="fas fa-save"></i>
        <span>Save</span>
      </CButton>
      <CButton @click="close" variant="secondary" class="space-x-1.5">
        <span>Cancel</span>
      </CButton>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/elements/Modal.vue";
import {ref} from "vue";
import CButton from "@/components/elements/CButton.vue";

export default {
  name: "CreateWaste",
  components:{CButton, Modal},
  props:{
    show:{required: true, type: Boolean}
  },
  setup(props, {emit}){

  const close = () => {
      emit('close')
  }
    return {emit, close}
  }
}
</script>

<style scoped>

</style>