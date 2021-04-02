<template>
    <div class="right-bar">
        <div class="rightbar-item">
            <div class="avatar-border">
                <img src="../../static/img/123.jpg" alt="">
                <span class="iconfont icon-jia"></span>
            </div>
        </div>
        <div class="item-icon">
            
            <span class="iconfont icon-pinglun4"></span>
            <p>18w</p>
        </div>
        <div class="item-icon">
            <span class="iconfont icon-fenxiang"></span>
            <p>18w</p>
        </div>
        <div class="item-icon icon-xinaixin">
            <span class="iconfont"></span>
            <p>18w</p>
        </div>
        <div class="rightbar-item">
            <div class="right-music">
                 <img src="../../static/img/123.jpg" alt="">
            </div>
        </div>
    </div>

</template>
<script>
export default {
    
}
</script>
<style scoped>
   
    .right-bar .rightbar-item{
        height:60px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
    }
    .avatar-border{
        width:50px;
        height:50px;
        border: 1px white solid;
        border-radius: 50%;
        position: relative;
        text-align: center;
    }
    .avatar-border img{
        width:49px;
        height:49px;
        border-radius: 50%;
      
    }
    .avatar-border .icon-jia{
        color:#FE2C5A;
        position:absolute;
        font-size: 20px;
        top: 42px;
        left: 0;
        right: 0;
    }
    .right-bar .item-icon{
        text-align: center;
        padding-top: 12px;
        height: 60px;
    }
    .item-icon .iconfont{
        color:#ffffff;
        font-size: 30px;
    }
    .item-icon p{
        color: #ffffff;
        font-size: 14px;
        padding-top: 5px;
    }
    .rightbar-item .right-music{
        height: 54px;
        width: 54px;
        background: #2E2E2E;
        border-radius: 50%;
           display: flex;
        justify-content: center;
        align-items: center;
        animation: round 6s 0s linear infinite;
    }
    .right-music img{
        height: 30px;
        width: 30px;
        border-radius: 50%;
    }
    @keyframes round {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }

</style>