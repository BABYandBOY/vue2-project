<template>
  <div>
    <div class="bg">
      <div class="block-content">
        <el-breadcrumb class="bread f18 R" separator-class="el-icon-arrow-right">
          <!-- <el-breadcrumb-item>您当前的位置</el-breadcrumb-item> -->
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>产品中心</el-breadcrumb-item>
          <el-breadcrumb-item >扫描光场显微系统SLiM1000</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="block">
      <div class="block-content">
        <div class="title f40 M" style="padding-bottom: 74px;">
          <el-row>
            <el-col :span="3">
              <div class="icon-img">
                <img :src="require('@/assets/img/product/Icon--仪器.png')">
              </div>
              仪器
            </el-col>
            <el-col :span="21">
              <div class="split-line"></div>
            </el-col>
          </el-row>
        </div>
        <el-row class="item">
          <el-col :span="10">
            <div class="item-img">
              <img :src="require('@/assets/img/product-detail/产品SLiM1000.png')">
            </div>
          </el-col>
          <el-col :span="14">
            <div class="f28 M">扫描光场显微系统SLiM1000</div>
            <el-row>
              <el-col :span="8">
                <div class="f18 R" style="margin-top: 30px; line-height: 36px;">
                  <p>品牌： 荷湖</p>
                  <p>产地： 中国</p>
                  <p>型号： SLiM1000</p>
                  <p>关键词： 三维、活体</p>
                </div>
              </el-col>
              <el-col :span="16">
                <p class="f18 R" style="margin-top: 30px; line-height: 36px;">联系我们：</p>
                <img :src="require('@/assets/img/home/荷湖公众号二维码.png')">
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="item-divider" />
        <div class="item">
          <div class="title f28 M">产品简介 <span class="L">>></span></div>
          <div class="f18 R item-content">
            <p style="text-indent: 30px; margin-bottom: 30px;">
              大组织透明化成像仪器SLiM-TC采用自主研发的动态虚拟光片平铺技术，克服了传统光片显微镜3D空间分辨率、Z轴层析能力和成像视野之间的矛盾，摒弃了原有选择性平面照明显微镜中的单光 片照明的方式，利用多个薄的光片分段照明，在不损失成像视野的情况下，获得高分辨率的3D图像。LS18平铺光片显微镜具有高速高分辨率成像、成像模式灵活可调，多色同时成像等优势。 
            </p>
            <div>使用场景：免疫反应机理、神经活动研究、活体三维活细胞动态观测等</div>
            <div>产品状态：2020年Q1完成V1版产品，正式销售</div>
            <div>产品性能：衍射极限分辨、超快速度、多色、三维体成像、数字像差校正</div>
          </div>
        </div>
        <div class="item-divider" />
        <div class="item">
          <div class="title f28 M">技术规格 <span class="L">>></span></div>
          <div class="f18 R item-content">
            //
          </div>
        </div>
        <div class="item-divider" />
        <div class="item">
          <div class="title f28 M">应用案例 <span class="L">>></span></div>
          <el-row style="padding: 40px 0 60px;">
            <el-col :span="12">
              <div class="item-img" style="height: 420px; margin-left: -50px;">
                <img :src="require('@/assets/img/product-detail/图层 1247.png')">
              </div>
            </el-col>
            <el-col :span="12">
              <div class="item-img" style="height: 420px; margin-right: -50px;">
                <img :src="require('@/assets/img/product-detail/图层 1248.png')">
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.bread {
  padding: 10px 0;
}
.bread>>>.el-breadcrumb__separator,
.bread>>>.el-breadcrumb__inner {
  color: unset;
}
.split-line {
  display: inline-block;
  border-top: 2px dotted #8e83bb;
  width: 100%;
  height: 12px;
}
.bg {
  background: #8F84BC;
  /* height: 148px; */
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
  height: 2px;
  background: #8e83bb;
}
.title {
  padding: 40px 20px 0;
}
.icon-img {
  display: inline-block;
  height: 50px;
  vertical-align: middle;
  margin-right: 10px;
}
.item {
  padding: 0 20px 60px;
}
.item-img {
  text-align: center;
  height: 280px;
}
.item-img>img {
  height: 100%;
}
.item-content {
  padding: 20px 20px 0;
  line-height: 30px;
}
.item-content-height {
  height: 180px;
}
.item-divider {
  height: 10px;
  background: #8e83bb;
}
.margin-top {
  margin-top: 20px;
}
.btn {
  font-size: 14px;
  background: #8e83bb;
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
  color: #8F84BC;
}
</style>
