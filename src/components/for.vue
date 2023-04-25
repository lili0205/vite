<template>
  <div>
    <h3>v-for循环指令</h3>
    <p v-for="(items, index) in books" :key="index">
      {{ index + 1 }} ------ {{ items }}
    </p>

    <!-- 点击按钮插入数据 -->
    <p><button @click="addItem">点击插入一项数据</button></p>
    <ul>
      <li v-for="(items, index) in list.list" :key="index">{{ items }}</li>
    </ul>
    <hr />
    <!-- 循环当前对象 -->
    <p v-for="(value, attr) in actor" :key="attr">
      {{ attr }} ------{{ value }}
    </p>
    <hr />
    <!-- 嵌套循环，先循环一层，再循环另一层 -->
    <div v-for="item in beverages" :key="item">
      <h3>{{ item.categrory }}</h3>
      <ul>
        <li v-for="(good, index) in item.commodity" :key="index">
          {{ good }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pro02For",
};
</script>

<script setup>
import { reactive } from "vue";
const { books, actor, beverages } = reactive({
  books: ["西游记", "水浒传", "三国演义"],
  actor: [
    {
      name: "申通",
      age: 362,
      work: "演员",
    },
    {
      name: "圆通",
      age: 36,
      work: "演员",
    },
    {
      name: "极图",
      age: 6,
      work: "演员",
    },
  ],
  beverages: [
    {
      id: 1001,
      categrory: "茶",
      commodity: ["西湖龙井", "黄山毛峰", "庐山雾雨"],
    },
    {
      id: 1002,
      categrory: "咖啡",
      commodity: ["拿铁", "黄山毛峰", "庐山雾雨"],
    },
    {
      id: 1003,
      categrory: "奶茶",
      commodity: ["蜜雪冰城", "黄山毛峰", "庐山雾雨"],
    },
  ],
});
const list = reactive({
  list: ["html", "js", "css"],
});
// const addItem = () => {
//   list.splice(1, 0, "php");
// };
// function addItem() {
//   list.splice(1, 0, "php");
// }
</script>
<style lang="scss" scoped></style>
