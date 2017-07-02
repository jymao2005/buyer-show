<template>
<div class="layer" :class="{tmleft:!tmRight,tmRight:tmRight}">
    <div class="title clearfix">
        <img class="fl" :src="getPicUrl('img/icon.png')" alt="logo">
        <div class="fl">
            <el-radio class="radio" v-model="radio" label="1">追评(123)</el-radio>
            <el-radio class="radio" v-model="radio" label="2">晒图(123)</el-radio>
            <a class="fr" href="">首次使用有问题点击这里</a>
        </div>
    </div>
    <div class="content">
        <ul class="comments">
            <li v-for="item in 3" :key='item'>
                <comment @selectPic='selectPic'></comment>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import comment from '../components/comment.vue'
export default {
    data () {
        return {
            radio:2
        }
    },
    methods: {
        getPicUrl(url){
            return chrome.extension.getURL(url);
        },
        selectPic(index){
            console.log(1,index);
            this.$emit('selectPic',index);
        }
    },
    components: {
        comment
    },
    props: ['tmRight'],
    mounted () {
        
    }
}
</script>
<style scoped lang="scss">
.layer{
    width: 400px;
    font-size: 12px;
    position: relative;
    padding-top: 60px;
    background: #fff;
    border: 1px solid rgb(179, 179, 179);
    position: absolute;
    left: 206px;
    z-index: 2;
    top: 0;
    &:before {
        content: "";
        width: 8px;
        height: 8px;
        transform: rotate(-45deg);
        position: absolute;
        z-index: 99;
        left: -5px;
        top: 30px;
        background: rgb(255, 255, 255);
        border-left: 1px solid rgb(206, 206, 206);
        border-top: 1px solid rgb(206, 206, 206);
    }
}
.tmleft{
    left: -403px;
    &:before{
        left: 395px;
    }
}
.tmRight{
    left: 206px;
}
.title{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    border-bottom: 1px solid #97a8be;
    padding:10px;
    img{
        height: 40px;
        margin-right: 15px;
    }
    >div{
        width: calc(100% - 55px);
        height: 40px;
        line-height: 40px;
    }
    a{
        color:#1f2d3d;
        text-decoration: none;
    }
    .el-radio+.el-radio{
        margin-left: 5px;
    }
}
.content{
    height: 400px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0px;
    }
    .comments{
        padding:0 15px;
        li:not(:last-child){
            border-bottom: 1px solid #97a8be;
        }
    }
}
</style>
