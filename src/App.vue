<template>
  <nav>
    <router-link to="/about">关于</router-link>
    <router-link to="/">首页</router-link>
    <router-link to="/dirdom">指令</router-link>
  </nav>

  <router-view />
</template>

<style>
nav a {
  margin-left: 20px;
}
</style>
