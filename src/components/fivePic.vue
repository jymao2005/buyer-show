<template>
<div>    
    <el-carousel class="fivePic" :height="height" :autoplay="false" indicator-position="none">
        <el-carousel-item v-for="(item,key) in data" :key="key">
            <div v-for="(i,k) in 5" :key="k" @click="changeOver(key*5+k)" class="item fl">
                <img :src="item">
            </div>
        </el-carousel-item>
    </el-carousel>
</div>
</template>
<script>
export default {
    props: ['height','data'],
    methods: {        
        changeOver(index){
            //console.log(index) 
            this.$emit("index-change",index);
        }
    },
    computed: {
        changeData(){
            let i=0;
            let arr=[];
            while(i<data.length){
                let end=i+5;
                arr[arr.length]=[];
                if(i+5<data.length) end=data.length;
                Array.push.apply(arr,data.slice(i,end));
                i += 5;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.fivePic{
    width: 100%;
    margin: 20px auto 0;
    .item{
        width: 18%;
        margin:0 1%;
        padding:5px;
        cursor: pointer;
        img{
            width: 100%;
            display: block;
        }
    }
    .active{
        border:1px solid #c60;
    }
}
</style>
<style lang='scss'>
.fivePic{
    .el-carousel__item{
        padding: 0 22px;
    }
    .el-carousel__arrow--left{
        left: 0!important;
    }
    .el-carousel__arrow--right{
        right: 0!important;
    }
    .el-carousel__arrow{
        width: 30px;
        height: 30px;
    }
}
</style>
