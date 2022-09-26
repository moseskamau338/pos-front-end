<template>
  <section>
    <p class="text-sm">
        Creating a product is seamless, first step is to add specific product details
        then add the ingredients required to make it.
        This helps track ingredient stock. Alternatively, use the upload function on the right.
      </p>

    <h2 class="font-bold mt-8 text-lg">Product Details</h2>
    <fieldset class="p-4 mt-4 border dark:border-slate-600 border-slate-200 rounded">
        <div class="flex flex-col lg:flex-row space-x-2.5">
          <div class="rounded flex h-48 w-48 shrink-0 grow-0">
            <img src="https://picsum.photos/id/237/200/200" alt="image" class="rounded shadow-md">
          </div>
          <div class="w-full grid gap-2 grid-cols-1 lg:grid-cols-12 h-fit">
            <div class="col-span-6">
               <label for="name" class="block text-sm font-medium">Name</label>
                <div class="mt-1">
                  <input type="text" name="name" id="name" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="E.g Carrot Cake...">
                </div>
            </div>
            <div class="col-span-6">
               <label for="price" class="block text-sm font-medium">Price</label>
                <div class="mt-1 flex items-center space-x-2">
                  <input type="number" name="price" id="price" class="dark:border-slate-500 dark:bg-brand-dark shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-slate-400" placeholder="0.00">
                  <select class="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md dark:border-slate-500 dark:bg-brand-dark">
                    <option>--Unit--</option>
                    <option>KG</option>
                    <option>Ltr</option>
                    <option>Pcs</option>
                  </select>
                </div>
            </div>
            <div class="col-span-6">
               <label for="name" class="block text-sm font-medium">Description</label>
                <div class="mt-1">
                  <textarea rows="4" name="comment" id="comment" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md dark:border-slate-500 dark:bg-brand-dark"></textarea>
                </div>
            </div>
            <div class="col-span-6">
               <label for="tax" class="block text-sm font-medium">Tax</label>
                <div class="mt-1">
                  <input type="number" name="tax" id="tax" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="0.00">
                </div>
            </div>
          </div>
        </div>

    <!--  variants-->
      <div class="grid grid-cols-1 lg:grid-cols-12 mt-5 border-t pt-5">
        <div class="col-span-4">
          <h3 class="font-bold text-sm">Edit Variations</h3>
          <p class="text-slate-400 text-xs pr-2">
            Variations are meant to convenience price items that have various variations.
          </p>
        </div>
        <div class="col-span-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:border-slate-500 dark:bg-brand-dark-box shadow border rounded p-4">
          <div class="col-span-6">
            <h5 class="text-sm font-medium">Flavours</h5>
            <div class="mt-4 max-h-[60vh] overflow-y-auto">
              <table class="w-full">
                <thead>
                    <th class="text-left text-xs">Name</th>
                    <th class="text-left text-xs">+/- Cost (Ksh)</th>
                    <th>
                     <CButton @click="toggleFlavour" class="py-0.5 text-[10px]">Add</CButton>
                    </th>
                </thead>
                <tbody>
                  <tr :key="flav" v-for="(flav, index) in flavours">
                    <td class="mr-2">
                        <input v-model="flav.name" type="text" name="name" id="name" class="shadow-sm leading-none focus:ring-sky-500 focus:border-sky-500 block w-full py-1.5 sm:text-sm border-gray-300 rounded-md placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="E.g 5KG..">
                    </td>
                    <td>
                        <input v-model="flav.cost" type="number" name="name" id="name" class="shadow-sm leading-none focus:ring-sky-500 focus:border-sky-500 block w-full py-1.5 sm:text-sm border-gray-300 rounded-md placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="E.g 200">
                    </td>
                    <td class="px-3">
                      <button @click="toggleFlavour($event, flav)" v-if="flavours.length > 1" class="hover:shadow focus:ring-1 focus:ring-red-300 flex items-center justify-center h-5 w-5 rounded-full bg-red-100">
                        <i class="fas fa-trash text-xs text-red-500"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-span-6">
            <h5 class="text-sm font-medium">Weights</h5>
            <div class="mt-4 max-h-[60vh] overflow-y-auto">
              <table class="w-full">
                <thead>
                    <th class="text-left text-xs">Tag</th>
                    <th class="text-left text-xs">+/- Cost (Ksh)</th>
                    <th><CButton @click="toggleWeight" class="py-0.5 text-[10px]">Add</CButton></th>
                </thead>
                <tbody>
                  <tr :key="weight" v-for="(weight, index) in weights">
                    <td class="mr-2">
                        <input v-model="weight.tag" type="text" name="name" id="name" class="shadow-sm leading-none focus:ring-sky-500 focus:border-sky-500 block w-full py-1.5 sm:text-sm border-gray-300 rounded-md placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="E.g 5KG..">
                    </td>
                    <td>
                        <input v-model="weight.cost" type="number" name="name" id="name" class="shadow-sm leading-none focus:ring-sky-500 focus:border-sky-500 block w-full py-1.5 sm:text-sm border-gray-300 rounded-md placeholder-slate-400 dark:border-slate-500 dark:bg-brand-dark" placeholder="E.g 200">
                    </td>
                    <td class="px-3">
                      <button @click="toggleWeight($event, weight)" v-if="weights.length > 1" class="hover:shadow focus:ring-1 focus:ring-red-300 flex items-center justify-center h-5 w-5 rounded-full bg-red-100">
                        <i class="fas fa-trash text-xs text-red-500"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </fieldset>

    <!--recipe section-->
    <div class="mt-8">
      <h2 class="font-bold text-lg">How do you cook it?</h2>
      <p class="text-slate-400 text-sm">Add ingredients below to track ingredient stock while creating products.</p>
    </div>

    <!--table-->
    <div class="mt-5 rounded-md mb-10">
      <TableLite actioned :headers="headers" :records="ingredients">
        <template :key="cell" v-for="cell in headers" #[cell.key]="{record}">
            <input type="text" v-model="record[cell.key]" class="shadow-sm leading-none py-1.5 focus:ring-green-500 focus:border-green-500 block sm:text-xs border-gray-300 rounded dark:border-slate-500 dark:bg-brand-dark" :placeholder="`${makeTitle(cell.key, '_')}...`" />
        </template>
        <template #action_header>
          <CButton @click="toggleIngredient" class="py-0.5 text-[10px]">Add</CButton>
        </template>
        <template #row_actions="{record}">
          <button @click="toggleIngredient($event, record)" v-if="ingredients.length > 1" class="hover:shadow focus:ring-1 focus:ring-red-300 flex items-center justify-center h-5 w-5 rounded-full bg-red-100">
            <i class="fas fa-trash text-xs text-red-500"></i>
          </button>
        </template>
      </TableLite>
    </div>
    <div class="mb-32 flex justify-end space-x-8">
      <CButton variant="success">Save</CButton>
      <CButton variant="secondary">Cancel</CButton>
    </div>

  </section>
