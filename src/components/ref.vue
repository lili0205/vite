<template>
  <div>
    <h3>vue3中使用ref</h3>
    <div ref="box"></div>
    <ul :ref="setdom">
      <li>我是第1个li</li>
      <li>我是第2个li</li>
      <li>我是第3个li</li>
      <li>我是第4个li</li>
      <li>我是第5个li</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Pro02Ref",
};
</script>
<script setup>
import { ref, onMounted } from "vue";
// ref操作单个元素
const box = ref(null);
onMounted(() => {
  box.value.style.width = "200px";
  box.value.style.height = "200px";
  box.value.style.background = "pink";
});

// ref操作多个元素
// 1.空数组用来存放ul里面的li
const setdomlist = [];
// 2.把ref动态绑定的元素里面的每一项push到数组里（定义一个函数获取元素）
const setdom = (el) => {
  //   console.log(el);
  setdomlist.push(el);
};
onMounted(() => {
  setdomlist.forEach((el) => (el.style.color = "pink"));
});
</script>
<style lang="less" scoped></style>
