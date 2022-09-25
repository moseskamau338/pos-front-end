<template>
  <div>
    <p class="text-sm mt-2">
      Products are <b>what you sell</b>. They are made from multiple <router-link :to="{name:'inventory-ingredients'}" class="text-green-600 font-medium hover:underline">ingredients</router-link>
    </p>
  </div>
  <section class="mt-16">
    <TableLite :headers="fields" :records="[]">
      <template #header>
        <CButton @click="router.push({name:'inventory-products-create'})" variant="info">&plus; Add new</CButton>
      </template>
      <template #actions>
            <input type="text" class="dark:bg-brand-dark dark:border-slate-500 shadow-sm leading-none py-2 focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Search records..">
      </template>
    </TableLite>
  </section>

</template>

<script>
import TableLite from "@/components/Table/TableLite.vue";
import {ref} from "vue";
import CButton from "@/components/elements/CButton.vue";
import {useRouter} from 'vue-router'
export default {
  name: "Products",
  components: {CButton, TableLite},
   setup(){
    const router = useRouter()
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


     return {fields, router}
   }
}
</script>

<style scoped>

</style>