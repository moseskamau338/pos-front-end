<template>
 <Modal :show="show" @close="close" source="orders">
    <template #title>
      <span class="flex text-xl space-x-1.5 items-center font-bold">
        <i class="fa-duotone fa-bags-shopping"></i>
        <span>Add Modifier</span>
      </span>
    </template>
    <template #body>
        <p class="mt-4 text-sm">
          Modifiers help customize order items with specific ingredient changes and notes to the kitchen staff to help them deliver the best products to the customers.
          <br>
          To add a modifier in an order containing multiple similar items,<b><i> please treat the affected products as separate orders for accountability</i></b>.
        </p>

      <div class="mt-5">
        <h3 class="font-bold text-sm mb-4">Select Modifier Type</h3>
        <TabGroup as="div">
          <TabList class="flex bg-slate-200 py-1 w-fit px-2 rounded space-x-2">
            <Tab v-slot="{selected}"
                 :class="[
                     selected ? 'shadow bg-white border' : ''
                 ]"
                class="px-4 py-1 rounded text-xs font-semibold">Ingredient Modifier</Tab>
            <Tab v-slot="{selected}"
                 :class="[
                     selected ? 'shadow bg-white border' : ''
                 ]"
                class="px-4 py-1 rounded text-xs font-semibold">Note Modifier</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div class="mt-2">
                  <TableLite removePagination :headers="fields" :records="records" actioned>
                  <template #header>
                   <SearchSelect autofocus class="w-48" />
                  </template>
                    <template #name="{record}">
                      <input type="text" disabled :value="record.name" name="search" id="name" class="w-fit shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full text-[10px] leading-none py-1.5 border-gray-300 rounded placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="Search ingredients..">
                    </template>
                    <template #quantity="{record}">
                      <input type="number" v-model="record.quantity" class="w-fit shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full text-[10px] leading-none py-1.5 border-gray-300 rounded placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="quantity..">
                    </template>

                    <template #price="{record}">
                      <input type="number" v-model="record.price" class="w-fit shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full text-[10px] leading-none py-1.5 border-gray-300 rounded placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="price..">
                    </template>
                    <template #description="{record}">
                      <textarea type="number" v-model="record.price" class="w-fit shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full text-[10px] leading-none py-1.5 border-gray-300 rounded placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="Description.." />
                    </template>
                    <template #attachments="{record}">
                      attachments
                    </template>

                    <template #row_actions="{record}">
                      <CButton variant="danger" class="text-xs py-0.5">Remove</CButton>
                    </template>

                </TableLite>
                </div>
            </TabPanel>
            <TabPanel>
              <section class="mt-4">
                <form class="">
                  <label class="text-xs font-bold">Add a note to describe how this order should be prepared</label>
                  <textarea rows="5" class="shadow-sm w-[500px] focus:ring-sky-500 focus:border-sky-500 block text-[10px] leading-none py-1.5 border-gray-300 rounded placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="Add a note about this order.."></textarea>
                </form>
              </section>
            </TabPanel>
          </TabPanels>
        </TabGroup>
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
import {inject, ref} from "vue";
import {usePosStore} from "@/db/pos.js";
import Badge from "@/components/elements/Badge.vue";
import Dropdown from "@/components/elements/Dropdown.vue";
import SearchSelect from "@/components/elements/SearchSelect.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
  name: "AddModifier",
  components:{
    SearchSelect, Dropdown,
    Badge, TableLite, CButton, Modal,
    TabGroup, TabList, Tab, TabPanels, TabPanel,
  },
   props:{
    show:{required: true, type: Boolean}
  },
  setup(props, {emit}){
    const {currency} = inject('helpers')
    const posStore = usePosStore()
    /*source: online, in-house, walk-in*/
    const fields = ref([
      {key:'name'},
      {key:'quantity'},
      {key:'price'},
      {key:'description'},
      {key:'attachments'},
    ])
    const records = ref([
      {name:'PHU-00015', quantity:'Andrew Doe', price:6272,description:'walk-in', attachments:'pending'},
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