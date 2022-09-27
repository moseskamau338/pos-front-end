<template>
<div class="bg-white dark:bg-brand-dark-box dark:border-slate-700 shadow px-3 py-2 mt-4 rounded border border-slate-50">
      <ul class="space-y-4">
        <li :key="item" v-for="item in [
            {name: 'Zucchini Cake', description:'lorem ipsum dolor sit.', currency:'$', amount:'12', count:2},
            {name: 'Zucchini Cake', description:'lorem ipsum dolor sit.', currency:'$', amount:'12', count:2},
            {name: 'Zucchini Cake', description:'lorem ipsum dolor sit.', currency:'$', amount:'12', count:2},
            {name: 'Zucchini Cake', description:'lorem ipsum dolor sit.', currency:'$', amount:'12', count:2},
            {name: 'Zucchini Cake', description:'lorem ipsum dolor sit.', currency:'$', amount:'12', count:2},
        ]" class="group">
          <div class="flex justify-between">
            <div class="flex space-x-2">
              <Avatar size="small" :text="item.name" />
              <div>
                <h3 class="text-xs text-slate-600 dark:text-slate-300 font-bold">
                  {{ item.name }}
                  <button class="transition-all invisible group-hover:visible"><i class="fas fa-edit"></i></button>
                </h3>
                <p class="text-xs text-gray-400">{{ item.description }}</p>
              </div>
            </div>
            <span class="text-sm font-bold text-gray-500 dark:text-sky-200">{{ item.currency }} {{ currency(item.amount) }}</span>
          </div>
        </li>
      </ul>

      <div class="mt-4 border-t pt-4">
        <table class="w-full">
          <tbody>
          <tr>
            <td class="text-sm">Subtotal</td>
            <td>
              <div class="text-right text-sm">30.00</div>
            </td>
          </tr>
          <tr>
            <td class="text-sm">Tax</td>
            <td>
              <div class="text-right text-sm">0.00</div>
            </td>
          </tr>
          <tr>
            <td class="text-sm">Discount</td>
            <td>
              <div class="text-right text-sm">0.00</div>
            </td>
          </tr>

          <tr>
            <td class="text-lg py-4 font-bold text-highlight">Total</td>
            <td>
              <div class="text-right text-lg font-bold text-highlight py-4">Ksh 3223442210.00</div>
            </td>
          </tr>

          </tbody>
        </table>

        <CButton class="w-full text-lg mt-5 flex justify-between">
          <span>Checkout</span>
          <span>$60.00</span>
        </CButton>
      </div>
    </div>
</template>

<script>
import CButton from "@/components/elements/CButton.vue";
import Avatar from "@/components/elements/Avatar.vue";
import {inject} from "vue";
export default {
  name: "Cart",
  components: {CButton, Avatar},
  setup(){
     const {currency} = inject('helpers')

    return {currency}
  }
}
</script>

<style scoped>

</style>