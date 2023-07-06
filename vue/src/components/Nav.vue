<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
</script>
<template>
  <div class="header">
    <div class="heahder_main">
      <div class="left_box">
        <router-link to="/" class="logo">
          <img src="https://test.nttcc.com.cn//_nuxt/img/logo_1.e54ae31.png" />
          <h1>共创云</h1>
        </router-link>
        <div class="nav">
          <a href=""> 服务产品 </a>
          <a href=""> 科创需求 </a>
          <a href=""> 专利论文 </a>
          <a href=""> 交易大数据 </a>
        </div>
      </div>
      <div class="right_box">
        <el-button type="primary" @click="router.push({name:'login'})">登录</el-button>
        <el-button>注册</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header{
    width:100%;
    background: #fff;
}
.heahder_main {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
.left_box {
  display: flex;
}
a {
  text-decoration: inherit;
}
.logo {
  display: flex;
  align-items: center;
  margin-right: 50px;
}
.logo img {
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-right: 10px;
}
.logo h1 {
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #3473e6;
}
.nav {
  display: flex;
  align-items: center;
}
.nav > a {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #606266;
  cursor: pointer;
}
.nav > a:hover {
  color: #00a4ff;
}
.nav > a + a {
  margin-left: 20px;
}
</style>
