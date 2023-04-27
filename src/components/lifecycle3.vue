<template>
  <div>
    <h3>vue3的生命周期钩子函数</h3>
    <p>count:{{ count }}</p>
    <button @click="count++">count++</button>
    <p><button @click="del">点击销毁</button></p>
  </div>
</template>

<script>
export default {
  name: "Pro02Lifecycle3",
};
</script>
<script setup>
import {
  getCurrentInstance,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  //   updated,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
console.log("setup");
const count = ref(0);
const instance = getCurrentInstance();
const del = () => {
  instance.root.appContext.app.unmount();
};
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
onUpdated(() => {
  console.log("onUpdated");
}),
  onBeforeUnmount(() => {
    console.log("onBeforeUnmount");
  });
onUnmounted(() => {
  console.log("onUnmounted");
});
</script>

<style lang="less" scoped></style>
