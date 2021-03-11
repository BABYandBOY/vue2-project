<template>
  <div>
    <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="item in 4" :key="item">
        1
      </el-carousel-item>
    </el-carousel>
    <div class="block">
      <div class="block-content">
        ss
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style scoped>

.block {
  background: #F1F1F1;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
