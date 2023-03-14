import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', {
  state: () => ({ 
    data: {}
   }),
})