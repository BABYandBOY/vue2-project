<template>
  <div>
    <div class="footer">
      <div class="block-content">
        <el-row class="footer-content cWhite">
          <el-col :span="4">
            <div class="f16 M">产品中心</div>
            <div class="f16 R des-content">
              <p>SLiM1000</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="f16 M">服务中心</div>
            <div class="f16 R des-content">
              <p>高通量标准化类器官构建服务</p>
              <p>组织透明化成像与分析服务</p>
              <p>高内涵细胞成像与分析服务</p>
              <p>超宽场全脑实时成像与分析服务</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="f16 M">技术平台</div>
            <div class="f16 R des-content">
              <p>生物计算基础设施</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="f16 M">关于我们</div>
            <div class="f16 R des-content">
              <p>公司简介</p>
              <p>公司文化</p>
              <p>联系我们</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="f16 M">招贤纳士</div>
            <div class="f16 R des-content">
              <p>开放职位</p>
            </div>
          </el-col>
          <el-col :span="4">
            <img :src="require('@/assets/img/home/荷湖公众号二维码.png')">
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="footer copyright f16 R cWhite">
      Copyright © 2020-2021 浙江荷湖科技有限公司  浙ICP备2021003591号  法律声明
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
.footer {
  background: #29292C;
}
.footer-content {
  padding-top: 60px;
  padding-bottom: 100px;
}
.copyright {
  border-top: 1px solid #AAA;
  padding: 45px 0;
  text-align: center;
}
.des-content {
  padding-top: 20px;
}
</style>
