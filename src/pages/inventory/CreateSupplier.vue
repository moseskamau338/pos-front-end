<template>
  <Modal :show="show" @close="close">
    <template #title>
      <span class="flex text-xl space-x-1.5 items-center font-bold">
        <i class="fad fa-plus"></i>
        <span>Create Supplier</span>
      </span>
    </template>
    <template #body>
        <p class="mt-4 text-sm">
          Suppliers are people or companies that provide <b>ingredients</b>. <br>One supplier can have multiple items that they supply.
        </p>
      <div class="grid grid-cols-1 lg:grid-cols-12 mt-8 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Name</h3>
        </div>
        <div class="col-span-8">
            <input type="text" class="placeholder-gray-300 dark:placeholder-slate-500 shadow-sm leading-none py-2 focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md dark:border-slate-500 dark:bg-brand-dark" placeholder="Supplier Name">
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 mt-4 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Phone Number</h3>
        </div>
        <div class="col-span-8">
          <input type="text" class="placeholder-gray-300 dark:placeholder-slate-500 shadow-sm leading-none py-2 focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md dark:border-slate-500 dark:bg-brand-dark" placeholder="Phone">
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-12 mt-4 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Email</h3>
        </div>
        <div class="col-span-8">
          <input type="email" class="placeholder-gray-300 dark:placeholder-slate-500 shadow-sm leading-none py-2 focus:ring-highlight focus:border-highlight block w-full sm:text-sm border-gray-300 rounded-md dark:border-slate-500 dark:bg-brand-dark" placeholder="Email address">
        </div>
      </div>


      <div class="grid grid-cols-1 lg:grid-cols-12 mt-4 mx-5">
        <div class="col-span-4">
          <h3 class="text-sm font-bold">Ingredients/Products Supplied</h3>
        </div>
        <div class="col-span-8">
           <!-- component -->
            <div class="max-w-lg">
              <div class="relative">
                <input
                    v-model="newIngredient"
                    @keydown.enter="addSupplier"
                    class="appearance-none placeholder-gray-300 dark:placeholder-slate-500 block w-full bg-white border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-highlight focus:boring-highlight dark:border-slate-500 dark:bg-brand-dark" placeholder="Search ingredients and hit enter">
                <!-- selections -->
                <div v-for="name in ingredients" class="bg-blue-100 dark:bg-sky-600 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden">
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
  name: "CreateSupplier",
  components:{CButton, Modal},
  props:{
    show:{required: true, type: Boolean}
  },
  setup(props, {emit}){
    const ingredients = ref([
      'John'
    ])
    const newIngredient = ref('')
    const removeSupplier = (name) => {
      ingredients.value.splice(ingredients.value.indexOf(name), 1)
    }
    const addSupplier = () => {
      ingredients.value.push(newIngredient.value)
      //clear
      newIngredient.value = ''
    }


  const close = () => {
      emit('close')
  }
    return {emit, close,
      ingredients, newIngredient, addSupplier, removeSupplier
    }
  }
}
</script>

<style scoped>

</style>