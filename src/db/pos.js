/*
* This store manages all user preferences for the UI
* */
import {defineStore, skipHydrate} from "pinia";
import {find} from "lodash/collection.js";
import {clone} from "lodash";
import {ref} from "vue";

export const usePosStore = defineStore('posStore', () => {

    //booleans
    const showModifier = ref(false),
    currency = 'KES',
    products = ref([
          {
              id:1,
              image:`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1200/700/`,
              name:'Black Forest',
              description:'',
              price:90, discount:0, tax:0, quantity:0
          },
          {id:2,image:`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1200/700/`,name:'Fruit Cake',
              description:'', price:200, discount:0, tax:0, quantity:0},
          {id:3,image:`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1200/700/`,name:'Coconut Cake', description:'', price:809.9, discount:0, tax:0, quantity:0},
          {id:4,image:`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1200/700/`,name:'Zucchini Cake', description:'', price:12.5, discount:0, tax:0, quantity:0},
          {id:5,image:`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1200/700/`,name:'Muffles', description:'', price:78.8, discount:0, tax:0, quantity:0},
          {id:6,image:`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1200/700/`,name:'Sweet Cake', description:'', price:467.9, discount:0, tax:0, quantity:0},
          {id:7,image:`https://picsum.photos/id/${Math.floor(Math.random()*1000)}/1200/700/`,name:'Dunkies', description:'', price:342.99, discount:0, tax:0, quantity:0},
        ]),
    selectedProducts = ref([]),
    expandedItems = ref([])


      function toggleSelect(e, item) {
          let prod = find(selectedProducts.value, (prod) => prod.id === item.id)
          if (prod){
            selectedProducts.value.splice(selectedProducts.value.indexOf(prod), 1)
          }else{
              let newItem = clone(item)
            newItem.quantity = 1
            selectedProducts.value.push(newItem)
          }
      }
      function isSelected(id) {
          return !!find(selectedProducts.value, (prod) => prod.id === id)
      }
      function toggleExpand(e, id) {
          if (expandedItems.value.includes(id)){
            //remove
            expandedItems.value.splice(expandedItems.value.indexOf(id), 1)
          }else{
            expandedItems.value.push(id)
          }
        }
        function isExpanded(id){
            return expandedItems.value.includes(id)
        }
        function cartTotals() {
          let totals = {total:0, subtotal:0, tax:0, discount:0}
          selectedProducts.value.forEach((item) => {
            totals.subtotal += ((item['price'] || 0) * (item['quantity'] || 0)) - (item['discount'] || 0)
            totals.discount += (item['discount'] || 0)
            totals.tax += (item['tax'] || 0)
          })
            totals.total += totals.subtotal - totals.tax
          return totals
        }


        return {
            showModifier, currency,
            products, selectedProducts: skipHydrate(selectedProducts),
            expandedItems,
            toggleSelect, isExpanded, isSelected,
            cartTotals:skipHydrate(cartTotals), toggleExpand
        }
}, {persist: {enabled:false}})