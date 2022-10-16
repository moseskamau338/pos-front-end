/*
* This store manages all user preferences for the UI
* */
import {defineStore} from "pinia";
import {find} from "lodash/collection.js";
import {clone} from "lodash";
import {computed, ref} from "vue";

export const usePosStore = defineStore('posStore', () => {

    //booleans
    const showModifier = ref(false),
     showAccessory = ref(false),
    currency = ref('KES'),
    query = ref(''),
    products = ref([
          {
              id:1,
              image:'/images/food.svg',
              name:'Black Forest',
              description:'',
              price:90, discount:0, tax:0, quantity:0
          },
        {
              id:19,
              image:'/images/food.svg',
              name:'Another cake',
              description:'',
              price:30000, discount:0, tax:0, quantity:0
          },
          {id:2,image:'/images/food.svg',name:'Fruit Cake',
              description:'', price:200, discount:0, tax:0, quantity:0},
          {id:3,image:'/images/food.svg',name:'Coconut Cake', description:'', price:809.9, discount:0, tax:0, quantity:0},
          {id:4,image:'/images/food.svg',name:'Zucchini Cake', description:'', price:12.5, discount:0, tax:0, quantity:0},
          {id:5,image:'/images/food.svg',name:'Muffles', description:'', price:78.8, discount:0, tax:0, quantity:0},
          {id:6,image:'/images/food.svg',name:'Sweet Cake', description:'', price:467.9, discount:0, tax:0, quantity:0},
          {id:7,image:'/images/food.svg',name:'Dunkies', description:'', price:342.99, discount:0, tax:0, quantity:0},
        ]),
    selectedProducts = ref([]),
    selectedCategories = ref([]),
    expandedItems = ref([]),
    categories = ref([
        {id:'cake', name:'Cakes'},
        {id:'pastries', name:'Pastries'},
        {id:'wedding_cakes', name:'Wedding Cakes'},
        {id:'fruit_cakes', name:'Fruit Cakes'},
    ])

    const filteredClients = computed(() => {
      if (query.value.length === 0){
        return products.value
      }else{
        //clients.value.
        return products.value.filter((product) => product.name.toLowerCase().includes(query.value.toLowerCase()))
      }
    })


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
        function selectCategory(e, category) {
            console.log('Selecting category: ', category)
          if (selectedCategories.value.includes(category)){
            //remove
            selectedCategories.value.splice(selectedCategories.value.indexOf(category), 1)
          }else{
            selectedCategories.value.push(category)
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
            showAccessory,
            showModifier, currency,selectedCategories,
            products, selectedProducts,selectCategory,
            expandedItems, query, filteredClients,
            toggleSelect, isExpanded, isSelected,
            cartTotals, toggleExpand, categories
        }
}, {persist: {enabled:false}})