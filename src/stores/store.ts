import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', {
  state: () => ({ 
    data: {}
   }),
   actions: {
    setData(_data:any) {
      this.data = _data
    }
  }
})