</template>

<script>
import {inject, ref} from "vue";
import CButton from "@/components/elements/CButton.vue";
import TableLite from "@/components/Table/TableLite.vue";

export default {
  name: "CreateProduct",
  components:{TableLite, CButton},
  setup(props, {emit}){
    const {makeTitle} = inject('helpers')
    const headers = ref([
          {key:'ingredient'},
          {key:'current_stock'},
          {key:'count'},
          {key:'tax'},
          {key:'totals'},
      ])
  const flavours = ref([{name:'', cost:''}])
    const toggleFlavour = (e, flav = null) => {
      if (flav){
        //exists, remove
        flavours.value.splice(flavours.value.indexOf(flav), 1)
      }else{
        //add
        flavours.value.push({name:'', cost:''})
      }
    }
  const weights = ref([{tag:'', cost:''}])
    const toggleWeight = (e,weight = null) => {
      if (weight){
        //exists, remove
        weights.value.splice(weights.value.indexOf(weight), 1)
      }else{
        //add
        weights.value.push({tag:'', cost:''})
      }
    }
  const ingredients = ref([
    {ingredient:'Something', current_stock: '', count:'',tax :'', totals:''},
  ])
    const toggleIngredient = (e,ing = null) => {
      if (ing){
        //exists, remove
        ingredients.value.splice(ingredients.value.indexOf(ing), 1)
      }else{
        //add
        ingredients.value.push({ingredient:'Something', current_stock: '', count:'',tax :'', totals:''},)
      }
    }


  const close = () => {
      emit('close')
  }
    return {emit,
      flavours, weights, ingredients,
      toggleIngredient, headers, makeTitle,
      toggleFlavour, toggleWeight,
      close}
  }
}
</script>

<style scoped>

</style>