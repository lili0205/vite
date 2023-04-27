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
    <div>
      <p>获取当前坐标的x：{{ mousePoint.x }}</p>
      <p>获取当前坐标的y：{{ mousePoint.y }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pro02Ref",
};
</script>
<script setup>
import { ref, onMounted, onUnmounted, reactive } from "vue";
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

const mousePoint = reactive({
  x: 0,
  y: 0,
});
const move = (e) => {
  mousePoint.x = e.pageX;
  mousePoint.y = e.pageY;
};
// 在页面加载完成之后，dom渲染完成以后，监听事件
onMounted(() => {
  document.addEventListener("mousemove", move);
});
// 组件卸载后删除监听事件
// 组件卸载需要触发一个生命周期
onUnmounted(() => {
  document.removeEventListener("mousemove");
});
</script>
<style lang="less" scoped></style>
