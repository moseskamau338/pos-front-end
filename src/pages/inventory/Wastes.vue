<template>
  <div>
    <p class="text-sm mt-2">
      Wastes help you track how much you are loosing for both products and ingredients. You can also filter by responsible agent.
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


<CreateWaste :show="showCreate" @close="onClose" />

</template>

<script>
import TableLite from "@/components/Table/TableLite.vue";
import {ref} from "vue";
import CButton from "@/components/elements/CButton.vue";
import CreateWaste from "@/pages/inventory/CreateWaste.vue";
export default {
  name: "Wastes",
  components: {CreateWaste, CButton, TableLite},
   setup(){
    const showCreate = ref(false)
    const fields =  ref([
      {key: 'type'},
      {key: 'responsible', label: 'responsible agent'},
      {key: 'user', label: 'recorded by'},
      {key: 'store'},
      {key: 'unit'},
      {key: 'count', label: 'Amount'},
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