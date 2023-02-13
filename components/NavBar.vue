<template>
  <nav class="w-full border border-b-2">
    <div class="w-full max-w-[1240px] px-3 mx-auto grid grid-cols-1 md:grid-cols-3 py-2 h-[100px] items-center ">
      <div>
        <img src="/images/logo.svg" class="w-[150px]" alt="">
      </div>
      <div class="col-span-2 md:flex justify-end hidden items-center">
        <div class=" pr-4">
          <a href="/" class=" hover:text-purple transition pl-4" v-for="link in links" :key="link">{{link.title}}</a>
        </div>
        <UiCustomBtn paddingClass="py-2 px-4" text="Admin Area"/>
      </div>

    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
        title: "Careers",
        to: ""
      },
    ]
  })
})
</script>
