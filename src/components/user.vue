<template>
<div class="user clearfix">
    <div class="fl">
        <img class="fl" :src="getPicUrl('img/icon.png')" alt="会员图标">
        <span class="fl">{{user.displayUserNick}}</span>
    </div>
    <div class="date fr">{{user.rateDate.slice(0,9)}}</div>
    <p v-if="user!=0">收货后***天</p>
</div>
</template>
<script>
export default {
    methods: {
        getPicUrl(url){
            return chrome.extension.getURL(url);
        }
    },
    computed: {
        user(){
            return JSON.parse(this.data);
        }
    },
    props: ['data','user'],
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
