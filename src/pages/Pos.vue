<template>
<section class="grid grid-cols-12 gap-7 mx-5 h-[100vh]">
  <div class="col-span-8">
     <Filters />

    <section class="min-h-[60vh] max-h-[80vh] overflow-y-auto mt-5">
      <!--items-->
      <Items />
    </section>
  </div>
  <div class="col-span-4">
    <header class="flex items-center justify-between">
      <SearchSelect />
      <div class="flex items-center space-x-5">
        <button :disabled="posStore.selectedProducts.length <= 0" @click="confirmClearCart" class="hover:bg-red-100 transition-all duration-200 flex justify-center items-center h-5 w-5 rounded-full group">
          <i class="fas fa-trash text-xs transition-all duration-200 group-hover:text-red-500"></i>
        </button>

      <!--  button-->
         <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="transition-all flex items-center justify-center h-5 w-5 rounded-full dark:bg-slate-600 bg-slate-200 hover:bg-slate-300 hover:text-highlight hover:dark:text-sky-300 focus:ring">
                <i class="fas fa-square-list text-xs"></i>
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-brand-dark dark:border dark:border-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }" v-for="item in [
                      {name:'Order Processing List', action: () => showOrders = true },
                      {name:'Hold Order', action: () => showOrders = true },
                      {name:'Retrieve Order', disabled:true, action: () => showOrders = true },
                  ]">
                    <button
                        :disabled="item.disabled"
                        @click="item.action?.()"
                      :class="[
                        active ? 'bg-highlight-light/50  dark:bg-highlight' : '',
                        item.disabled ? 'pointer-events-none opacity-60' : '',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      {{ item.name }}
                    </button>
                  </MenuItem>

                </div>
              </MenuItems>
            </transition>
          </Menu>
      </div>
    </header>

    <Cart />
  </div>
</section>
<!-- modals-->
<Orders :show="showOrders" @close="showOrders = false" />
<Confirmation
    @cancel="confirmation.open = false"
    @ok="action"
    :open="confirmation.open"
    :description="confirmation.description"
    :title="confirmation.title"
    :type="confirmation.type" />

</template>

<script>
import CButton from "@/components/elements/CButton.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import {useConfirmation} from "@/library/Composables/Confirmation";
import Filters from "@/components/page/pos/Filters.vue";
import Items from "@/components/page/pos/Items.vue";
import Cart from "@/components/page/pos/Cart.vue";
import {ref} from "vue";
import Orders from "@/components/page/pos/Orders.vue";
import SearchSelect from "@/components/elements/SearchSelect.vue";
import {usePosStore} from "@/db/pos.js";
import Confirmation from "@/components/elements/Confirmation.vue";

export default {
  name: "Pos",
  components: {
    Confirmation,
    SearchSelect,
    Orders,
    Cart,
    Items,
    Filters,
    Menu, MenuButton, MenuItems,
    MenuItem, CButton
  },
  setup() {
    const posStore = usePosStore()
    const action = ref(null)
    const showOrders = ref(false)
    const {confirmation, confirm, reset} = useConfirmation()

      const confirmClearCart = () => {
        action.value = () => { reset(); posStore.selectedProducts = [] }
        //confrim
        confirmation.value.type = 'danger'
        confirmation.value.title = 'Clear Order Items?'
        confirmation.value.description = 'This action will clear everything selected in the cart. Are you sure you want to do this?'
        confirm()
      }

    return {showOrders, posStore, action, confirmation, confirmClearCart}
  }
}
</script>

<style scoped>

</style>