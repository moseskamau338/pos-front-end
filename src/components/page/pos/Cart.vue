<template>
<div class="bg-white dark:bg-brand-dark-box dark:border-slate-700 shadow mt-4 rounded border border-slate-50">
        <ul class="divide-y min-h-[350px] max-h-[350px] overflow-y-scroll scroll-smooth" v-if="selectedProducts.length > 0">
          <li :key="item" v-for="item in selectedProducts" class="relative cursor-pointer hover:bg-slate-100 hover:dark:bg-slate-900 dark:text-white px-3 py-2">
            <div class="flex justify-between p-2 relative" @click="poStore.toggleExpand($event, item.id)">
              <div class="flex space-x-2">
                <Avatar size="small" variant="info" :text="item.name" />
                <div>
                  <h3 class="text-xs text-slate-600 dark:text-slate-300 font-bold">
                    {{ item.name }}
                  </h3>
                  <p class="text-xs text-gray-400">{{ item.description }}</p>
                </div>
              </div>
              <span class="text-sm font-bold text-gray-500 dark:text-sky-200">
                <small class="text-slate-400">{{ poStore.currency }}</small>
                {{ currency( ((item.quantity || 0) * (item.price || 0)) - (item.discount || 0)   ) }}
              </span>
            </div>


            <div v-if="poStore.isExpanded(item.id)">
              <div class="grid grid-cols-2 gap-4 lg:grid-cols-12">
                <div class="col-span-4">
                  <label class="text-[10px] font-bold text-slate-400">Quantity</label>
                  <input v-model.number="item['quantity']" type="number" class="mt-1 block w-full border border-gray-300 rounded shadow-sm py-1 px-3 focus:outline-none focus:ring-highlight focus:border-indigo-500 dark:bg-brand-dark dark:border-gray-500 text-xs">
                </div>
                <div class="col-span-4">
                  <label class="text-[10px] font-bold text-slate-400">Price</label>
                  <input v-model.number="item['price']" type="number" class="mt-1 block w-full border border-gray-300 rounded shadow-sm py-1 px-3 focus:outline-none focus:ring-highlight focus:border-indigo-500 text-xs dark:bg-brand-dark dark:border-gray-500">
                </div>
                <div class="col-span-4">
                  <label class="text-[10px] font-bold text-slate-400">Discount</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input v-model.number="item['discount']" type="number" class="appearance-none focus:border-highlight focus:border-highlight block w-full py-1 pl-3 pr-12 sm:text-xs border-gray-300 rounded dark:bg-brand-dark dark:border-gray-500" placeholder="0.00" aria-describedby="price-currency">
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span class="text-gray-400 sm:text-xs"> {{ Math.floor((item['discount']/ (item['price'] * item['quantity']))*100) || 0 }}% </span>
                    </div>
                  </div>
                </div>

                <div class="col-span-6">
                  <label class="text-[10px] font-bold text-slate-400">Note</label>
                    <textarea v-model="item['note']" rows="2" class="focus:ring-highlight focus:border-highlight block w-full sm:text-xs border-gray-300 rounded dark:bg-brand-dark dark:border-gray-500"></textarea>
                </div>
                <div class="col-span-4">
                  <label class="text-[10px] font-bold text-slate-400">Tax</label>
                  <input v-model.number="item['tax']" type="number" class="mt-1 block w-full border border-gray-300 rounded shadow-sm py-1 px-3 focus:outline-none focus:ring-highlight focus:border-indigo-500 text-xs dark:bg-brand-dark dark:border-gray-500">
                </div>


              </div>
              <div class="flex justify-end mt-3 space-x-2">
                <button  @click="poStore.showModifier = !poStore.showModifier" class="font-semibold text-highlight hover:underline text-[10px]">Modifiers(0)</button>

                <button  @click="poStore.showModifier = !poStore.showModifier" class="font-semibold text-highlight hover:underline text-[10px]">Addons(0)</button>
              </div>
            </div>
          </li>
        </ul>
      <Empty v-else title="Cart is Empty" description="Select items in the products section to populate this section" />

      <div class="mt-4 border-t py-4 px-3">
        <table class="w-full">
          <tbody>
          <tr>
            <td class="text-sm">Subtotal</td>
            <td>
              <div class="text-right text-sm">{{ currency(poStore.cartTotals().subtotal) }}</div>
            </td>
          </tr>
          <tr>
            <td class="text-sm">Tax</td>
            <td>
              <div class="text-right text-sm">{{ currency(poStore.cartTotals().tax) }}</div>
            </td>
          </tr>
          <tr>
            <td class="text-sm">Discount</td>
            <td>
              <div class="text-right text-sm">{{currency(poStore.cartTotals().discount)}}</div>
            </td>
          </tr>

          <tr>
            <td class="text-lg py-4 font-bold text-highlight">Total</td>
            <td>
              <div class="text-right text-lg font-bold text-highlight py-4">{{ poStore.currency }} {{ currency(poStore.cartTotals().total) }}</div>
            </td>
          </tr>

          </tbody>
        </table>

        <CButton class="w-full text-lg mt-5 flex justify-between">
          <span>Checkout</span>
          <span>{{ poStore.currency }} {{ currency(poStore.cartTotals().total) }}</span>
        </CButton>
      </div>
    </div>
  <AddModifier @click="poStore.showModifier = false" :show="poStore.showModifier" />
</template>

<script>
import CButton from "@/components/elements/CButton.vue";
import Avatar from "@/components/elements/Avatar.vue";
import {inject} from "vue";
import AddModifier from "@/components/page/pos/AddModifier.vue";
import {usePosStore} from "@/db/pos.js";
import Empty from "@/components/app/Empty.vue";
import {storeToRefs} from "pinia";
export default {
  name: "Cart",
  components: {Empty, AddModifier, CButton, Avatar},
  setup(){
    const poStore = usePosStore()
     const {currency} = inject('helpers')

    const {selectedProducts} = storeToRefs(poStore)

    return {currency, poStore, selectedProducts}
  }
}
</script>

<style scoped>

</style>