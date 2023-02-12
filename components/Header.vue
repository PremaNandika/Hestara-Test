<template>
  <header class="bg-transparent border border-b-2">
    <div class="max-w-[1240px] w-full mx-auto justify-between items-center flex px-3 h-11">
      <div class="text-[11px] md:text-xs py-3 flex text-customGray">
        <span class="pr-2.5 hover:text-purple hover:underline">info@hestera.app</span>
        <span class="pl-2.5 hidden md:block">Mon - Fri 9.00am - 5.00pm</span>
      </div>
      <a href="" class="text-sm font-bold text-white bg-[#4ed9b8] px-6 hover:bg-[#34c6ce] transition h-full md:flex items-center hidden">
          (+62) 851-6290-0414
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "HeaderComponent"
})
</script>
