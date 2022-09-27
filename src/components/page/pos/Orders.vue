<template>
 <Modal :show="show" @close="close" source="orders">
    <template #title>
      <span class="flex text-xl space-x-1.5 items-center font-bold">
        <i class="fad fa-layer-group"></i>
        <span>Order Queue</span>
      </span>
    </template>
    <template #body>
        <p class="mt-4 text-sm">
          This list shows all order items that have not been completed but are in other statuses
        </p>

      <div class="mt-8">
        <TableLite :records="[]" :headers="[]">
        <template #header>
          <Dropdown :options="[{key:'nae'}]" />
        </template>
        <template #actions>
          <input type="text" name="search" id="name" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm leading-none py-1 border-gray-300 rounded-md placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="Search orders..">
        </template>
      </TableLite>
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
import CButton from "@/components/elements/CButton.vue";
import Modal from "@/components/elements/Modal.vue";
import TableLite from "@/components/Table/TableLite.vue";
import Dropdown from "@/components/elements/Dropdown.vue";

export default {
  name: "Orders",
  components:{Dropdown, TableLite, CButton, Modal},
   props:{
    show:{required: true, type: Boolean}
  },
  setup(props, {emit}){

    const close = () => {
      emit('close')
  }

  return {close}
  }
}
</script>

<style scoped>

</style>