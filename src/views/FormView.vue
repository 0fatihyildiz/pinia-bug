<template>
  <div class="q-pa-md" style="max-width: 400px">
 
      <input type="text"
        filled
        v-model="data2.data1.title"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
    
      />

      <input
        filled
        type="text"
        v-model="data2.data1.count"
        label="Your age *"
        lazy-rules

      />

      <div>
        <button label="Submit" @click.prevent="onSubmit()" color="primar">gonder</button>
 
      </div>


  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { useDataStore } from "@/stores/store"

const counter = useDataStore()

const data2 = reactive({
  data1: {
    title: "",
    count: ""
  }
})

const onSubmit = () => {
  alert('aaa')
  counter.setData(data2)
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
