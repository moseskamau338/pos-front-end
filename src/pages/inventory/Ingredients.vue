<template>
  <div>
    <h1 class="font-semibold text-sky-900 text-xl">Manage Ingredients</h1>
    <p class="text-sm mt-2">
      Conveniently manage all your ingredient related operations here.
    </p>
  </div>
  <section class="mt-16">
    <TableLite :headers="fields" :records="[]">
      <template #header>
        <CButton @click="showCreate = !showCreate" variant="info">&plus; Add new</CButton>
      </template>
      <template #actions>
            <input type="text" class="shadow-sm leading-none py-2 focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Search records..">
      </template>
    </TableLite>
  </section>



  <Modal :open="showCreate" />
</template>

<script>
import TableLite from "@/components/Table/TableLite.vue";
import {ref} from "vue";
import CButton from "@/components/elements/CButton.vue";
import Modal from "@/components/elements/Modal.vue";
export default {
  name: "Ingredients",
  components: {Modal, CButton, TableLite},
   setup(){
    const showCreate = ref(false)
    const fields =  ref([
      {key: 'SKU'},
      {key: 'name'},
      {key: 'price', label:'Price/Unit'},
      {key: 'unit'},
      {key: 'stock', label: 'Current Stock'},
      {key: 'stock_alert', label: 'Stock Alert Limit'},
    ])

     return {fields, showCreate}
   }
}
</script>

<style scoped>
#modal::backdrop{
  @apply bg-red-600
}
</style>