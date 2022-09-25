<template>
  <Modal :show="show" @close="close">
    <template #title>
      <span class="flex text-xl space-x-1.5 items-center font-bold">
        <i class="fad fa-plus"></i>
        <span>Create Ingredient</span>
      </span>
    </template>
    <template #body>
        <p class="mt-4 text-sm">
          Provide the required details below to create a new ingredient record. <br>If you are doing
          multiple entries at once, consider <span class="underline text-green-600">uploading an excel sheet</span>.
        </p>
      <div class="grid grid-cols-1 lg:grid-cols-12 mt-8 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Name</h3>
        </div>
        <div class="col-span-8">
            <input type="text" class="placeholder-gray-300 shadow-sm leading-none py-2 focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Ingredient Name">
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 mt-4 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Description</h3>
        </div>
        <div class="col-span-8">
              <textarea rows="4" name="comment" id="comment" class="shadow-sm focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300" placeholder="What's this for?"></textarea>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 mt-4 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Stock Details</h3>
        </div>
        <div class="col-span-8 grid grid-cols-2 lg:grid-cols-6 gap-2">
             <div class="sm:col-span-2">
                <label class="block text-xs font-medium"> Current Stock </label>
                <div class="mt-1">
                  <input type="number" class="shadow-sm focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:col-span-2">
                <label class="block text-xs font-medium"> Alert Stock Level </label>
                <div class="mt-1">
                  <input type="number" min="0" class="shadow-sm focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md">
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="postal-code" class="block text-xs font-medium"> Unit </label>
                <div class="mt-1">
                  <select id="location" name="location" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-highlight focus:border-highlight sm:text-sm rounded-md">
                    <option>Kilograms</option>
                    <option selected>Liters</option>
                    <option>Pieces</option>
                  </select>
                </div>
              </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 mt-4 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Suppliers</h3>
        </div>
        <div class="col-span-8">
           <!-- component -->
            <div class="max-w-lg">
              <div class="relative">
                <input
                    v-model="newSupplier"
                    @keydown.enter="addSupplier"
                    class="appearance-none placeholder-gray-300 block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-highlight focus:boring-highlight" placeholder="Search suppliers and hit enter">
                <!-- selections -->
                <div v-for="name in suppliers" class="bg-blue-100 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden">
                  <span class="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1">{{ name }}</span>
                  <button @click="removeSupplier(name)" class="w-6 h-8 inline-block align-middle text-gray-500 bg-blue-200 focus:outline-none">
                    <svg class="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                  </button>
                </div>
              </div>
            </div>
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
import Modal from "@/components/elements/Modal.vue";
import {ref} from "vue";
import CButton from "@/components/elements/CButton.vue";

export default {
  name: "CreateIngredient",
  components:{CButton, Modal},
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