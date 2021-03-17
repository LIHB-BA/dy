<template>
    <div class="video-list">
        <swiper :options="swiperOption">
            <!-- 幻灯内容 -->
            <swiper-slide v-for="(item,index) in dataList" :key="index">
                <div><videos :videoList="item">
                    </videos></div>
            </swiper-slide>    
               <!-- <swiper-slide>
                <div><videos></videos></div>
            </swiper-slide> 
            <swiper-slide>slide2</swiper-slide> 
            <swiper-slide>slide3</swiper-slide>    
            <swiper-slide>slide4</swiper-slide>  -->
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'    //导入组件
import Videos from '../../components/index/Videos'
export default {
    name:"VideoList",
    data(){
        return{
            swiperOption: {
                    direction:"vertical",
                    grabCursor: true, 
                    setWrapperSize: true, 
                    autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
                    slidesPerView: 1,
                    mousewheel: true, 
                    mousewheelControl: true, 
                    height: window.innerHeight, // 高度设置，占满设备高度
                    resistanceRatio: 0, 
                    observeParents: true, 
                },
  dataList:[
        {
          id:"1",
          url:"http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4"
        },
        {
          id:"2",
          url:"http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4"
        },
        {
          id:"3",
          url:"http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4"
        },
        {
          id:"4",
          url:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
        }

      ] 
        }
    },
    components:{
        Swiper,
        SwiperSlide,
        Videos
    }
}
</script>
<style scoped>
    .video-list{
        height: 100%
    }
    .video-list .swiper-container{
        height: 100%
    }
</style>