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
    <hr />
    <!-- v-for 和 v-if 不能混合使用，解决方法在外层套一个template（起到包裹包含的作用） -->
    <template v-for="item in todos">
      <p :key="item.id" v-if="item">{{ item.name }}----{{ item.done }}</p>
    </template>

    <!-- vue里面如何操作样式 动态绑定样式-->

    <p :class="title">灰姑娘</p>
    <ul>
      <li
        v-for="item in todos"
        :key="item"
        :class="[
          item.done ? 'conplate' : 'unconplate',
          item.done ? '' : 'fontSize',
        ]"
        class="lis"
      >
        {{ item.name }}
      </li>
    </ul>

    <!-- vue3 -->
    <!-- 当item.done的值为true时添加conplate类名 ，多个类名中间用逗号隔开-->
    <hr />
    <ul>
      <li
        v-for="item in todos"
        :key="item"
        :class="{ conplate: item.done, unconplate: !item.done }"
        class="lis"
      >
        {{ item.name }}
      </li>
    </ul>

    <!-- 样式动态切换 -->
    <p :style="{ color: colors }">人性的弱点</p>
    <div v-bind:style="{ color: colors, fontSize: fontSize }">三国演义</div>
    <div :style="[baseStyle, currentStyle]">style的数组写法</div>
    <div style="height: 500px"></div>
  </div>
</template>

<script>
export default {
  name: "Pro02For",
};
</script>

<script setup>
import { reactive, ref } from "vue";
const { baseStyle, currentStyle } = reactive({
  baseStyle: {
    width: "200px",
    height: "300px",
    background: "pink",
  },
  currentStyle: {
    color: "green",
    fontSize: "30px",
  },
});
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
const { todos } = reactive({
  todos: [
    {
      id: 1,
      name: "吃饭",
      done: true,
    },
    {
      id: 2,
      name: "睡觉",
      done: true,
    },
    {
      id: 3,
      name: "打豆豆",
      done: false,
    },
  ],
});
const title = ref("title");
const colors = ref("blue");
const fontSize = ref("30px");
</script>
<style lang="less" scoped>
.title {
  color: red;
}
.conplate {
  text-decoration: line-through;
  color: green;
}
.unconplate {
  //   text-decoration: line-through;
  color: red;
}
.fontSize {
  font-size: 30px;
}
.backgcolor {
  background: pink;
}
.lis {
  margin-top: 20px;
  list-style: none;
}
</style>
