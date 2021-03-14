<template>
  <div>
    <img class="title-bg" :src="require('@/assets/img/platform/标题背景框.png')">
    <div class="title-div">
      <span class="f72 B">技术平台</span>
      <span class="f36 L">PLATFORMS</span>
    </div>
    <div class="bg" />
    <div class="block empty1" />
    <div class="block">
      <div class="block-content">
        <div class="po">
          <div class="po-img">
            <img :src="require('@/assets/img/platform/破折号.png')">
          </div>
          <div class="f40 R">
            以数据驱动为核心，以工业化改造为标准，联合类器官、3D成像、自动化、AI技术， 赋能生命科学、药物研发与个性化治疗。
          </div>
        </div>
      </div>
    </div>

    <div class="divider" />

    <div class="block">
      <div class="block-content">
        <div class="title f40 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/platform/Icon--基础设施.png')">
          </div>
          新型基础设施
        </div>
        <el-row class="item">
          <el-col :span="24">
            <div class="f18 R" style="padding-bottom: 40px;">
              我们在构建一套全新的生物计算基础设施，不断迭代、持续进化。
            </div>
            <div class="item-img">
              <img :src="require('@/assets/img/platform/数据驱动全流程.png')">
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
            <img :src="require('@/assets/img/platform/Icon--核心技术.png')">
          </div>
          核心技术
        </div>
        <el-row class="item" style="padding-bottom: 41px;">
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <div class="item-img-144">
                  <img :src="require('@/assets/img/platform/人类疾病.png')">
                </div>
              </el-col>
              <el-col :span="18">
                <div class="f28 M">人类疾病类器官模型构建</div>
              </el-col>
            </el-row>
            <el-row class="item-content">
              <ul class="f18 R">
                <li>类器官模型精准表达疾病相关遗传学、靶点和细胞类型信息；</li>
                <li>独特打印技术实现标准化、高通量类器官培养和质量控制；</li>
                <li>建模时效性强、成功率高、预测准确，数据稳定。</li>
              </ul>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <div class="item-img-144">
                  <img :src="require('@/assets/img/platform/规模化的.png')">
                </div>
              </el-col>
              <el-col :span="18">
                <div class="f28 M">规模化的自动生物实验</div>
              </el-col>
            </el-row>
            <el-row class="item-content">
              <ul class="f18 R">
                <li>自动化以减少人为扰动与误差，提升容量和能力；</li>
                <li>超越传统生物化学实验，快速生成海量高质量数据，为机器学习提供强大支撑；</li>
                <li>支持更多人类疾病和潜在治疗方法的并行实验。</li>
              </ul>
            </el-row>
          </el-col>
        </el-row>
        <div class="item-divider" />
        <el-row class="item" style="padding-bottom: 41px;">
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <div class="item-img-144">
                  <img :src="require('@/assets/img/platform/适配类器官.png')">
                </div>
              </el-col>
              <el-col :span="18">
                <div class="f28 M">适配类器官的三维成像与数据建模</div>
              </el-col>
            </el-row>
            <el-row class="item-content">
              <ul class="f18 R">
                <li>支持高通量高内涵成像，有利于靶点导向和表型导向的药物发现；</li>
                <li>支持深层、快速、超清三维活体成像，获取更多细节信息；</li>
                <li>三维数据建模比传统二维模型更能加深对人类疾病的理解。</li>
              </ul>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <div class="item-img-144">
                  <img :src="require('@/assets/img/platform/大规模机械学习.png')">
                </div>
              </el-col>
              <el-col :span="18">
                <div class="f28 M">大规模机器学习与数据分析</div>
              </el-col>
            </el-row>
            <el-row class="item-content">
              <ul class="f18 R">
                <li>整合大规模的高维表型数据，并创建全面的疾病系统生物学描述；</li>
                <li>机器学习模型代替人工理解超大规模的高维数据，更精细地识别细胞状态；</li>
                <li>综合从遗传、表型和临床数据中获得洞察力，提供疾病临床治疗方案。</li>
              </ul>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="divider" />

    <div class="block">
      <div class="block-content">
        <div class="title f40 M">
          <div class="icon-img">
            <img :src="require('@/assets/img/platform/Icon--重点应用.png')">
          </div>
          重点应用
        </div>
        <el-row class="item" style="padding-bottom: 40px;">
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <div class="item-img-144">
                  <img :src="require('@/assets/img/platform/药物研发.png')">
                </div>
              </el-col>
              <el-col :span="18">
                <div class="f28 M">药物研发</div>
              </el-col>
            </el-row>
            <el-row class="item-content">
              <div class="f18 R" style="margin-top: 20px; padding-right: 80px; line-height: 30px;">
                医药研发专家基于我们构建的基础设施可以发现未知的疾病亚型、搜索细胞状 态变化干预因素，从而获取靶标鉴定、药物筛选与优化、生物标志物开发、毒性测 试和临床试验设计等方面的新见解。
              </div>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="6">
                <div class="item-img-144">
                  <img :src="require('@/assets/img/platform/精准医疗.png')">
                </div>
              </el-col>
              <el-col :span="18">
                <div class="f28 M">精准医疗</div>
              </el-col>
            </el-row>
            <el-row class="item-content">
              <div class="f18 R" style="margin-top: 20px; padding-right: 80px; line-height: 30px;">
                在患者实施临床治疗前，及时构建出个体化疾病模型，开展特定疾病治疗药物的高 通量测试、自动化筛选与功效评价，并与全外显子测序等技术手段配合，综合应用 多维度信息帮助临床决策，推进疾病的精准化治疗。
              </div>
            </el-row>
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
  height: 2px;
  background: #8e83bb;
}
.title {
  padding: 40px 0 0 20px;
}
.icon-img {
  display: inline-block;
  height: 50px;
  vertical-align: middle;
  margin-right: 10px;
}
.item {
  padding: 60px 20px;
}
.item-img {
  text-align: center;
  width: 100%;
}
.item-img-144 {
  text-align: center;
  width: 100%;
  height: 144px;
}
.item-img>img {
  width: 100%;
}
.item-img-144>img {
  height: 100%;
}
.item-content {
  padding-left: 20px;
}
.item-content-height {
  height: 180px;
}
.item-content>ul {
  line-height: 40px;
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
