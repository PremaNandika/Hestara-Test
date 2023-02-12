<template>
  <nav class="w-full max-w-[1240px] px-3 mx-auto grid grid-cols-3 py-2 h-[100px] items-center">
    <div>
      <img src="/images/logo.svg" class="w-[150px]" alt="">
    </div>
    <div class="col-span-2 flex justify-end  items-center">
      <div class="space-x-4 pr-4">
        <span v-for="link in links" :key="link">{{link.title}}</span>
      </div>
      <CustomBtn text="Admin Area"/>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomBtn from './ui/CustomBtn.vue'

export default Vue.extend({
  components: { CustomBtn },
  name: "NavBarComponent",
  data: () => ({
    links: [
      {
        title: "Home",
        to: "/"
      },
      {
        title: "Our Products",
        to: ""
      },
      {
        title: "Pricing Plan",
        to: ""
      },
      {
        title: "Case Studies",
        to: ""
      },
      {
        title: "Career",
        to: ""
      },
    ]
  })
})
</script>
