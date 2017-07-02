<template>
<div class="user clearfix">
    <div class="fl">
        <img class="fl" :src="getPicUrl('img/icon.png')" alt="会员图标">
        <span class="fl">8******6</span>
    </div>
    <div class="date fr">2017.1.1</div>
    <p>收货后***天</p>
</div>
</template>
<script>
export default {
    methods: {
        getPicUrl(url){
            return chrome.extension.getURL(url);
        }
    }
}
</script>
<style lang="scss" scoped>
.user{
    line-height: 30px;
    img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
}
p{
    text-align: center;
}
</style>
