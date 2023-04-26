<template>
  <div>
    <h3>computed计算属性</h3>
    <input type="text" v-model="num1" />+ <input type="text" v-model="num2" />=
    <!-- <input type="text" v-model="total" /> -->
    <span>{{ num1 + "-" + num2 }}</span>
    <hr />
    <div id="example">
      <p>给定以下三个词语组成一句话</p>
      <span>{{ nameOne }}</span>
      <span>{{ nameTwo }}</span>
      <span>{{ son }}</span>
      <p style="padding: 12px 0">答案为：{{ result }}</p>
      <button @click="btnClick">改变语句</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pro02Computed",
  data() {
    return {
      nameOne: "父亲",
      nameTwo: "母亲",
      son: "儿子",
    };
  },
  computed: {
    result: {
      // 与不写get  set方法的形式有区别
      // 一个计算属性的getter
      get: function () {
        // 三个值变化的时候，result的值会自动更新，也会自动更新DOM结构
        return this.nameOne + this.nameTwo + this.son;
      },
      // 一个计算属性的setter
      set: function (newVal) {
        // 当设置result的时候，其他的值也会相应的发生改变
        this.nameOne = newVal.substr(0, 2);
        this.nameTwo = newVal.substr(2, 2);
        this.son = newVal.substr(4);
      },
    },
  },
  methods: {
    btnClick() {
      this.result = "儿子外出打工";
    },
  },
};
</script>
<script setup>
import { ref } from "vue";
const num1 = ref("123");
const num2 = ref("456");
// const total = num1.value + "-" + num2.value;
// num1.value = newArr[0];
// num2.value = newArr[1];
// get
// set
</script>
<style lang="less" scoped></style>
