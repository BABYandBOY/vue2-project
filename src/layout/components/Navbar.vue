<template>
  <div class="navbar">
    <div class="block-content">
      <img class="logo" :src="require('@/assets/img/home/荷湖LOGO1 拷贝 2.png')">
      <div class="menu">
        <el-menu mode="horizontal" router :default-active="$route.path">
          <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
            {{ item.label }}
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name: '/home', label: '首页' },
        { name: '/product', label: '产品中心' },
        { name: '/service', label: '服务中心' },
        { name: '/platform', label: '技术平台' },
        { name: '/about', label: '关于我们' },
        { name: '/invite', label: '招纳贤士' },
      ]
    }
  }
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
