<template>
  <section>
    <p class="text-sm">
        Creating a product is seamless, first step is to add specific product details
        then add the ingredients required to make it.
        This helps track ingredient stock. Alternatively, use the upload function on the right.
      </p>

    <fieldset class="p-4 mt-4 border dark:border-slate-600 border-slate-200 rounded">
        <div class="flex space-x-2.5">
          <img src="https://picsum.photos/id/237/200/200" alt="image" class="rounded shadow-md">
          <div class="w-full grid gap-2 grid-cols-1 lg:grid-cols-12 h-fit">
            <div class="col-span-6">
               <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                  <input type="text" name="name" id="name" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-slate-400" placeholder="E.g Carrot Cake...">
                </div>
            </div>
            <div class="col-span-6">
               <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <div class="mt-1 flex items-center space-x-2">
                  <input type="number" name="price" id="price" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-slate-400" placeholder="0.00">
                  <select class="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md">
                    <option>--Unit--</option>
                    <option>KG</option>
                    <option>Ltr</option>
                    <option>Pcs</option>
                  </select>
                </div>
            </div>
            <div class="col-span-6">
               <label for="name" class="block text-sm font-medium text-gray-700">Description</label>
                <div class="mt-1">
                  <textarea rows="4" name="comment" id="comment" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>
            </div>
            <div class="col-span-6">
               <label for="tax" class="block text-sm font-medium text-gray-700">Tax</label>
                <div class="mt-1">
                  <input type="number" name="tax" id="tax" class="shadow-sm focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-slate-400" placeholder="0.00">
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
        <div class="col-span-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white shadow border rounded p-4">
          <div class="col-span-6">
            <h5 class="text-sm font-medium">Flavours</h5>
            <div class="mt-4">
              <table class="w-full">
                <thead>
                    <th class="text-left text-xs">Name</th>
                    <th class="text-left text-xs">+/- Cost (Ksh)</th>
                    <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td class="mr-2">
                        <input type="text" name="name" id="name" class="shadow-sm leading-none focus:ring-sky-500 focus:border-sky-500 block w-full py-1.5 sm:text-sm border-gray-300 rounded-md placeholder-slate-400" placeholder="E.g 5KG..">
                    </td>
                    <td>
                        <input type="text" name="name" id="name" class="shadow-sm leading-none focus:ring-sky-500 focus:border-sky-500 block w-full py-1.5 sm:text-sm border-gray-300 rounded-md placeholder-slate-400" placeholder="E.g 200">
                    </td>
                    <td class="px-3">
                      <button class="hover:shadow focus:ring-1 focus:ring-highlight flex items-center justify-center h-5 w-5 rounded-full bg-slate-300">
                        <i class="fas fa-plus text-slate-500"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-span-6">
            <h5 class="text-sm font-medium">Weights</h5>
            <div class="mt-4">
              <table class="w-full">
                <thead>
                    <th class="text-left text-xs">Tag</th>
                    <th class="text-left text-xs">+/- Cost (Ksh)</th>
                    <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td class="mr-2">
                        <input type="text" name="name" id="name" class="shadow-sm leading-none focus:ring-sky-500 focus:border-sky-500 block w-full py-1.5 sm:text-sm border-gray-300 rounded-md placeholder-slate-400" placeholder="E.g 5KG..">
                    </td>
                    <td>
                        <input type="text" name="name" id="name" class="shadow-sm leading-none focus:ring-sky-500 focus:border-sky-500 block w-full py-1.5 sm:text-sm border-gray-300 rounded-md placeholder-slate-400" placeholder="E.g 200">
                    </td>
                    <td class="px-3">
                      <button class="hover:shadow focus:ring-1 focus:ring-highlight flex items-center justify-center h-5 w-5 rounded-full bg-slate-300">
                        <i class="fas fa-plus text-slate-500"></i>
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

      input
    </div>

    <div>

    </div>
  </section>
</template>

<script>
import {ref} from "vue";
import CButton from "@/components/elements/CButton.vue";

export default {
  name: "CreateProduct",
  components:{CButton},
  props:{
    show:{required: true, type: Boolean}
  },
  setup(props, {emit}){
    const suppliers = ref([
      'John'
    ])
    const newSupplier = ref('')
    const removeSupplier = (name) => {
      suppliers.value.splice(suppliers.value.indexOf(name), 1)
    }
    const addSupplier = () => {
      suppliers.value.push(newSupplier.value)
      //clear
      newSupplier.value = ''
    }


  const close = () => {
      emit('close')
  }
    return {emit, close,
      suppliers, newSupplier, addSupplier, removeSupplier
    }
  }
}
</script>

<style scoped>

</style>