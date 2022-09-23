<template>
<div class="mt-5">
    <slot name="header">
      <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold">
          <slot name="title"></slot>
        </h1>
        <p class="mt-2 text-sm">
          <slot name="description"></slot>
        </p>
      </div>
    </div>
    </slot>
    <div v-if="items.length > 0" class="-mx-4 mt-8 flex flex-col flex-shrink-0 sm:-mx-6 md:mx-0 overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th v-for="field in headers" scope="col" class="text-slate-500 py-3.5 pl-4 pr-3 text-left text-xs font-semibold sm:pl-6 md:pl-0">
              {{ makeTitle(field.key, '_').toUpperCase() }}
            </th>
            <!--<th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 md:pl-0">Description</th>-->
            <!--<th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 md:pl-0">Tax</th>-->
            <!--<th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-semibold sm:table-cell">QTY</th>-->
            <!--<th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-semibold sm:table-cell">Price/Unit</th>-->
            <!--<th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold sm:pr-6 md:pr-0">Price</th>-->
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(record, index) in items" class="border-b border-gray-200">
            <td class="py-2 pl-4 pr-3 text-sm sm:pl-6 md:pl-0" :key="ind" v-for="(field, ind) in headers">
              <slot :name="field.key" v-bind:record="record">
                 <span class="text-[11px] text-slate-400-">{{record[field.key]}}</span>
              </slot>
            </td>
          </tr>
        </tbody>
        <tfoot v-if="Object.keys(summary).length > 0">
          <tr :key="key" v-for="key in Object.keys(summary)">
            <th scope="row" :colspan="headers.length" class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 dark:text-gray-300 sm:table-cell md:pl-0">
              <span :class="(key.toLowerCase() === 'total') ? 'font-bold':''">
                {{makeTitle(key, '_')}}
              </span>
            </th>
            <th scope="row" class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 dark:text-gray-300 sm:hidden">{{makeTitle(key, '_')}}</th>
            <td class="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 dark:text-gray-400 sm:pr-6 md:pr-0">
              <span :class="(key.toLowerCase() === 'total') ? 'font-bold':''">
                {{ currency(summary[key]) }}
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div v-else class="flex border rounded-sm justify-center">
       <Empty />
     </div>
  </div>
</template>

<script>
import { ref, toRaw, inject } from 'vue';
import Empty from "@/components/elements/Empty.vue";

export default {
  name: "LineItems",
  components:{Empty},
  props:{
    items:{default: [], type: Array},
    summary: {default:
        {
          subtotal:0,
          tax:0,
          total:0
        }
      ,type: Object},
    subTotal: {default:0, type: Number},
    totalAmount: {default:0, type: Number},
    totalTax: {default:0, type: Number},
  },

  setup(props){
    const {makeTitle, currency} = inject('helpers')
    const lItems = ref([]);
    const headers = ref([]);

    //make headers from record object:
    if (props.items.length > 0){
      let newHeaders = []
      Object.keys(props.items[0]).forEach((key) => {
        newHeaders.push({key})
      })
      headers.value = newHeaders
    }



    const rawItems = toRaw(props.items);
    lItems.value = rawItems.map(rawItem => ({
      id: rawItem.id,
      tax: rawItem.rate,
      unit: rawItem.price,
      amount: rawItem.price,
      qty: rawItem.hours,
      description: rawItem.name
    }));

    return {
      lItems, headers, makeTitle, currency
    }
  }
}
</script>

<style scoped>

</style>