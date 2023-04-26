<template>
  <div>
    <p>vue3中的事件</p>
    <p><button v-on:click="addCount">add++</button>{{ add }}</p>
    <p>
      <button
        @click="
          add++;
          aa();
        "
      >
        行内式写法++
      </button>
    </p>
    <div class="box">
      <p @contextmenu="sum($event, 100, 200)">
        右击当前盒子时计算传递数据的和，并且阻止右键弹出的默认事件
      </p>
      <p><button @click="one($event), two($event)">传入多个方法</button></p>
    </div>
    <hr />
    <div>
      <p>1.阻止默认事件</p>
      <!-- 或者给click添加事件修饰符 -->
      <a href="http://www.baidu.com" @click.prevent="skip"></a>
      <a href="http://www.baidu.com" @click="skip($event)">百度一下</a>
    </div>
    <!-- 阻止冒泡 -->
    <div class="demo1" @click="demo1">
      <div class="demo2" @click.stop="demo2"></div>
    </div>
    <hr />
    <!-- 捕获capture，使用事件的捕获形式 -->
    <div class="demo1" @click.capture="demo1">
      <div class="demo2" @click="demo2"></div>
    </div>
    <hr />
    <!-- self，只有event.target 是当前操作者的时候才会触发事件 -->
    <div class="demo1" @click.self="demo1">
      <div class="demo2" @click="demo2"></div>
    </div>
    <hr />
    <p>.once事件只触发一次</p>
    <button @click.once="first">点击触发</button>
    <p id="timer">验证码倒计时 {{ time }}</p>
    <!-- 事件的默认立即执行，无需等待事件回调执行完毕 -->
    <div>
      <ul class="oil" @wheel.passive="scorll($event)">
        <li>我是第1个li</li>
        <li>我是第2个li</li>
        <li>我是第3个li</li>
        <li>我是第4个li</li>
        <li>我是第5个li</li>
      </ul>
    </div>
    <div style="height: 700px"></div>
  </div>
</template>

<script>
export default {
  name: "Pro02Click",
};
</script>
<script setup>
import { ref } from "vue";
const add = ref(100);
const addCount = () => {
  add.value++;
};
const aa = () => {
  console.log("一个操作绑定了两个事件，中间记得用分号隔开");
};
const sum = (e, a, b) => {
  //   console.log(e);
  console.log(a + b);
  e.preventDefault();
};
const one = (e) => {
  console.log("当前的位置是", e.clientX, e.clientY);
};
const two = (e) => {
  console.log("这是第二个方法");
};
const skip = (e) => {
  e.preventDefault();
  console.log("阻止默认事件");
};
const demo1 = () => {
  console.log("点击了demo1");
};
const demo2 = () => {
  console.log("点击的demo2");
};
const first = () => {
  console.log("点击了按钮");
  let T = document.querySelector("#timer");
  T.style.color = "red";
  T.style.display = "block";
  setInterval(Myfunction, 1000);
};
const time = ref(5);
const Myfunction = () => {
  time.value--;
  if (time.value <= 0) {
    clearInterval();
  }
};
const scorll = (e) => {
  e.preventDefault();
  console.log("滚动了");
};
</script>

<style lang="less" scoped>
.box {
  p {
    width: 100px;
    height: 200px;
    background: pink;
  }
}
.demo1 {
  width: 300px;
  height: 300px;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  .demo2 {
    width: 200px;
    height: 200px;
    background: yellow;
  }
}
#timer {
  display: none;
}
.oil {
  width: 300px;
  height: 300px;
  background: pink;
  overflow: auto;
  list-style: none;
  li {
    height: 100px;
  }
}
</style>
