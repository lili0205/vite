<template>
  <div>
    <h3>computed计算属性</h3>
    <table border="1" style="width: 500px">
      <tr>
        <th>
          <input type="checkbox" v-model="allCheck" />
          全选
        </th>
        <th>商品数量</th>
        <th>商品名称</th>
        <th>商品价格</th>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.ischeck" />
        </td>
        <td>{{ item.num }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
      </tr>
      <tr>
        <td>总计</td>
        <!-- 横跨几行 -->
        <td colspan="3">{{ total }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Pro02Computed",
};
</script>
<script setup>
import { reactive, computed } from "vue";
const { list } = reactive({
  list: [
    {
      id: 1001,
      name: "蒙牛",
      num: 10,
      price: 3.0,
      ischeck: true,
    },
    {
      id: 1002,
      name: "伊利",
      num: 120,
      price: 3.0,
      ischeck: true,
    },
    {
      id: 1003,
      name: "新希望",
      num: 110,
      price: 3.0,
      ischeck: false,
    },
  ],
});
// const allCheck = ref(false);

// (el) => el.ischeck == true   (el)代表循环的每一项,el.ischeck代表每一项的哪个值， ==true表示满足什么条件
const allCheck = computed({
  get() {
    return list.every((el) => el.ischeck == true);
  },
  set(value) {
    list.forEach((el) => (el.ischeck = value));
  },
});
// computed的简写形式
// 简写形式下computed 默认是get,所以前面要加return
// 方法 reduce(cur,val) cur是初始值，val是每一项的值
const total = computed(() => {
  return list.reduce((cur, val) => {
    if (val.ischeck == true) {
      return cur + val.price * val.num;
    } else {
      return cur;
    }
  }, 0);
});
</script>

<style lang="less" scoped>
table {
  text-align: center;
}
</style>
