<template>
  <div>
    <h3>属性绑定指令v-bind</h3>
    <p tag="title"></p>
    <img v-bind:src="img1" alt="" style="width: 100px" />
    <a v-bind:href="url">baidu</a>
    <hr />
    <input type="checkbox" v-model="move" />
    <h3>条件指令v-show 和 v-if</h3>
    <div class="box" v-if="move"></div>
    <div class="box" v-show="move"></div>
    <hr />
    <p v-if="carList.length != 0">购物车一共有{{ carList.length }}件商品</p>
    <p v-else>购物车空空如也，快去购物吧</p>
    <hr />
    <h3>考试等级</h3>
    <h3>考试等级</h3>
    <h3>考试等级</h3>
    <h3>考试等级</h3>
    <div>
      多分支条件语句，根据当前分数判断考试等级:
      <h4>你当前的考试等级为:</h4>
      <p v-if="score >= 90">A</p>
      <p v-else-if="score >= 80">B</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pro02Dirdom",
};
</script>
<script setup>
import { ref, reactive } from "vue";
const img1 = ref(require("./../assets/logo.png"));
const url = ref("http://www.baidu.com");
const move = ref(true);
const { carList } = reactive({
  carList: [
    {
      name: "哇哈哈",
      num: 1000,
    },
    {
      name: "哇哈哈",
      num: 1000,
    },
    {
      name: "哇哈哈",
      num: 1000,
    },
  ],
});
const score = ref(80);
</script>

<style lang="less" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
  margin-bottom: 10px;
}
</style>
