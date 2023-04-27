<template>
  <div>
    <h3>todos列表</h3>
    <p>
      <input type="text" v-model="text" @keyup.enter="addItem" />按enter添加任务
    </p>
    <table border="1">
      <tr>
        <td>筛选</td>
        <td>序号</td>
        <td>任务状态</td>
        <td>任务内容</td>
        <td>操作</td>
      </tr>
      <tr v-for="item in choose" :key="item.id">
        <td><input type="checkbox" v-model="item.done" /></td>
        <td>{{ item.id }}</td>
        <td>{{ item.done ? "已完成" : "未完成" }}</td>
        <td>{{ item.text }}</td>
        <!-- <td><a href="javascript:void(0);">删除</a></td> -->
        <td><a href="#" @click.prevent="removeItem(item.id)">删除</a></td>
      </tr>
    </table>
    <p><input type="checkbox" v-model="allChecked" />全选</p>
    <p>
      已完成<strong>{{ complate }}</strong
      >/总数<strong>{{ list.length }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "Pro02Todos",
};
</script>
<script setup>
import { reactive, ref, computed } from "vue";
const { list } = reactive({
  list: [
    {
      id: 1001,
      text: "吃饭",
      done: true,
    },
    {
      id: 1002,
      text: "睡觉",
      done: false,
    },
    {
      id: 1003,
      text: "打豆豆",
      done: false,
    },
  ],
});
//  用ref操作的数据记得加上.value
const text = ref("");
const nextId = ref(1004);
const addItem = () => {
  // 数据为空 return 出去
  if (text.value.trim() === " ") return;
  const obj = {
    id: nextId.value,
    text: text.value,
    done: false,
  };
  list.push(obj);
  nextId.value++;
  text.value = "";
};
const removeItem = (id) => {
  // findIndex寻找当前的循环项el,如果发现el.id和传入的id相等，则删除
  const index = list.findIndex((el) => el.id == id);
  // 删除，从index位置开始，删除一项
  list.splice(index, 1);
};

// 页面默认展示未完成的任务，当全选值为true的时候，所有选项全部展示出来，全选按钮默认为false
const allChecked = ref(false);

// 删选todos列表
// const choose = computed(() => {
//   return list.filter((el) => el.done == false);
// });

// filter的简写形式
// el.done 为false的时候展示
const choose = computed(() =>
  list.filter((el) => !el.done || allChecked.value)
);

// 筛选已经完成的任务
const complate = computed(() => list.filter((el) => el.done).length);
</script>

<style lang="less" scoped>
table {
  width: 500px;
  td {
    text-align: center;
  }
}
</style>
