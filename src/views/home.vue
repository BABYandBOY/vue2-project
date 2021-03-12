<template>
  <div>
    <el-carousel trigger="click" height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
        1
      </el-carousel-item>
    </el-carousel>

    <div class="block">
      <div class="block-content">
        <div class="title f48 M">
          <i class="el-icon-help" />
          产品中心
          <span class="f28 L">PRODUCTS</span>
        </div>
        <el-row>
          <el-col :span="8" class="item">
            s
          </el-col>
          <el-col :span="8" class="item">
            s
          </el-col>
          <el-col :span="8" class="item">
            s
          </el-col>
        </el-row>
        <div class="learn-more f18">
          了解更多>>
        </div>
      </div>
    </div>

    <div>
      <div class="block-content">
        <div class="title f48 M">
          <i class="el-icon-help" />
          服务中心
          <span class="f28 L">SERVICES</span>
        </div>
        <el-row>
          <el-col :span="8" class="item">
            s
          </el-col>
          <el-col :span="8" class="item">
            s
          </el-col>
          <el-col :span="8" class="item">
            s
          </el-col>
        </el-row>
        <div class="learn-more f18">
          了解更多>>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="block-content">
        <div class="title f48 M">
          <i class="el-icon-help" />
          技术平台
          <span class="f28 L">PLATFORM</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="12" class="item">
            <div class="f30 M">由数据驱动的药物发现与个性化治疗平台</div>
            <div class="f18 R" style="padding-top: 140px;">
              <p>以标准化、自动化、智能化、规模化的工业级标准，</p>
              <p>打造全球最优质的、自主知识产权的新型生物计算机基础设施，</p>
              <p>集微留控类器官培养、生物文库构建、自动化操作、3D高内涵成像、大数据处理、机器学习与预测、多参数检测分析于一体，</p>
              <p>推动高通量、自动化药物筛选与功效评价，赋能生命科学、药物研发与精准治疗。</p>
            </div>
          </el-col>
          <el-col :span="12" class="item">
            s
          </el-col>
        </el-row>
        <div class="learn-more f18">
          了解更多>>
        </div>
      </div>
    </div>

    <div>
      <div class="block-content">
        <div class="title f48 M">
          <i class="el-icon-help" />
          关于我们
          <span class="f28 L">ABOUT</span>
        </div>
        <el-row>
          <div class="f18 R">
            <p>我们正在构建一套与传统模式不同的，由先进成像、数据与计算驱动的创新型基础设施，用于支持生命科学、药物研发与疾病治疗，为人类健康福祉提供科技动能。</p>
            <p>我们探索的是无人区，异常复杂、充满挑战，同时也充满想象、激动人心！</p>
            <p>我们拥有高度跨学科交叉的团队，我们期待遇到志同道合、天生不凡的你。</p>
            <p>我们的雄心壮志，由我们一起来实现。</p>
          </div>
        </el-row>
        <div class="learn-more f18">
          了解更多>>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="block-content">
        <el-row class="footer-content cWhite">
          <el-col :span="4">
            <div class="f16 M">产品中心</div>
            <div class="f16 R" style="padding-top: 20px;">
              <p>SLiM1000</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="f16 M">服务中心</div>
            <div class="f16 R" style="padding-top: 20px;">
              <p>高通量标准化类器官构建服务</p>
              <p>组织透明化成像与分析服务</p>
              <p>高内涵细胞成像与分析服务</p>
              <p>超宽场全脑实时成像与分析服务</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="f16 M">技术平台</div>
            <div class="f16 R" style="padding-top: 20px;">
              <p>生物计算基础设施</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="f16 M">关于我们</div>
            <div class="f16 R" style="padding-top: 20px;">
              <p>公司简介</p>
              <p>公司文化</p>
              <p>联系我们</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="f16 M">招贤纳士</div>
            <div class="f16 R" style="padding-top: 20px;">
              <p>开放职位</p>
            </div>
          </el-col>
          <el-col :span="4">
            <img src="@/assets/logo.png">
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

.block {
  background: #F2F2F2;
}
.footer {
  background: #29292C;
}
.copyright {
  border-top: 1px solid #AAA;
  padding: 45px 0;
  text-align: center;
}
.title {
  padding: 60px 0;
}
.item {
  height: 480px;
}
.learn-more {
  padding: 40px 0;
  text-align: center;
}
.footer-content {
  padding-top: 60px;
  padding-bottom: 100px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
