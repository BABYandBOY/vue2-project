<template>
  <div>
    <img class="title-bg" :src="require('@/assets/img/product/标题背景框.png')">
    <div class="title-div">
      <span class="f72 B">服务中心</span>
      <span class="f36 L">SERVICES</span>
    </div>
    <div class="bg" />
    <div class="block empty1" />
    <div class="block">
      <div class="block-content">
        <div class="po">
          <div class="po-img">
            <img :src="require('@/assets/img/service/破折号.png')">
          </div>
          <div class="f40 R">
            我们围绕生命科学、疾病模型、病理研究、药物研发和个性化治疗，提供最具性价比的服务与解决方案。
          </div>
        </div>
      </div>
    </div>

    <div class="divider" />

    <div class="block">
      <div class="block-content">
        <div class="title f40 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/service/Icon--服务项目.png')">
          </div>
          服务项目
        </div>
        <el-row class="item">
          <el-col :span="4">
            <div class="item-img">
              <img :src="require('@/assets/img/service/心脏.png')" style="width: unset; height: 100%;">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">高通量标准化类器官构建服务</div>
              <div class="f18 R margin-top">
                采用自主研发微流控技术实施标准化、高通量的类器官平行可控培养，减少类器官批次和个体间的差异，助力再生医学、药物研发、体外试药。
              </div>
            </div>
            <div>
              <span class="btn">了解更多>></span>
            </div>
          </el-col>
        </el-row>
        <div class="item-divider" />
        <el-row class="item">
          <el-col :span="4">
            <div class="item-img">
              <img :src="require('@/assets/img/service/大脑.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">组织透明化成像与分析服务</div>
              <div class="f18 R margin-top">
                联合组织清除、免疫荧光标记、光场成像技术，批量探索肿瘤、鼠脑等多种组织、器官3D精细结构，助力复杂生物病理分析。
              </div>
            </div>
            <div>
              <span class="btn">了解更多>></span>
            </div>
          </el-col>
        </el-row>
        <div class="item-divider" />
        <el-row class="item">
          <el-col :span="4">
            <div class="item-img">
              <img :src="require('@/assets/img/service/细胞群.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">高内涵细胞成像与分析服务</div>
              <div class="f18 R margin-top">
                快速捕获细胞、亚细胞或组织图像，发挥比流式细胞术、ELISA更为强大的多参数分析优势，助力细胞功能研究和大规模筛选。
              </div>
            </div>
            <div>
              <span class="btn">了解更多>></span>
            </div>
          </el-col>
        </el-row>
        <div class="item-divider" />
        <el-row class="item">
          <el-col :span="4">
            <div class="item-img">
              <img :src="require('@/assets/img/service/小鼠脑.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">超宽场全脑实时成像与分析服务</div>
              <div class="f18 R margin-top">
                快速捕获细胞、亚细胞或组织图像，发挥比流式细胞术、ELISA更为强大的多参数分析优势，助力细胞功能研究和大规模筛选。
              </div>
            </div>
            <div>
              <span class="btn">了解更多>></span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="block empty2" />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.bg {
  background: #70B954;
  height: 148px;
}
.po {
  display: flex;
  padding: 60px 0;
}
.po-img {
  margin-right: 40px;
}
.po-img>img {
  padding: 24px 0;
}
.divider {
  height: 1px;
  background: #70b855;
}
.title {
  padding: 40px 0 0 20px;
  margin-bottom: 74px;
}
.icon-img {
  display: inline-block;
  height: 50px;
  vertical-align: middle;
  margin-right: 10px;
}
.item {
  margin-top: 60px;
  padding: 0 20px 60px;
}
.item-img {
  text-align: center;
  width: 200px;
  height: 200px;
}
.item-img>img {
  width: 100%;
}
.item-content {
  padding-left: 30px;
}
.item-content-height {
  height: 180px;
}
.item-divider {
  height: 10px;
  background: #70b855;
  opacity: .3;
}
.margin-top {
  margin-top: 20px;
}
.btn {
  font-size: 14px;
  background: #70b855;
  color: #fff;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
}
.empty1 {
  height: 70px;
}
.empty2 {
  height: 40px;
}
.title-bg {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
}
.title-div {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translate(-50%);
  color: #70B954;
}
</style>
