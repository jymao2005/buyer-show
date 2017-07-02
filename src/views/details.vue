<template>
<el-dialog title="晒图(999)" :visible.sync="showDetail" size="large">
    <div class="item" v-for="item in rateList" :key="item">
        <user :data='item' :append='append'></user>
        <p class="comment">
            {{item.rateContent}}
        </p>
        <five-pic :data="item.pics" height="162px" @index-change='gotoFull' @click.native="change(1)"></five-pic>
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
            showDetail:false,
            rateList:{},
            append:0
        }
    },
    methods: {
        gotoFull(index){
            console.log(index);
        },
        change(index){
            console.log(index);

        }
    },
    async mounted(){
        this.rateList = await this.$api.getComments({pageIdx:3}).rateList;
        console.log(this.rateList);
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

