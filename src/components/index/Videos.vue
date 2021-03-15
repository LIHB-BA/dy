<template>
    <div class="videos">
        <video-player  class="video-player vjs-custom-skin"
          ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>  
    </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
export default {
    name:"Videos",
    data(){
        return{
            playerOptions : {
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', 
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [
                    {
                        src: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',  // 路径
                        type: 'video/mp4'  // 类型
                    }, 
                ],
                width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar:false
            }
        }
    },
    components:{
        videoPlayer
    }
}
</script>
<style>
    .videos{
        position:relative;
    }
    .videos .vis-custom-skin > .video-js .vjs-big-play-button{
        background: rgba(0,0,0,0.4);
        font-size: 30px;
        border-radius: 50%;
        width: 40px;
        height:40px;
    }
</style>