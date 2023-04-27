<template>
  <div>
    <h3>生命周期(在vue3中写的vue2生命周期)</h3>
    <p>count:{{ count }}</p>
    <button @click="count++">count++</button>
    <p><button @click="del">点击销毁</button></p>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  name: "Pro02LifeCycle",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    del() {
      this.instance.root.appContext.app.unmount();
    },
  },
  // 执行到该阶段的时候自动调用，叫钩子函数
  // return 出来的数据是可以在methods里面获取到的
  setup() {
    console.log("setup");
    const instance = getCurrentInstance();
    return {
      instance,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style lang="less" scoped></style>
