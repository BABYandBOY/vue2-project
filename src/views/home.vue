<template>
  <div>
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="(item, i) in BannerList" :key="i">
        <img :src="item" class="Banner">
      </el-carousel-item>
    </el-carousel>

    <div class="block">
      <div class="block-content">
        <div class="title f48 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/home/Icon--产品中心.png')">
          </div>
          产品中心
          <span class="f28 L">PRODUCTS</span>
        </div>
        <el-row>
          <el-col :span="8" class="item">
            <div class="f30 L item-top item-top-bg">
              扫描光场显微系统SLiM1000
            </div>
            <div class="item-middle">
              <img :src="require('@/assets/img/home/产品SLiM1000.png')">
            </div>
            <div class="item-bottom item-bottom-bg">
              <div class="f18 R cWhite item-bottom-content">
                同时满足生命科学大视野、高分辨、高速、3D成像需求，具备矫正活体组织像差的能力...
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="item">
            <div class="f30 L item-top">
              大组织透明化成像系统
            </div>
            <div class="item-middle">
              <img :src="require('@/assets/img/home/大组织透明.png')">
            </div>
            <div class="item-bottom">
              <div class="f18 R item-bottom-content">
                针对大组织样本的3D荧光成像，运用创新的扫描光场成像技术，克服传统光场显微镜空间分辨率不足的问题...
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="item">
            <div class="f30 L item-top">
              超宽视场3D介观成像系统
            </div>
            <div class="item-middle">
              <img :src="require('@/assets/img/home/超宽视场.png')">
            </div>
            <div class="item-bottom">
              <div class="f18 R item-bottom-content">
                提供多尺度、复杂活体动态观测，从亚细胞、细胞、组织到器官...
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="learn-more f18">
          <span class="learn-more-hover">了解更多>></span>
        </div>
      </div>
    </div>

    <div>
      <div class="block-content">
        <div class="title f48 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/home/Icon--服务中心.png')">
          </div>
          服务中心
          <span class="f28 L">SERVICES</span>
        </div>
        <el-row>
          <el-col :span="8" class="item">
            <div class="f30 L item-top item-top-bg">
              高通量标准化类器官构建服务
            </div>
            <div class="item-middle">
              <img :src="require('@/assets/img/home/高通量.png')">
            </div>
            <div class="item-bottom item-bottom-bg">
              <div class="f18 R cWhite item-bottom-content">
                采用自主研发微流控技术实施标准化、高通量的类器官平行可控培养，减少类器官批次和个体间的差异，助力再生医学、药物研发、体外试药...
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="item">
            <div class="f30 L item-top">
              组织透明化成像与分析服务
            </div>
            <div class="item-middle">
              <img :src="require('@/assets/img/home/组织透明化.png')">
            </div>
            <div class="item-bottom">
              <div class="f18 R item-bottom-content">
                联合组织清除、免疫荧光标记、光场成像技术，批量探索肿瘤、鼠脑等多种组织器官的3D精细结构，助力复杂生物病理分析...
              </div>
            </div>
          </el-col>
          <el-col :span="8" class="item">
            <div class="f30 L item-top">
              高内涵细胞成像与分析服务
            </div>
            <div class="item-middle">
              <img :src="require('@/assets/img/home/高内涵.png')">
            </div>
            <div class="item-bottom">
              <div class="f18 R item-bottom-content">
                快速捕获细胞、亚细胞或组织成像，发挥比流式细胞术、ELISA更为强大的多参数分析优势，助力细胞功能研究和药物筛选。
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="learn-more f18">
          <span class="learn-more-hover">了解更多>></span>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="block-content">
        <div class="title f48 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/home/Icon--技术平台.png')">
          </div>
          技术平台
          <span class="f28 L">PLATFORM</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="f30 M">由数据驱动的药物发现与个性化治疗平台</div>
            <div class="f18 R platform-content">
              <p>以标准化、自动化、智能化、规模化的工业级标准，</p>
              <p>打造全球最优质的、自主知识产权的新型生物计算机基础设施，</p>
              <p>集微留控类器官培养、生物文库构建、自动化操作、3D高内涵成像、大数据处理、机器学习与预测、多参数检测分析于一体，</p>
              <p>推动高通量、自动化药物筛选与功效评价，赋能生命科学、药物研发与精准治疗。</p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="item-middle-2">
              <img :src="require('@/assets/img/home/技术平台插图.png')">
            </div>
          </el-col>
        </el-row>
        <div class="learn-more f18">
          <span class="learn-more-hover">了解更多>></span>
        </div>
      </div>
    </div>

    <div>
      <div class="block-content">
        <div class="title f48 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/home/Icon--关于我们.png')">
          </div>
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
          <span class="learn-more-hover">了解更多>></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BannerList: [
        require('@/assets/img/home/Banner1.png'),
        require('@/assets/img/home/Banner2.png'),
        require('@/assets/img/home/Banner3.png'),
        require('@/assets/img/home/Banner4.png')
      ]
    }
  }
}
</script>

<style scoped>
.title {
  padding: 60px 0;
}
.icon-img {
  display: inline-block;
  height: 60px;
  vertical-align: middle;
}
.item {
  height: 480px;
  cursor: pointer;
}
.item:hover>.item-top {
  background: #d4d1e2;
}
.item:hover>.item-bottom {
  background: #8e83bb;
}
.item:hover>>>.item-bottom-content {
  color: #FFF;
}
.item-top {
  height: 70px;
  line-height: 70px;
  text-align: center;
  transition: all .3s;
}
.item-top-bg {
  background: #d4d1e2;
}
.item-middle {
  height: 310px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  width: 480px;
}
.item-middle-2 {
  height: 520px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  width: 720px;
}
.item-bottom {
  height: 100px;
  transition: all .3s;
}
.item-bottom-bg {
  background: #8e83bb;
}
.item-bottom-content {
  padding: 10px 30px;
}
.learn-more {
  padding: 40px 0;
  text-align: center;
}
.learn-more-hover {
  transition: all .3s;
}
.learn-more-hover:hover {
  color: #f95671;
  cursor: pointer;
}
.Banner {
  width: 100%;
  height: 100%;
}
.platform-content {
  padding: 140px 0;
}
</style>
