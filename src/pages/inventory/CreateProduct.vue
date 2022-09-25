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
            <div v-for="i in 6" class="col-span-4 relative border border-gray-300 rounded-md mb-5 px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                <label for="name" class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900">Name</label>
                <input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Doe">
              </div>
          </div>
        </div>
    </fieldset>
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