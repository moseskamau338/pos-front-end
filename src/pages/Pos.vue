<template>
<section class="grid grid-cols-12 gap-7 mx-5 h-[90vh]">
  <div class="col-span-8">
    <header class="flex items-center justify-between">
      <h4 class="text-sm font-bold">Categories</h4>
      <div class="flex items-center space-x-2">
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-chevron-right"></i>
      </div>
    </header>

  <!--  categories-->
  <div class="flex items-center overflow-x-auto mt-2 border-r border-l scroll-smooth scrollbar-hide">
    <div v-for="i in 20" class="bg-white mr-2 flex items-center p-4 shadow shrink-0 grow-0">category {{ i }}</div>
  </div>
    <section class="max-h-[70vh] overflow-y-auto mt-5">
      <!--items-->
      <div class="mt-5 grid gap-4 grid-cols-6 lg:grid-cols-12">
        <button v-for="i in 60" class="col-span-3 w-fit h-fit bg-white shadow rounded hover:ring text-left focus:ring-highlight">
          <div class="aspect-auto p-2">
            <img :src="`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1200/700/`" alt="image" class="rounded shadow w-40 object-cover">
          </div>
          <div class="p-2">
            <h6 class="text-xs font-bold">Black Forest Cake</h6>
            <small class="text-gray-400 text-xs">Description here </small>
          </div>
          <div class="flex justify-end px-2">
            <span class="text-highlight">35.00 $</span>
          </div>
        </button>
      </div>
    </section>
  </div>
  <div class="col-span-4">
    <header class="flex items-center justify-between">
      <h4 class="text-sm font-bold">Draft</h4>
      <div class="flex items-center space-x-2">
        <button class="hover:bg-slate-200 transition-all duration-200 flex justify-center items-center h-5 w-5 rounded-full group">
          <i class="fas fa-plus text-xs transition-all duration-200 group-hover:text-highlight"></i>
        </button>
        <button class="hover:bg-red-100 transition-all duration-200 flex justify-center items-center h-5 w-5 rounded-full group">
          <i class="fas fa-trash text-xs transition-all duration-200 group-hover:text-red-500"></i>
        </button>
      </div>
    </header>

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
                <h3 class="text-xs text-slate-600 font-bold">
                  {{ item.name }}
                  <button class="transition-all invisible group-hover:visible"><i class="fas fa-edit"></i></button>
                </h3>
                <p class="text-xs text-gray-400">{{ item.description }}</p>
              </div>
            </div>
            <span class="text-sm font-bold text-gray-500">{{ item.currency }} {{ currency(item.amount) }}</span>
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
  </div>
</section>
</template>

<script>
import Avatar from "@/components/elements/Avatar.vue";
import {inject} from "vue";
import CButton from "@/components/elements/CButton.vue";
export default {
  name: "Pos",
  components: {CButton, Avatar},
  setup(){
    const {currency} = inject('helpers')

    return {currency}
  }
}
</script>

<style scoped>

</style>