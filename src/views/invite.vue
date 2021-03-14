<template>
  <div>
    <el-carousel trigger="click" height="500px">
      <el-carousel-item v-for="(item, i) in BannerList" :key="i">
        <img :src="item" class="Banner">
      </el-carousel-item>
    </el-carousel>
    <div class="block-content f18 R" style="text-indent: 30px; padding: 74px 0 60px;">
      我们正在构建一支高度跨学科融合的团队，包括生命科学、药物研发、数据科学、人工智能、软件开发、光学设计专家。我们希望通过努力，能让生命科学家从繁重实验中解脱出来专注于探索生物系统的核心问题与奥秘，让药物研发效率、成功率更高以及成本更低，让医生能为患者提供更优质药物和更精准的疗法。
    </div>
    <div class="divider" />
    <div class="block-content">
      <div class="title f28 M">我们提供 >></div>
      <div class="item" style="position: relative;">
        <div class="item-img">
          <img :src="require('@/assets/img/invite/装饰框.png')">
        </div>
        <div class="text-div1">
          <p class="f18 M title-color">薪酬福利</p>
          <ul class="f18 R ul">
            <li><b>·</b> 具有竞争力薪酬</li>
            <li><b>·</b> 协助符合条件人才申请杭州人才计划</li>
            <li><b>·</b> 五险一金全额缴纳</li>
            <li><b>·</b> 带薪年假</li>
            <li><b>·</b> 弹性工作，周末双休</li>
            <li><b>·</b> 年度高端体检、节日礼品</li>
            <li><b>·</b> 优越的办公环境</li>
          </ul>
        </div>
        <div class="text-div2">
          <p class="f18 M title-color">团队文化</p>
          <ul class="f18 R ul">
            <li><b>·</b> 奖励辛勤劳作、创造力和协作的积极文化</li>
            <li><b>·</b> 重视正值、灵活和求知欲</li>
            <li><b>·</b> 重视背景、思想的多样性</li>
            <li><b>·</b> 扁平化管理，秉承简单高效、结果导向、</li>
            <li style="padding-left: 10px;"> 开放沟通的工作方式</li>
          </ul>
        </div>
        <div class="text-div3">
          <p class="f18 M title-color">更多收获</p>
          <ul class="f18 R ul">
            <li><b>·</b> 极具前景的行业（高端仪器、生物医药、人工智能）</li>
            <li><b>·</b> 广阔的职业发展空间</li>
            <li><b>·</b> 顶级名校交流培训机会</li>
            <li><b>·</b> 不仅是一份工作，而是有巨大社会价值和影响力的事业</li>
          </ul>
        </div>
      </div>
      <div class="item-divider" style="opacity: 1;" />
      <div>
        <div class="title f28 M" style="padding-left: 20px;">开放职位 >></div>
        <div class="item" style="padding-bottom: 32px;">
          <div class="f24 M title-color">细胞培养工程师</div>
          <div class="f18 R" style="margin-top: 10px;">杭州总部 • 全职</div>
          <div class="f18 R text-p">
            <div class="text-p-title">工作职责</div>
            <p>1. 硕士及以上学历，分子生物学，生物化学，细胞生物学等相关专业；</p>
            <p>2. 具有以下工作经验者优先考虑：原代细胞样本处理，原代细胞分离，培养，转染实验经验；免疫细胞实验经验；细胞基因编辑经验；</p>
            <p>3. 性格开朗，工作积极主动，踏实认真，能够承受一定工作压力, 善于团队协作。</p>
          </div>
          <div class="f18 R text-p">
            <div class="text-p-title">任职要求</div>
            <p>1. 项目管理</p>
            <p>2. 指导实验开展，原代细胞及细胞系培养，细胞生物学相关实验；</p>
            <p>3. 完成领导布置的其他任务。</p>
          </div>
          <div class="f18 R text-p">
            <div class="text-p-title">联系方式</div>
            <p>E-MAIL： hr@hehutek.com</p>
            <p>联系地址： 浙江省杭州市余杭区数字健康小镇3#楼3层</p>
          </div>
        </div>
        <div class="item-divider" />
        <div class="item" style="padding-bottom: 32px;">
          <div class="f24 M title-color">类器官研发工程师</div>
          <div class="f18 R" style="margin-top: 10px;">杭州总部 • 全职</div>
          <div class="f18 R text-p">
            <div class="text-p-title">工作职责</div>
            <p>1. 硕士及以上学历，分子生物学，生物化学，细胞生物学等相关专业；</p>
            <p>2. 具有以下工作经验者优先考虑：原代细胞样本处理，原代细胞分离，培养，转染实验经验；免疫细胞实验经验；细胞基因编辑经验；</p>
            <p>3. 性格开朗，工作积极主动，踏实认真，能够承受一定工作压力, 善于团队协作。</p>
          </div>
          <div class="f18 R text-p">
            <div class="text-p-title">任职要求</div>
            <p>1. 项目管理</p>
            <p>2. 指导实验开展，原代细胞及细胞系培养，细胞生物学相关实验；</p>
            <p>3. 完成领导布置的其他任务。</p>
          </div>
          <div class="f18 R text-p">
            <div class="text-p-title">联系方式</div>
            <p>E-MAIL： hr@hehutek.com</p>
            <p>联系地址： 浙江省杭州市余杭区数字健康小镇3#楼3层</p>
          </div>
        </div>
        <div class="item-divider" />
        <div class="item" style="padding-bottom: 32px;">
          <div class="f24 M title-color">软件研发工程师</div>
          <div class="f18 R" style="margin-top: 10px;">杭州总部 • 全职</div>
          <div class="f18 R text-p">
            <div class="text-p-title">工作职责</div>
            <p>1. 硕士及以上学历，分子生物学，生物化学，细胞生物学等相关专业；</p>
            <p>2. 具有以下工作经验者优先考虑：原代细胞样本处理，原代细胞分离，培养，转染实验经验；免疫细胞实验经验；细胞基因编辑经验；</p>
            <p>3. 性格开朗，工作积极主动，踏实认真，能够承受一定工作压力, 善于团队协作。</p>
          </div>
          <div class="f18 R text-p">
            <div class="text-p-title">任职要求</div>
            <p>1. 项目管理</p>
            <p>2. 指导实验开展，原代细胞及细胞系培养，细胞生物学相关实验；</p>
            <p>3. 完成领导布置的其他任务。</p>
          </div>
          <div class="f18 R text-p">
            <div class="text-p-title">联系方式</div>
            <p>E-MAIL： hr@hehutek.com</p>
            <p>联系地址： 浙江省杭州市余杭区数字健康小镇3#楼3层</p>
          </div>
        </div>
        <div class="item-divider" />
        <div class="item">
          <div class="f24 M title-color">软件研发工程师</div>
          <div class="f18 R" style="margin-top: 10px;">杭州总部 • 实习</div>
          <div class="f18 R text-p">
            <div class="text-p-title">工作职责</div>
            <p>1. 硕士及以上学历，分子生物学，生物化学，细胞生物学等相关专业；</p>
            <p>2. 具有以下工作经验者优先考虑：原代细胞样本处理，原代细胞分离，培养，转染实验经验；免疫细胞实验经验；细胞基因编辑经验；</p>
            <p>3. 性格开朗，工作积极主动，踏实认真，能够承受一定工作压力, 善于团队协作。</p>
          </div>
          <div class="f18 R text-p">
            <div class="text-p-title">任职要求</div>
            <p>1. 项目管理</p>
            <p>2. 指导实验开展，原代细胞及细胞系培养，细胞生物学相关实验；</p>
            <p>3. 完成领导布置的其他任务。</p>
          </div>
          <div class="f18 R text-p">
            <div class="text-p-title">联系方式</div>
            <p>E-MAIL： hr@hehutek.com</p>
            <p>联系地址： 浙江省杭州市余杭区数字健康小镇3#楼3层</p>
          </div>
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
        require('@/assets/img/invite/Banner.png')
      ]
    }
  }
}
</script>

<style scoped>
.text-p {
  margin-top: 50px;
}
.text-p-title {
  border-left: 4px solid #70B954;
  padding-left: 10px;
}
.text-p>p {
  line-height: 20px;
}
.Banner {
  width: 100%;
  height: 100%;
}
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
  height: 2px;
  background: #70b855;
}
.title {
  padding: 40px 0 0;
}
.title-span {
  border-left: 8px solid #70b855;
  padding-left: 30px;
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
}
.item-img>img {
  width: 100%;
}
.item-content {
  line-height: 40px;
  text-indent: 30px;
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
.img-text1 {
  position: absolute;
  width: 250px;
  text-align: center;
  padding-left: 64px;
  bottom: 88px;
}
.img-text2 {
  position: absolute;
  width: 335px;
  text-align: center;
  padding-left: 22px;
  bottom: 78px;
}
.title-color {
  color: #70B954;
}
.ul {
  list-style-type: none;
  padding-inline-start: unset;
  line-height: 30px;
}
.text-div1 {
  position: absolute;
  top: 134px;
  left: 76px;
}
.text-div2 {
  position: absolute;
  top: 366px;
  left: 566px;
}
.text-div3 {
  position: absolute;
  top: 84px;
  left: 936px;
}
</style>
