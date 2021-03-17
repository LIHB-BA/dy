<template>
    <div class="table-bar">
        <div class="item" @click="changeTab(0)">
            <router-link to="/index" tag="span" :class="tabIndex==0?'active':''">首页</router-link>
        </div>
        <div class="item" @click="changeTab(1)">
            <router-link to="/follow" tag="span" :class="tabIndex==1?'active':''">熟人</router-link>
        </div>
        <div class="item" @click="changeTab(2)">
            <router-link to="/index" tag="span" :class="tabIndex==2?'active':''">
                <img class="dy-btn" src="../../static/img/dy-btn.png" alt="">
            </router-link>
        </div>
        <div class="item" @click="changeTab(3)">
            <router-link to="/index" tag="span"  :class="tabIndex==3?'active':''">消息</router-link>
        </div>
        <div class="item" @click="changeTab(4)">
            <router-link to="/index" tag="span"  :class="tabIndex==4?'active':''">我</router-link>
        </div>


    </div>
</template>
<script>
export default {
    data(){
        return{
            tabIndex:0
        }
    },
    methods:{
        changeTab(index){
            this.tabIndex = index;
        }
    }
}
</script>
<style scoped>
    .table-bar{
        height: 50px;
        line-height: 50px;
        width: 100%;
        background: #000;
        position:fixed;
        bottom: 0;
        left: 0;
        color: #cccccc;
        font-size: 16px;
        display: flex;
        justify-items: center;
        z-index: 999;

    }
    .table-bar .item{
        flex: 1;
        text-align: center;
    }
    /* .table-bar .item .span{
        padding: 7px 0;
    } */
    .table-bar .item .active{
        color: #ffffff;
    } 
    .table-bar .item .active .dy-btn{
        padding: 7px;
    }
</style>