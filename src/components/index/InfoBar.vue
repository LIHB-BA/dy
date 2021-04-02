<template>
    <div class="info-bar">
        <div class="info-bar-item"><span>@忆风</span></div>
        <div class="info-bar-item"><span>向阳而生</span></div>
        <div class="info-bar-item music-item">
            <span class="iconfont icon-yinfu2"></span>
            <div class="music-name">
                <span data-text="yifeng">yifeng</span>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .info-bar{
        color: #FFFFFF;
        font-size: 16px;
        padding-left: 10px;
    }
    .info-bar .info-bar-item{
        padding: 5px 0;
    }
    .info-bar-item .icon-yinfu2{
        margin-right: 5px;
        display: block;
    }
    .music-item{
        display: flex;
    }
    .music-item .music-name{
        width:120px;
        white-space: nowrap;
        overflow: hidden;
    }
    .music-item .music-name span{
        display:inline-block;
        animation: scroll 3s linear infinite;
    }
     .music-item .music-name span::after{
        content:attr(data-text);
        margin-left: 30px;
    }
    @keyframes scroll{
        from{
            transform: translateX(0);
        }
        to{
            transform: translateX(calc(-50% - 30px));
        }
    }
</style>