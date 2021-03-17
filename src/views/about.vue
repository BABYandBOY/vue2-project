<template>
  <div>
    <img class="title-bg" :src="require('@/assets/img/about/标题背景框.png')">
    <div class="title-div">
      <span class="f72 B">关于我们</span>
      <span class="f36 L">ABOUT</span>
    </div>
    <div class="bg" />
    <div class="block empty1" />
    <div class="block">
      <div class="block-content">
        <div class="po">
          <div class="po-img">
            <img :src="require('@/assets/img/about/破折号.png')">
          </div>
          <div class="f40 R">
            我们致力于通过自主可控技术和跨界融合文化将生命科学研究、药物发现与精准医疗事业推向突破传统模式的边界。
          </div>
        </div>
      </div>
    </div>

    <div class="divider" />

    <div class="block shadow">
      <div class="block-content">
        <div class="title f40 M">
          <span class="title-span">
            公司简介
          </span>
        </div>
        <el-row class="item" :gutter="60">
          <el-col :span="14">
            <div class="f18 R item-content">
              <p>
                <b>浙江荷湖科技有限公司</b>是由清华大学戴琼海院士领衔，汇聚信息技术、光学和生命科学交叉领域的精英团队共 同创建的高科技公司，目前承担了国家自然科学基金重大专项成果转化工作，自主掌握先进显微 成像、类器官培养、认知计算相关核心技术并达到国际领先水平，致力于开发极具竞争力的创新产品和平台级解决 方案赋能生命科学研究、药物研发与精准医疗。
              </p>
              <p>
                公司研发团队依托<b>清华大学脑与认知科学研究院</b>，二十余年来一直在计算摄像学、生命科学、数字媒体、 人工智能等交叉领域深耕，成果发表于Cell、Sciences、Nature Photonics，Nature Neuroscience, Nature Method等国际顶级期刊，多次获得国家科技进步及发明奖。
              </p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="item-img">
              <img :src="require('@/assets/img/about/公司简介配图.png')">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="shadow">
      <div class="block-content">
        <div class="title f40 M">
          <span class="title-span">
            公司文化
          </span>
        </div>
        <div class="f18 R" style="padding: 60px 0 14px 30px;">
          我们以帮助合作伙伴探索生物奥秘、发掘疾病机理、开发诊疗新策略为己任，以提高人类健康水平为目标而努力奋斗。
        </div>
        <el-row class="item" :gutter="134">
          <el-col :span="8">
            <div class="item-img">
              <img :src="require('@/assets/img/about/愿景配图.png')">
            </div>
            <div class="cWhite img-text1">
              <div class="f28 M">愿景</div>
              <div class="f18 R">成为先进成像、数据与智能技术驱动的全球领先的生物计算平台</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item-img">
              <img :src="require('@/assets/img/about/使命配图.png')">
            </div>
            <div class="cWhite img-text2">
              <div class="f28 M">使命</div>
              <div class="f18 R">围绕生命科学、药物研发和精准医疗构建新型平台级解决方案，为人类健康福祉持续贡献科技动能</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item-img">
              <img :src="require('@/assets/img/about/价值观配图.png')">
            </div>
            <div class="cWhite img-text1">
              <div class="f28 M">价值观</div>
              <div class="f18 R">客户第一，开放创新，团队合作 艰苦奋斗，结果导向，追求卓越</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="block" style="margin-top: 3px;">
      <div class="block-content">
        <div class="title f40 M">
          <span class="title-span">
            联系我们
          </span>
        </div>
        <el-row class="item" :gutter="60">
          <el-col :span="12">
            <div class="f18 R">
              <p>我们的事业需要生态力量的加持。我们期待与国内外学术机构、医疗机构、制药公司、生物科技公司一起共同努力来加速实现宏愿。</p>
              <p>联系电话：0571-XXXXXXXX</p>
              <p>业务合作：bd@hehutek.com；企业微信二维码。</p>
              <p>销售咨询：sales@hehutek.com；企业微信二维码。</p>
              <p>人才招聘：hr@hehutek.com</p>
            </div>
            <div style="color: #70b855; margin-top: 40px;">了解更多>></div>
          </el-col>
          <el-col :span="12">
            <div class="item-img">
              <img :src="require('@/assets/img/about/公司简介配图.png')">
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
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
  margin-top: 60px;
  padding: 0 20px 60px;
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
  width: 254px;
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
</style>
