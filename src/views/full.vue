<template>
    <el-dialog :visible.sync="showFull" size="full">
        <div slot="title">
            <el-button class="prev" type="text">上一条</el-button>
            <span>晒图(999)</span>
            <el-button class="next" type="text">下一条</el-button>
        </div>
        <div class="content clearfix">
            <div class="fl">
                <el-carousel ref="carousel" height="500px" :autoplay="false" indicator-position="none">
                    <el-carousel-item v-for="item in 10" :key="item">
                        <img src="dist/icon.png" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="fl right">
                <user></user>
                <p>
                    顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。
                </p>
                <div class="clearfix">
                    <div v-for="(i,k) in 10" :key="k" @click="changeOver(k)" class="item fl">
                        <img src="dist/icon.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </el-dialog>
</template>
<script>
import user from '../components/user.vue'
export default {
    /*async mounted () {
        console.log(await Vue.$api.getComments({pageIndex:0}));
    }*/
    components: {
        user
    },
    data() {
        return {
            showFull:true
        };
    },
    methods: {
        changeOver(index){
            this.$refs.carousel.setActiveItem(index);
        }
    }
}
</script>
<style lang="scss" scoped>
.el-carousel{
    img{
        width: 100%;
    }
}
.el-dialog__header{
    position: relative;
    >div{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        width: 50%;
    }
}
.prev{
    +span{
        display: inline-block;
        margin:0 20%;
    }
}
.content{
    padding-top: 10px;
    width: 1000px;
    margin: 0 auto;
    >div{
        width: 50%;
        padding:0 10px;
    }
    .right{
        >p{
            height: 240px;
            overflow: auto;
            margin: 10px 0;
            border: 1px solid #333;
            padding: 5px;
            line-height: 25px;
        }
        .item{
            width: 18%;
            margin:5px 2% 0 0;
            padding:5px;
            cursor: pointer;
            img{
                width: 100%;
                display: block;
            }
        }
        .active{
            border:1px solid #ccc;
        }
    }
}
.user{
    margin:0 0 20px 0;
}
</style>
