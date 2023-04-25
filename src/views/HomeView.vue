<template>
  <div>
    <h1>数据绑定指令</h1>
    <h3>hello</h3>
    <p>电影是{{ movie.name }}</p>
    <p>今天的咖啡是----{{ coffe }}</p>
    <input type="checkbox" v-model="flage" />《大熊协议》
    <p>你当前的选择是：{{ flage ? "同意" : "不同意" }}</p>
    <hr />
    <!-- <p>多选框，不能再用布尔值操作了</p> -->
    <p>你的爱好是：{{ hobby }}</p>
    <input type="checkbox" value="足球" v-model="hobby" />足球
    <input type="checkbox" value="篮球" v-model="hobby" />篮球
    <input type="checkbox" value="羽毛球" v-model="hobby" />羽毛球
    <input type="checkbox" value="兵乓球" v-model="hobby" />兵乓球
    <input type="checkbox" value="排球" v-model="hobby" />排球

    <hr />
    <select style="width: 200px" v-model="level">
      <option value="黑体">黑体</option>
      <option value="宋体">宋体</option>
      <option value="甲骨文">甲骨文</option>
      <option value="草书">草书</option>
    </select>
    <p>当前的选择是：{{ level }}</p>
    <hr />
    <input type="text" v-model.number="num1" />+
    <input type="text" v-model.number="num2" />=
    <input type="text" :value="num1 + num2" />
    <hr />
    <!-- 只能去掉前后空格，不能去掉中间空格 -->
    <input type="text" v-model.trim="trim" />
    <p>长度是{{ trim.length }}</p>
    <p>{{ trim }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const movie = reactive({
  name: "新蜘蛛侠",
});
const coffe = ref("卡布奇诺");
const flage = ref(true);
const hobby = ref([]);
const level = ref("黑体");
const num1 = ref(0);
const num2 = ref(0);
const trim = ref("123");
</script>

<style lang="scss" scoped></style>
