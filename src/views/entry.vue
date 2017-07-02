<template>
    <div class="gj-gallery-tab clearfix" id="gj-gallery-tab" style="margin-top: 0px;">
        <a class="gj-gallery-tab-logo" title="觅鱼网购助手由腾讯电脑管家提供" href="http://mmm.qq.com/?ADTAG=media.bj.buyer_show_tab.logo" target="_blank">
            <div class="gj-gallery-tab-icon"></div>
        </a>
        <div class="gj-gallery-tab-text gj-comments-tab-buyer-show" title="点击查看买家秀，帮您快速做出购买决策	">买家秀
            <span class="color-red">28</span>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>

<style scoped lang='scss'>
.gj-gallery-tab {
    padding-top: 10px;
    padding-left: 10px;
    float: left;
    cursor: pointer;
    font-family: 微软雅黑, 'Microsoft YaHei';
    font-size: 12px;
    color: rgb(102, 102, 102);
    background-color: rgb(255, 255, 255);
}
.gj-gallery-tab-logo {
    float: left;
    background-color: rgb(255, 73, 88);
    width: 29px;
    height: 29px;
    padding: 0px !important;
    border-right: none !important;
}
.gj-gallery-tab-icon {
    background-image: url("se-extension://ext-1542696855/images/wggj/logo.png");
    display: block;
    width: 20px;
    height: 20px;
    margin: 5px;
}
.gj-gallery-tab-text {
    float: left;
    line-height: 26px;
    border: 2px solid rgb(255, 73, 88);
    padding: 0px 5px;
}
.color-red {
    font-weight: bold;
    color: rgb(255, 73, 88);
}
</style>
