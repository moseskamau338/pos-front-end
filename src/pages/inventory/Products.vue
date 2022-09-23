<template>
  <div>
    <h1 class="font-semibold text-sky-900 text-xl">Manage Products</h1>
    <p class="text-sm mt-2">
      Products are <b>what you sell</b>. They are made from multiple <router-link :to="{name:'inventory-ingredients'}" class="text-green-600 font-medium hover:underline">ingredients</router-link>
    </p>
  </div>
  <section class="mt-16">
    <TableLite :headers="fields" :records="[]">
      <template #header>
        <CButton variant="info">&plus; Add new</CButton>
      </template>
      <template #actions>
            <input type="text" class="shadow-sm leading-none py-2 focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Search records..">
      </template>
    </TableLite>
  </section>
</template>

<script>
import TableLite from "@/components/Table/TableLite.vue";
import {ref} from "vue";
import CButton from "@/components/elements/CButton.vue";
export default {
  name: "Products",
  components: {CButton, TableLite},
   setup(){
    const fields =  ref([
      {key: 'id'},
      {key: 'name'},
      {key: 'description'},
      {key: 'price'},
      {key: 'unit'},
      {key: 'tax'},
      {key: 'stock'},
      {key: 'sales'},
    ])


     return {fields}
   }
}
</script>

<style scoped>

</style>