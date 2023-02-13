<template>
  <button :class="paddingClass + ' text-white text-sm font-semibold rounded-full gradient-button transition'">
    <span>{{text}}</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "CustomBtnComponent",
  props: {
    text: String,
    paddingClass: String
  },
  data: () => ({

  }),
})
</script>
<style scoped>
  .gradient-button{
    background: linear-gradient(135deg,#b84ed9,#e461b9 80%);
  }
  .gradient-button:hover{
    background: linear-gradient(135deg,#9239ba,#c446a7 80%);
  }
  
</style>
