<template>
  <div>
    <img class="title-bg" :src="require('@/assets/img/product/标题背景框.png')">
    <div class="title-div">
      <span class="f72 B">产品中心</span>
      <span class="f36 L">PRODUCTS</span>
    </div>
    <div class="bg" />
    <div class="block empty1" />
    <div class="block">
      <div class="block-content">
        <div class="po">
          <div class="po-img">
            <img :src="require('@/assets/img/product/破折号.png')">
          </div>
          <div class="f40 R">
            我们围绕生命科学中多维度、多尺度的高质量观测需求，提供令人惊叹的先进光学成像仪器，以及配套耗材、试剂。
          </div>
        </div>
      </div>
    </div>

    <div class="divider" />

    <div class="block">
      <div class="block-content">
        <div class="title f40 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/product/Icon--仪器.png')">
          </div>
          仪器
        </div>
        <el-row class="item">
          <el-col :span="4">
            <div class="item-img">
              <img :src="require('@/assets/img/home/产品SLiM1000.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">扫描光场显微系统SLiM1000</div>
              <div class="f18 R margin-top">
                同时满足生命科学大视野、高分辨、高速、3D成像需求，具备矫正活体组织像差的能力。
              </div>
            </div>
            <div>
              <span class="btn">了解更多>></span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="divider" />

    <div>
      <div class="block-content">
        <div class="title f40 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/product/Icon--耗材.png')">
          </div>
          耗材
        </div>
        <el-row class="item">
          <el-col :span="4">
            <div class="item-img">
              <img :src="require('@/assets/img/product/图层 1237_5.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">IBAC S1芯片</div>
              <div class="f18 R margin-top">
                针对大组织样本的3D荧光成像，运用创新的扫描光场成像技术，克服传统光场显微镜空间分辨率不足的问题;采用自主研发的动态虚拟光片平铺技术，克服 了传统光片显微镜3D空间分辨率、Z轴层析能力和成像视野之间的矛盾，摒弃了原有选择性平面照明显微镜中的单光片照明的方式，利用多个薄的光片分段 照明，在不损失成像视野的情况下，获得高分辨率的3D图像。
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
              <img :src="require('@/assets/img/product/图层 1237_3.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">IBAC M1芯片</div>
              <div class="f18 R margin-top">
                针对大组织样本的3D荧光成像，运用创新的扫描光场成像技术，克服传统光场显微镜空间分辨率不足的问题;采用自主研发的动态虚拟光片平铺技术，克服 了传统光片显微镜3D空间分辨率、Z轴层析能力和成像视野之间的矛盾，摒弃了原有选择性平面照明显微镜中的单光片照明的方式，利用多个薄的光片分段 照明，在不损失成像视野的情况下，获得高分辨率的3D图像。              
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
              <img :src="require('@/assets/img/product/图层 1237_2.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">IBAC M2芯片</div>
              <div class="f18 R margin-top">
                针对大组织样本的3D荧光成像，运用创新的扫描光场成像技术，克服传统光场显微镜空间分辨率不足的问题;采用自主研发的动态虚拟光片平铺技术，克服 了传统光片显微镜3D空间分辨率、Z轴层析能力和成像视野之间的矛盾，摒弃了原有选择性平面照明显微镜中的单光片照明的方式，利用多个薄的光片分段 照明，在不损失成像视野的情况下，获得高分辨率的3D图像。
              </div>
            </div>
            <div>
              <span class="btn">了解更多>></span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="divider" />

    <div class="block">
      <div class="block-content">
        <div class="title f40 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/product/Icon--试剂.png')">
          </div>
          试剂
        </div>
        <el-row class="item">
          <el-col :span="4">
            <div class="item-img">
              <img :src="require('@/assets/img/product/图层 1237_4.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">人源类器官培养试剂盒</div>
              <div class="f18 R margin-top">
                针对大组织样本的3D荧光成像，运用创新的扫描光场成像技术，克服传统光场显微镜空间分辨率不足的问题;采用自主研发的动态虚拟光片平铺技术，克服 了传统光片显微镜3D空间分辨率、Z轴层析能力和成像视野之间的矛盾，摒弃了原有选择性平面照明显微镜中的单光片照明的方式，利用多个薄的光片分段 照明，在不损失成像视野的情况下，获得高分辨率的3D图像。
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
              <img :src="require('@/assets/img/product/图层 1237_1.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">动物类器官培养试剂盒</div>
              <div class="f18 R margin-top">
                针对大组织样本的3D荧光成像，运用创新的扫描光场成像技术，克服传统光场显微镜空间分辨率不足的问题;采用自主研发的动态虚拟光片平铺技术，克服 了传统光片显微镜3D空间分辨率、Z轴层析能力和成像视野之间的矛盾，摒弃了原有选择性平面照明显微镜中的单光片照明的方式，利用多个薄的光片分段 照明，在不损失成像视野的情况下，获得高分辨率的3D图像。
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
              <img :src="require('@/assets/img/product/图层 1237.png')">
            </div>
          </el-col>
          <el-col :span="18" class="item-content">
            <div class="item-content-height">
              <div class="f28 M">人源类器官培养基</div>
              <div class="f18 R margin-top">
                针对大组织样本的3D荧光成像，运用创新的扫描光场成像技术，克服传统光场显微镜空间分辨率不足的问题;采用自主研发的动态虚拟光片平铺技术，克服 了传统光片显微镜3D空间分辨率、Z轴层析能力和成像视野之间的矛盾，摒弃了原有选择性平面照明显微镜中的单光片照明的方式，利用多个薄的光片分段 照明，在不损失成像视野的情况下，获得高分辨率的3D图像。
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
  background: #8F84BC;
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
  background: #8e83bb;
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
  width: 100%;
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
  background: #8e83bb;
  opacity: .3;
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
