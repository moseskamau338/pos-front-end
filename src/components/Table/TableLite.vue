<template>
    
    <div class="px-4">
      <!-- selected invoice totals -->
      <!--  <span v-if="sumSelected().value">Totals: {{sumSelected().formated}}</span>-->
      <!-- end of selected invoice totals -->

     
    <div class="sm:flex sm:items-center">
       <!-- headers -->
      <div class="sm:flex-auto">
        <slot name="header"></slot>
      </div>
      <div class="mt-4 sm:mt-0 md:ml-4 sm:ml-16 sm:flex-none">
        <!-- actions -->
        <slot name="actions"></slot>
      </div>
    </div>


    <div class="mt-4 flex flex-col mx-4">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
           <div class="ring-1 ring-black ring-opacity-5 md:rounded min-h-[150px] max-h-80 overflow-y-auto border dark:border-slate-500 rounded">
              <!-- table -->
              <table class="min-w-full table-fixed divide-y divide-gray-300 border-2 border-transparent border-collapse">
                <!-- table header -->
                <thead class="bg-gray-200 z-10 dark:bg-brand-dark whitespace-nowrap sticky top-0">
                <tr class="py-0">
                  <th  v-for="(field, index) in headers" scope="col" class="px-2 min-w-2 group py-3 text-left text-xs font-semibold text-brand-dark dark:text-gray-400">
                      <slot :name="'header_'+field.key" v-bind:field="field">
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5" v-show="selectable && index === 0">
                            <input id="selection" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-brand-green border-gray-300 rounded" />
                          </div>
                          <div class="ml-3 text-xs">
                            <label for="selection" class="font-medium">{{(field.label || makeTitle(field.key)).toUpperCase()}}</label>
                          </div>
                        </div>
                      </slot>
                      </th>
                      <th v-if="actioned">
                        <span class="sr-only">actions</span>
                        <slot name="action_header"></slot>
                      </th>

                </tr>
                </thead>
               <!-- table body -->
               <tbody class="divide-y divide-gray-200 dark:divide-slate-600 bg-white dark:bg-brand-dark/60 h-9 overflow-auto">

                <!-- table row(s) -->
                <template v-if="!loading && data.length > 0" :key="index" v-for="(record, index) in data.slice(startIndex, endIndex)">

                  <tr class="dark:hover:bg-gray-300/20 hover:bg-gray-100/60 dark:odd:bg-gray-600 odd:bg-gray-100 transition-all"
                      :class="[record.selected? 'border-l-2':'']">

                      <!-- row data -->
                  <td @click="rowClicked(record)" :key="ind" v-for="(field, ind) in headers" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                    <slot :name="field.key" v-bind:record="record">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5" v-if="selectable && ind === 0">
                          <input v-model="record.selected" type="checkbox" class="hover:cursor-pointer focus:ring-green-500 h-4 w-4 text-brand-green border-gray-300 rounded" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label class="font-medium">{{record[field.key]}}</label>
                        </div>
                      </div>
                    </slot>
                  </td>

                      <!-- row actions -->
                      <td v-if="actioned" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-300">
                        <slot name="row_actions" v-bind:record="record"></slot>
                      </td>

                    </tr>

                    <slot name="inner_table" v-bind:record="record">

                    </slot>
                </template>

                      <tr v-else-if="loading">
                        <td :colspan="headers.length">
                          <div class="text-center mt-8">
                             <i class="fa-duotone fa-spinner-third animate-spin mr-2"></i>
                             <span class="font-bold mt-4">Processing...</span>
                           </div>
                        </td>
                      </tr>
                      <tr v-else>
                        <td :colspan="headers.length">
                             <Empty />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
          </div>



        <Paginator v-if="!removePagination" :records="records" :totalRecords="totalRecords" @paginate-records="paginationUpdate" />

        </div>
  </div>

</template>

<script>
import {inject, toRef, ref} from "vue";
//import { useTables } from "@/library/tables";
import Empty from "@/components/app/Empty.vue";
import Paginator from "@/components/Table/Pagination/Paginator.vue";

export default {
  name: "TableLite",
  components: {Paginator, Empty},
  props:{
    loading:{default:false},
    removePagination: Boolean,
    selectable:{default:false, type:Boolean},
    headers:{required:true, type:Array},
    actioned:{default:false, type:Boolean},
    url:{default:''},
    records:{
      type:Array,
      default:[]
    },
    totalRecords: {type: Number, default: 0}
  },
  setup(props, { emit }){
    const {makeTitle} = inject('helpers')
    let data = toRef(props,"records");
    let startIndex = ref(0);
    let endIndex = ref(3000);
    //const {selectRow, sumSelected} = useTables()

    function rowClicked(record){
      if (props.selectable){
         console.log('Row clicked')
        //selectRow(record)
      }
    }

    function paginationUpdate(paginatorInfo){
      console.log('[TABLELITE] Received info from paginator', paginatorInfo);
      emit("paginationQueryInfo", {info: paginatorInfo});
      //const { start, end, currentPage, currentPageSize } = paginatorInfo;

      // Update the start and end indexes
      // startIndex.value = start;
      // endIndex.value = end;

      /**
       * @TODO: do the fetching here to get the updated paginated data
       */
    }


    return {rowClicked, makeTitle, data, paginationUpdate, startIndex, endIndex}

  }

}
</script>

<style scoped>

</style>