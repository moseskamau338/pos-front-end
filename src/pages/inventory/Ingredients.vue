<template>
  <div>
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
          <input type="text" class="dark:bg-brand-dark dark:border-slate-500 shadow-sm leading-none py-2 focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 dark:border-slate-500 dark:bg-brand-dark rounded-md" placeholder="Search records..">
      </template>
    </TableLite>
  </section>


<CreateIngredient :show="showCreate" @close="onClose" />

</template>

<script>
import TableLite from "@/components/Table/TableLite.vue";
import {ref} from "vue";
import CButton from "@/components/elements/CButton.vue";
import CreateIngredient from "@/pages/inventory/CreateIngredient.vue";
export default {
  name: "Ingredients",
  components: {CreateIngredient, CButton, TableLite},
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

     const onClose = () => {
       showCreate.value = false
     }

     return {fields, showCreate, onClose}
   }
}
</script>

<style scoped>
</style>