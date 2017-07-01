<template>
<div class="comment">
    <div class="title">
        <user></user>
        <p class="content" v-show="!showAllContent">
            顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。
            <img @click="showAll" src="dist/down.png" alt="更多">
        </p>
        <p class="content" v-show="showAllContent">
            顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。
        </p>
    </div>
    <div class="content">
        <el-carousel class="carousel1" height="300px" :autoplay="false" indicator-position="none" arrow="never">
            <el-carousel-item v-for="item in 10" :key="item">
                <img src="dist/icon.png" alt="">
            </el-carousel-item>
        </el-carousel>
        <five-pic height='64px'></five-pic>
    </div>
</div>
</template>
<script>
import user from '../components/user.vue'
import fivePic from '../components/fivePic.vue'
export default {
    props: ['layerData'],
    components: {
        user,fivePic
    },
    data () {
        return {
            showAllContent:false,
        }
    },
    mounted () {
        /*setTimeout(()=>{
            this.$children[0].setActiveItem(2);   
        },1000)*/
    },
    methods: {
        showAll(){
            this.showAllContent = !this.showAllContent;
        },
    }
}
</script>
<style scoped lang='scss'>
.comment{
    padding:5px 0;
}
.title{
    line-height: 30px;
    padding: 5px 0;
    .content{
        position: relative;
        margin-top: 5px;
        text-align: left;
        font-size: 14px;
        img{
            position: absolute;
            right: 0;
            bottom: 0;
            width: 20px;
            cursor: pointer;
        }
    }
}
.carousel1{
    img{
        width: 100%;
    }
}
</style>

