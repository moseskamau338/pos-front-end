<template>
 <Modal :show="show" @close="close" source="orders">
    <template #title>
      <span class="flex text-xl space-x-1.5 items-center font-bold">
        <i class="fad fa-edit"></i>
        <span>Edit Item</span>
      </span>
    </template>
    <template #body>
        <p class="mt-4 text-sm">
          This list shows all order items that have not been completed but are in other statuses
        </p>

      <div class="mt-8">
        <TableLite :headers="fields" :records="records">
        <template #actions>
          <input type="text" name="search" id="name" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm leading-none py-1 border-gray-300 rounded-md placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="Search orders..">
        </template>

          <template #header_status="{field}">
            <div>
              <span class="uppercase text-xs font-medium mr-2">{{field.key}}</span>
              <Dropdown>
                <button class="bg-slate-300 px-1 flex items-center justify-center h-4 w-4 rounded-full">
                  <i class="fas fa-chevron-down"></i>
                </button>
                <template #content>
                 <div class="w-48 border bg-white px-2 py-1">
                    <ul>
                      <li class="text-xs text-slate-400" v-for="item in [
                          {name:'Processing'},
                          {name:'On-Hold'},
                          {name:'Pending'},
                          {name:'Draft'},
                      ]">
                        <div class="relative flex items-center space-x-1">
                          <div class="flex items-center h-5">
                            <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="focus:ring-0 h-3 w-3 text-highlight border-gray-300 rounded-sm">
                          </div>
                            <label class="font-medium">{{ item.name }}</label>
                        </div>
                      </li>
                    </ul>
                 </div>
                </template>
              </Dropdown>
            </div>
          </template>

          <template #id="{record}">
            <span class="text-xs font-bold text-highlight">{{ record.id }}</span>
          </template>
          <template #customer="{record}">
            <span class="text-xs">{{ record.customer }}</span>
          </template>
          <template #amount="{record}">
            <div class="text-right">
              <span class="text-xs font-bold">{{ posStore.currency }} {{ currency(record.amount) }}</span>
            </div>
          </template>

          <template #source="{record}">
              <Badge :themes="[
                  {name:'online', status:'info'},
                  {name:'walk-in', status:'dark'},
                  {name:'in-house', status:'warning'},
              ]" :status="record.source" small />
          </template>

          <template #status="{record}">
              <Badge :status="record.status" small />
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
import {inject, onMounted, ref} from "vue";
import {usePosStore} from "@/db/pos.js";
import Badge from "@/components/elements/Badge.vue";
import Dropdown from "@/components/elements/Dropdown.vue";


export default {
  name: "AddModifier",
  components:{Dropdown, Badge, TableLite, CButton, Modal},
   props:{
    show:{required: true, type: Boolean}
  },
  setup(props, {emit}){
    const {currency} = inject('helpers')
    const posStore = usePosStore()
    /*source: online, in-house, walk-in*/
    const fields = ref([
      {key:'id'},
      {key:'customer'},
      {key:'amount'},
      {key:'source'},
      {key:'status'},
    ])
    const records = ref([
      {id:'JKY-782378', customer:'Walk-In_customer', amount:579000,source:'walk-in', status:'processing'},
      {id:'PHU-0009', customer:'Walk-In_customer', amount:8653.90,source:'walk-in', status:'processing'},
      {id:'PHU-00010', customer:'John Njenga', amount:900,source:'online', status:'processing'},
      {id:'PHU-00011', customer:'Karani K', amount:1234.64,source:'in-house', status:'pending'},
      {id:'PHU-00012', customer:'Francis P', amount:7382,source:'in-house', status:'hold'},
      {id:'PHU-00013', customer:'Michael Kimani', amount:2463,source:'online', status:'hold'},
      {id:'PHU-00014', customer:'Moses Friend', amount:765354,source:'walk-in', status:'pending'},
      {id:'PHU-00015', customer:'Andrew Doe', amount:6272,source:'walk-in', status:'pending'},
      {id:'PHU-00016', customer:'Cleaner XD', amount:83654,source:'walk-in', status:'draft'},
    ])


    const close = () => {
      emit('close')
  }

  return { close, fields,
    records, currency,
    posStore}
  }
}
</script>

<style scoped>

</style>