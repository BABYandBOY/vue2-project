<template>
  <div class="navbar">
    <div class="block-content">
      <img class="logo" :src="require('@/assets/img/home/荷湖LOGO1 拷贝 2.png')">
      <div class="menu">
        <el-menu mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">产品中心</el-menu-item>
          <el-menu-item index="4">服务中心</el-menu-item>
          <el-menu-item index="5">技术平台</el-menu-item>
          <el-menu-item index="6">关于我们</el-menu-item>
          <el-menu-item index="7">招纳贤士</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  height: 124px;
  width: 100%;
}
.logo {
  padding: 22px 0;
}
.menu {
  float: right;
  margin-top: 62px;
}
.menu>>>.el-menu.el-menu--horizontal {
  border-bottom: unset;
}
.menu>>>.el-menu-item {
  font-size: 18px;
  font-family: AlibabaR;
}
</style>
