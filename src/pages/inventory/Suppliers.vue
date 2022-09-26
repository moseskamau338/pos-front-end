<template>
  <div>
    <p class="text-sm mt-2">
      Conveniently manage all your ingredient related operations here.
    </p>
  </div>
  <section class="mt-16">
    <TableLite actioned :headers="fields" :records="suppliers">
      <template #header>
        <CButton @click="showCreate = !showCreate" variant="info">&plus; Add new</CButton>
      </template>

      <template #id="{record}">
        <span class="font-bold text-highlight hover:underline cursor-pointer dark:text-sky-300">{{record.id}}</span>
      </template>

      <template #date="{record}">
        {{dayjs(record.date).format('DD, MMM, YYYY')}}
      </template>

      <template #actions>
          <input type="text" class="dark:bg-brand-dark dark:border-slate-500 shadow-sm leading-none py-2 focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 dark:border-slate-500 dark:bg-brand-dark rounded-md" placeholder="Search records..">
      </template>
      <template #row_actions="{record}">
        <div class="flex items-center space-x-2">
          <button @click="viewSupplier(record)" class="underline font-medium text-highlight dark:text-sky-300">View</button>
          <span class="underline font-medium text-red-500 dark:text-red-400">Delete</span>
        </div>
      </template>
    </TableLite>
  </section>


<CreateSupplier :show="showCreate" @close="onClose" />
<ViewSupplier :show="showView" :supplier="currentSupplier" @close="showView = false" />

</template>

<script>
import TableLite from "@/components/Table/TableLite.vue";
import {ref} from "vue";
import CButton from "@/components/elements/CButton.vue";
import CreateSupplier from "@/pages/inventory/CreateSupplier.vue";
import ViewSupplier from "@/pages/inventory/ViewSupplier.vue";
import dayjs from 'dayjs'
export default {
  name: "Suppliers",
  components: {CreateSupplier, ViewSupplier, CButton, TableLite},
   setup(){
    const showCreate = ref(false)
    const showView = ref(false)
     let currentSupplier = ref(null)
    const fields =  ref([
      {key: 'id'},
      {key: 'name'},
      {key: 'phone'},
      {key: 'email'},
      {key: 'date'},
    ])
  const suppliers = ref([
    {id:'0001234', name:'John Wheats', phone:'+2547 09 986 342', email:'jwheats@gmail.com', date:'03/23/2020'}
  ])
     const viewSupplier = (supplier) => {
        currentSupplier.value = supplier
         showView.value = true
     }
     const onClose = () => {
       showCreate.value = false
     }

     return {fields, dayjs, currentSupplier, viewSupplier, showCreate, showView, onClose, suppliers}
   }
}
</script>

<style scoped>
</style>