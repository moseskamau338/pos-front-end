<script>
import { ref, computed } from "vue";
export default {
  name: "Paginator",
  props: {
    records: { type: Array, required: true},
    totalRecords: { type: Number, default: 0 }
  },
  setup(props, { emit }) {
    const currentPage = ref(1);
    const isFirstPage = ref(true);
    const isLastPage = ref(false);
    const totalPages = ref(1);
    const initialPgSize = ref(100);
    const pageSize = ref(50);

    const maxButtons = 5;
    const pages = computed(() => {
      let totalPages = props.totalRecords > 0? Math.ceil(props.totalRecords/pageSize.value) : 0

        let numShown = Math.min(maxButtons, totalPages);
        let first = currentPage.value - Math.floor(numShown / 2);
        first = Math.max(first, 1);
        first = Math.min(first, totalPages - numShown + 1);
        return [...Array(numShown)].map((k,i) => i + first);
    })

    const handlePrev = () => {
      console.log("** go to PREV page ****");
      if(currentPage.value > 1){
        isLastPage.value = false;
        isFirstPage.value = false;
        currentPage.value--;
      } else {
        isFirstPage.value = true;
      }

     emit('paginateRecords', {
        currentPage: currentPage.value,
        pageSize: pageSize.value
       })
    }

    const handleNext = () => {
      console.log("** go to NEXT page ****");
      if(currentPage.value < Math.ceil(props.totalRecords/pageSize.value)){
        isFirstPage.value = false;
        currentPage.value++
      } else {
       isLastPage.value = true;
      }

      emit('paginateRecords', {
        currentPage: currentPage.value,
        pageSize: pageSize.value
       })
    }

    const handlePageSizeChange = (e) => {
      const val = e.target.value;
      if(val)pageSize.value = val;
       emit('paginateRecords', {
        currentPage: currentPage.value,
        pageSize: pageSize.value
       })
    }

    const handleSelectPage = (item) => {
      currentPage.value = item;
      emit('paginateRecords', {
        currentPage: currentPage.value,
        pageSize: pageSize.value
       })
    }

    console.log("@@@@@@@@@", props.totalRecords/pageSize.value)

    return {
      currentPage, isFirstPage,
      isLastPage, handleNext,
      handlePrev, totalPages,
      pageSize, initialPgSize,
      handlePageSizeChange, handleSelectPage,
      pages
    };
    
  },
}
</script>
<template>
  <div class="flex gap-3 justify-between m-3 items-center flex-wrap">
    <p class="text-xs">Page <b>{{ currentPage }} of {{ Math.ceil(totalRecords/pageSize) }}</b> <span><small>({{ totalRecords }} total records)</small></span></p>
    <div class="flex justify-between items-center gap-2 flex-wrap">
      <select v-model="pageSize" @input="handlePageSizeChange" class="rounded dark:bg-brand-dark leading-none border-gray-300 text-xs focus:outline-none focus:ring-green-500 focus:border-green-500 mr-3 py-1.5 dark:bg-brand-night dark:border-gray-500">
        <option value="">---Page Size---</option>
        <option v-for="(item, idx) in [50, 100, 500, 1000, 5000, 10000 ]" :key="idx" :value="item">{{ item}}</option>
      </select>
      <div class="flex flex-wrap">
        <button class="capitalize relative inline-flex items-center px-2 py-1 rounded-l-md border border-gray-300 bg-white dark:bg-brand-dark-box dark:border-gray-500 text-xs font-medium text-gray-500 hover:bg-gray-50" @click="handlePrev" :disabled="isFirstPage">prev</button>
      <button  v-for="item in pages"
        :key="item"
        :disabled="currentPage === item"
        @click="handleSelectPage(item)"
        :class="[
            currentPage === item ? 'z-10 bg-green-50 dark:bg-green-500 dark:text-white border-green-500 text-green-600' : 'bg-white dark:bg-brand-dark-box border-gray-300 dark:bg-brand-night dark:border-gray-500 dark:text-gray-300 text-gray-500 hover:bg-gray-50'
        ]"
        aria-current="page"
        class="relative transition-all inline-flex items-center px-4 py-1 border text-xs font-medium">  {{ item }} </button>
          <button class="capitalize relative inline-flex items-center px-2 py-1 rounded-r-md border border-gray-300 bg-white dark:bg-brand-dark-box dark:bg-brand-night dark:border-gray-500 text-xs font-medium text-gray-500 hover:bg-gray-50" @click="handleNext" :disabled="isLastPage">next</button>
      </div>
    </div>
  </div>
</template>
