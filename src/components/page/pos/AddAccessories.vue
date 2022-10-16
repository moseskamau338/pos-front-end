<template>
 <Modal :show="show" @close="close" size="large" source="orders">
    <template #title>
      <span class="flex text-xl space-x-1.5 items-center font-bold">
        <i class="fa-duotone fa-bags-shopping"></i>
        <span>Add Accessory</span>
      </span>
    </template>
    <template #body>
        <p class="mt-4 text-sm">
          Accessories (or addons) are items that need to be added to your product but you currently do not provide them and have to purchase or acquire them out of the usual flow.
        </p>

      <div class="mt-8">
        <TableLite remove-pagination actioned :headers="fields" :records="records">
          <template #header>
            <div class="flex justify-between items-center">
              <h3 class="font-bold text-sm mb-4">Add accessories</h3>
              <h3 class="font-bold text-2xl mb-4">
                Order Total: <span class="text-green-600">{{ posStore.currency }} {{ currency(posStore.cartTotals().total) }}</span>
              </h3>
            </div>
          </template>

          <template :key="cell" v-for="cell in fields" #[cell.key]="{record}">
            <div class="xl:w-[140px] flex items-start">

              <div v-if="cell.key === 'description'">
                   <textarea rows="2" class="shadow-sm focus:ring-green-500 focus:border-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300 dark:placeholder-gray-500 dark:bg-brand-dark dark:border-slate-600" :placeholder="`${makeTitle(cell.key)}...`"></textarea>
              </div>

              <input v-else-if="cell.key === 'price' || cell.key === 'amount'" type="number"
                     v-model.number="record[cell.key]"
                     class="focus:ring-green-500 focus:border-green-500 dark:border-gray-500 dark:bg-churpy-night border-gray-300 lg:w-[100%] shadow-sm leading-none py-1.5 block sm:text-xs rounded placeholder-gray-300 dark:placeholder-gray-500 dark:bg-brand-dark dark:border-slate-600" :placeholder="`${makeTitle(cell.key)}...`" />


              <div v-else-if="cell.key === 'attachments'">
                  <CButton variant="secondary">ATTACH FILES</CButton>
              </div>

              <input v-else-if="cell.key === 'total'" type="number"
                     :value="record.price * record.quantity"
                     :disabled="(cell.key === 'total')"
                     class="focus:ring-green-500 focus:border-green-500 dark:border-gray-500 dark:bg-churpy-night border-gray-300 lg:w-[100%] shadow-sm leading-none py-1.5 block sm:text-xs rounded placeholder-gray-300 dark:placeholder-gray-500 dark:bg-brand-dark dark:border-slate-600" :placeholder="`${makeTitle(cell.key)}...`" />


              <input v-else type="text" v-model="record[cell.key]"
                     class="focus:ring-green-500 focus:border-green-500 dark:border-gray-500 dark:bg-churpy-night border-gray-300 lg:w-[100%] shadow-sm leading-none py-1.5 block sm:text-xs rounded placeholder-gray-300 dark:placeholder-gray-500 dark:bg-brand-dark dark:border-slate-600" :placeholder="`${makeTitle(cell.key)}...`" />
            </div>
          </template>

          <template #action_header>
            <CButton @click="addEntry" variant="secondary" class="text-[10px]">&plus; Add Entry</CButton>
          </template>
          <template #row_actions="{record}">
            <CButton @click="removeEntry($event, record)" variant="danger" class="text-[10px]">Remove</CButton>
          </template>
        </TableLite>
        <!--Totals-->
        <div class="flex justify-end">
          <table>
            <tr>
              <td class="text-sm font-semibold px-4 py-1 text-right">Sub Total</td>
              <td class="text-sm text-right">0.00</td>
            </tr>
             <tr>
              <td class="text-sm font-semibold px-4 py-1 text-right">Tax (VAT 16%)</td>
              <td class="text-sm text-right">0.00</td>
            </tr>
             <tr>
              <td class="text-md font-semibold px-4 py-1 text-right">Total</td>
              <td class="text-md text-right font-bold text-green-600">{{ posStore.currency }} {{currency(getTotals())}}</td>
            </tr>
          </table>
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
import CButton from "@/components/elements/CButton.vue";
import Modal from "@/components/elements/Modal.vue";
import TableLite from "@/components/Table/TableLite.vue";
import {inject, ref} from "vue";
import {usePosStore} from "@/db/pos.js";
import Badge from "@/components/elements/Badge.vue";
import Dropdown from "@/components/elements/Dropdown.vue";
import SearchSelect from "@/components/elements/SearchSelect.vue";
import {sumBy} from "lodash/math.js";

export default {
  name: "AddModifier",
  components:{
    SearchSelect, Dropdown,
    Badge, TableLite, CButton, Modal,
  },
   props:{
    show:{required: true, type: Boolean}
  },
  setup(props, {emit}){
    const {currency, makeTitle} = inject('helpers')
    const posStore = usePosStore()
    /*source: online, in-house, walk-in*/
    const fields = ref([
      {key:'name'},
      {key:'quantity'},
      {key:'price'},
      {key:'description'},
      {key:'attachments'},
      {key:'total'},
    ])
    const records = ref([])

    let recordTemplate = {name:'', quantity:'', price:0,description:'', attachments:'', total:0}

    const addEntry = () => {
      records.value.push({id:records.value.length + 1 ,...recordTemplate})
    }
    const removeEntry = (e, entry) => {
      records.value.splice(records.value.indexOf(entry), 1)
    }
    function getTotals(){
      return sumBy(records.value, (record) => record.price * record.quantity )
    }


    const close = () => {
      emit('close')
  }

  return {
      close, fields, makeTitle, addEntry,
    removeEntry, getTotals,
    records, currency, posStore}
  }
}
</script>

<style scoped>

</style>