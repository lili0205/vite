<template>
  <div>
    <h3>按键修饰符</h3>
    <p>
      <input type="text" v-model="searchVal" @keyup.enter="search()" />
      <!-- 同时两个或多个修饰符的时候才起作用 -->
      <input type="text" @keyup.ctrl.y="searchInfo()" />
      <!-- 有且仅有按下CTRL键触发 -->
      <!-- 但是好像不怎么管用 -->
      <input type="text" @keyup.ctrl.exact="up" />
    </p>
  </div>
</template>

<script>
export default {
  name: "Pro02Button",
};
</script>
<script setup>
import { ref } from "vue";
const searchVal = ref(10);
const search = () => {
  //   console.log(e.keyCode);
  console.log("触发了");
  window.open(`https://www.google.com.hk/search?q=${searchVal.value}`);
};
const searchInfo = () => {
  console.log("按下了两个修饰符");
};
const up = () => {
  console.log("按下了CTRL");
};
</script>

<style lang="less" scoped></style>
