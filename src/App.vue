<!--
 * @Author: xujie 1607526161@qq.com
 * @Date: 2022-09-19 21:27:54
 * @LastEditors: xujie 1607526161@qq.com
 * @FilePath: \vue3Test\src\App.vue
 * @Description: 
-->
<script setup>
import { reactive } from "vue";
  const state = reactive({ count: 8 });
  function increment() {
    state.count++;
  }
</script>

<template>
   <div class="content">
    Vue3 Test
  </div>
  <header @click="increment">
    {{ state.count }}
  </header>
 
</template>

<style scoped></style>