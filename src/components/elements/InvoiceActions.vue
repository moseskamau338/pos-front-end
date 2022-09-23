<template>
<div class="col-span-2 rounded-md bg-gray-100 border border-2 border-gray-400 dark:bg-brand-dark dark:border-gray-500 border-dashed p-2">
    <header class="flex flex-col space-y-3 md:flex-row md:space-y-reverse justify-between items-center">
      <div class="space-x-2">
        <Badge status="USER" />
        <span class="text-brand-green text-sm">Invoice Reconciled</span>
      </div>
    <dropdown name="Actions" :options="[
        {key:'raise_cn',name:'Raise Credit Note', },
        {key:'raise_dn',name:'Raise Debit Note'},
    ]">
      <template #raise_cn>
        <button @click="showCreateCn = !showCreateCn" class="group flex w-full items-center rounded-sm px-2 py-2 text-sm hover:bg-gray-200 dark:bg-gray-700">
          Raise Credit Note
        </button>
      </template>
    </dropdown>
    </header>
    <div id="inv_details" class="mt-6">
      <h2 class="underline">Counterparty address</h2>
      <div class="flex space-x-12 mt-2 px-4">
        <dl>
          <dt><small class="font-bold">Issued to:</small></dt>
          <dd>{{ invoice.results.customer_name }}</dd>
          <!-- @TODO: Add contact details as soon as we get them from the backend -->
          <!-- <dt><small class="text-gray-500">Capital J Hill,</small></dt>
          <dt><small class="text-gray-500">Nairobi, Kenya</small></dt> -->
        </dl>
      </div>
    </div>

    <!--timeline-->
    <div class="mt-3">
      <h2 class="font-bold">History</h2>
      <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
        <span class="absolute -mx-7 h-6 w-6 flex items-center justify-center bg-green-300 text-green-600 p-2 rounded-full border-2 border-gray-100 dark:border-brand-night-box">
          <i class="fa-solid fa-check text-xs"></i>
        </span>
        <header class="flex justify-between">
          <h2 class="text-sm font-bold">Invoice Fully Reconciled</h2>
          <small class="uppercase tracking-wide text-[8px] font-semibold">Date: 11th April 2022</small>
        </header>
        <p class="prose text-sm text-gray-500 dark:text-gray-300">
          Initial batch pull of invoice.
        </p>
      </div>
      <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
        <span class="absolute -mx-7 h-6 w-6 flex items-center justify-center bg-blue-300 text-blue-600 p-2 rounded-full border-2 border-gray-100 dark:border-brand-night-box">
          <i class="fa-solid fa-piggy-bank text-xs"></i>
        </span>
        <header class="flex justify-between">
          <h2 class="text-sm font-bold">More payments added to invoice</h2>
          <small class="uppercase tracking-wide text-[8px] font-semibold">Date: 11th April 2022</small>
        </header>
        <p class="prose text-sm text-gray-500 dark:text-gray-300">
          Bank CRN was used to pay for invoice
        </p>
      </div>
       <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
        <span class="absolute -mx-7 h-6 w-6 flex items-center justify-center bg-blue-300 text-blue-600 p-2 rounded-full border-2 border-gray-100 dark:border-brand-night-box">
          <i class="fa-solid fa-piggy-bank text-xs"></i>
        </span>
        <header class="flex justify-between">
          <h2 class="text-sm font-bold">Found matching bank records</h2>
          <small class="uppercase tracking-wide text-[8px] font-semibold">Date: 11th April 2022</small>
        </header>
        <p class="prose text-sm text-gray-500 dark:text-gray-300">
          Invoice partially matched (#45678908989)
        </p>
      </div>

      <div class="border-l border-gray-300 border-dashed pl-4 mx-4 pb-4">
        <span class="absolute -mx-7 h-6 w-6 flex items-center justify-center bg-brand-green text-green-800 p-2 rounded-full border-2 border-gray-100 dark:border-brand-night-box">
          <i class="fa-solid fa-file-invoice text-xs"></i>
        </span>
        <header class="flex justify-between">
          <h2 class="text-sm font-bold">Invoice Uptake from SAP Business One</h2>
          <small class="uppercase tracking-wide text-[8px] font-semibold">Date: 23rd March 2022</small>
        </header>
        <p class="prose text-sm text-gray-500 dark:text-gray-300">
          Invoice Uptake from SAP Business One
        </p>
      </div>
    </div>

    <div class="flex justify-end mt-8">
      <c-button variant="danger">Raise Dispute</c-button>
    </div>
  </div>

  <!--modals-->
  <ViewNote @close="showCreateCn = !showCreateCn" creating :open="showCreateCn" :invoice="invoice" />
</template>

<script>
import {ref} from 'vue'
import Badge from "@/components/elements/Badge.vue";
import CButton from "@/components/elements/CButton.vue";
import Dropdown from "@/components/elements/Dropdown.vue";
import ViewNote from "@/components/page/Adjustments/ViewNote.vue";

export default {
  name: "InvoiceActions",
  components: {ViewNote, CButton, Dropdown, Badge},
  props: {
    invoice: {type: Object, default: null},
  },
  setup(){
    const showCreateCn = ref(false)

    const selected = ref({selection: [{}]}) // switch to check for single and multiple

    return {showCreateCn, selected}
  }
}
</script>

<style scoped>

</style>