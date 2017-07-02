<template>
    <div class="gallery-tab clearfix" @click.stop="showDetails" id="gallery-tab" style="margin-top: 0px;">
        <a class="gallery-tab-logo" title="觅鱼网购助手由腾讯电脑管家提供">
            <div class="gallery-tab-icon"></div>
        </a>
        <div class="gallery-tab-text comments-tab-buyer-show" title="点击查看买家秀，帮您快速做出购买决策">买家秀
            <span class="color-red" v-text="comments.paginator.items"></span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            comments:{}
        }
    },
    methods: {
        showDetails(){
            this.$emit('showDetails');
        }
    },
    async created(){
        this.comments = await this.$api.getComments({pageIdx:3});
    }
}
</script>

<style scoped lang='scss'>
.gallery-tab {
    padding-top: 10px;
    padding-left: 10px;
    float: left;
    cursor: pointer;
    font-family: 微软雅黑, 'Microsoft YaHei';
    font-size: 12px;
    color: rgb(102, 102, 102);
    background-color: rgb(255, 255, 255);
}
.gallery-tab-logo {
    float: left;
    background-color: rgb(255, 73, 88);
    width: 29px;
    height: 30px;
    padding: 0px !important;
    border-right: none !important;
}
.gallery-tab-icon {
    background-image: url("se-extension://ext-1542696855/images/wggj/logo.png");
    display: block;
    width: 20px;
    height: 20px;
    margin: 5px;
}
.gallery-tab-text {
    float: left;
    line-height: 27px;
    border: 2px solid rgb(255, 73, 88);
    padding: 0px 5px;
}
.color-red {
    font-weight: bold;
    color: rgb(255, 73, 88);
}
</style>
