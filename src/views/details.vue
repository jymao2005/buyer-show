<template>
<el-dialog title="晒图(999)" :visible.sync="showDetail" size="full">
    <div class="item">
        <user></user>
        <p class="comment">
            顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。顶部导航条一直置顶显示的，追评和晒图两个按钮任意点击单选，内容评价区对应切换。
        </p>
        <five-pic height="150px"></five-pic>
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
    }
}
</script>
<style lang="scss" scoped>
.details{
    >p{
        margin: 10px;
    }
    .comment{
        margin: 10px 0 15px;
    }
}
.item{
    border-bottom: 1px solid #97a8be;
}
.comment{
    height: 100px;
    overflow: auto;
}
</style>
