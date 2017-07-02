<template>
<el-dialog title="晒图(999)" :visible.sync="showDetail" size="large">
    <div class="item">
        <user></user>
        <p class="comment">
            顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。
        </p>
        <five-pic height="162px" @index-change='gotoFull' @click.native="change(1)"></five-pic>
    </div>
</el-dialog>
</template>
<script>
import fivePic from '../components/fivePic.vue'
import user from '../components/user.vue'
export default {
    components: {
        user,fivePic
    },
    data () {
        return {
            showDetail:true
        }
    },
    methods: {
        gotoFull(index){
            console.log(index);
        },
        change(index){
            console.log(index);

        }
    }
}
</script>
<style lang="scss" scoped>

.item{
    padding-bottom: 15px;
    border-bottom: 1px solid #97a8be;
    width: 1000px;
    margin: 0 auto;
}
.user{
    margin:50px 0 10px;
}
.details{
    >p{
        margin: 10px;
    }
    .comment{
        margin: 10px 0 15px;
    }
}
.comment{
    height: 100px;
    overflow: auto;
    border: 1px solid #333;
    padding: 7px;
    line-height: 25px;
}
</style>
<style>
.el-dialog__body{
    overflow: auto;
}
</style>

